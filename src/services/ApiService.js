import axios from 'axios';
import qs from 'qs';

const defaultConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
};

export default class ApiService {
  static baseUrl = `${process.env.REACT_APP_API_URL}`;

  static getConfigs = (additionalConfig = {}) => {
    const config = {
      ...defaultConfig,
      ...additionalConfig,
    };

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken !== null) {
      config.headers = { Authorization: user.accessToken };
    }
    return config;
  };

  static get = async (url, params) =>
    axios.get(url, this.getConfigs({ params }));

  static post = async function post(url, data) {
    return axios.post(url, data, this.getConfigs());
  };

  static put = async (url, data) => axios.put(url, data, this.getConfigs());

  static patch = async (url, data) => axios.patch(url, data, this.getConfigs());

  static delete = async (url) => axios.delete(url, this.getConfigs());

  static download = async (url) => axios.get(url, this.getConfigs());

  static upload = async (url, data) => {
    const config = this.getConfigs();
    config.headers['content-type'] = 'multipart/form-data';
    return axios.post(url, data, config);
  };
}
