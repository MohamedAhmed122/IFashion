import axios from 'axios';

export const baseURL = 'http://localhost:5000/api/';

// TODO: add redux start token form redux persist
const instance = axios.create({
  baseURL,
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    console.log('axios error', error, error.response);
    return Promise.reject(error.response);
  },
);

export {instance as axios};
