import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.covid19tracking.narrativa.com/api/2020-08-31/country/spain',
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
