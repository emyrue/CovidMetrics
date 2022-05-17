import instance from '../axios/axios';
import { saveData } from './stats';

const getStats = async (region, dispatch) => {
  const response = await instance.get(region);
  console.log(response.data.dates['2020-08-31'].countries.Spain);
  const object = response.data.dates['2020-08-31'].countries.Spain;
  const action = saveData(object);
  dispatch(action);
};

export default getStats;
