import axios from 'axios';
import queryString from 'query-string';
import { CarDamageInterface, CarDamageGetQueryInterface } from 'interfaces/car-damage';
import { GetQueryInterface } from '../../interfaces';

export const getCarDamages = async (query?: CarDamageGetQueryInterface) => {
  const response = await axios.get(`/api/car-damages${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCarDamage = async (carDamage: CarDamageInterface) => {
  const response = await axios.post('/api/car-damages', carDamage);
  return response.data;
};

export const updateCarDamageById = async (id: string, carDamage: CarDamageInterface) => {
  const response = await axios.put(`/api/car-damages/${id}`, carDamage);
  return response.data;
};

export const getCarDamageById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/car-damages/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCarDamageById = async (id: string) => {
  const response = await axios.delete(`/api/car-damages/${id}`);
  return response.data;
};
