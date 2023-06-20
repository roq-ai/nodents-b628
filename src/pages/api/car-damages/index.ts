import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { carDamageValidationSchema } from 'validationSchema/car-damages';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getCarDamages();
    case 'POST':
      return createCarDamage();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getCarDamages() {
    const data = await prisma.car_damage
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'car_damage'));
    return res.status(200).json(data);
  }

  async function createCarDamage() {
    await carDamageValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.quote?.length > 0) {
      const create_quote = body.quote;
      body.quote = {
        create: create_quote,
      };
    } else {
      delete body.quote;
    }
    const data = await prisma.car_damage.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
