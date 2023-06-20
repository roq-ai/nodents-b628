import * as yup from 'yup';

export const quoteValidationSchema = yup.object().shape({
  price: yup.number().integer().required(),
  workshop_id: yup.string().nullable(),
  car_damage_id: yup.string().nullable(),
});
