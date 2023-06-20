import * as yup from 'yup';

export const carDamageValidationSchema = yup.object().shape({
  image: yup.string().required(),
  motorist_id: yup.string().nullable(),
});
