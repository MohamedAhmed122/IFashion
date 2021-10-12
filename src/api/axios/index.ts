import axiosPackage from 'axios';

export const server = {
  live: 'http://example.rr/api/',
};

export const baseURL = server.live;

// TODO: add redux start token form redux persist
const startToken = '122';

export const axios = axiosPackage.create({
  headers: {
    Authorization: startToken ? `Bearer ${startToken}` : '',
  },

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
