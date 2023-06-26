import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};

const dellToken = () => {
  instance.defaults.headers.common['Authorization'] = "";
};

export const register = async body => {
  const { data } = await instance.post('/users/signup', body);
  setToken(`Bearer ${data.token}`);
  return data
};

export const login = async body => {
  const { data } = await instance.post('/users/login', body);
  setToken(`Bearer ${data.token}`);
  return data;
};

export const getCurrent = async () => {
  const { data } = await instance.get('/users/current')
  return data;
};

export const logout = async () => {
  await instance.post('/users/logout')
  dellToken()
};
