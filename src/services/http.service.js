import axiosInstance from '../config/axios.config';
import AppConstant from '../config/constants';

class HttpService {
  headers = {};

  setHeader = (config) => {
    if (config['files']) {
      this.headers['Content-Type'] = 'multipart/form-data';
    } else {
      this.headers['Content-Type'] = 'application/json';
    }

    if (config['login']) {
      this.headers['Authorization'] =
        'Bearer ' + localStorage.getItem(AppConstant.AUTH_KEY);
    }
    if (config['params']) {
      this.headers['params'] = config['params'];
    }
  };
  postRequest = async (url, data, config = {}) => {
    //TODO: API CALL IN POST REQUEST
    try {
      this.setHeader(config);
      let response = await axiosInstance.post(url, data, {
        headers: this.headers,
      });
      // console.log('api response', response);
      return response.data;
    } catch (err) {
      console.log('httppost:', err);
      throw err;
    }
  };

  patchRequest = async (url, data, config = {}) => {
    //TODO: API CALL IN POST REQUEST
    try {
      this.setHeader(config);
      let response = await axiosInstance.patch(url, data, {
        headers: this.headers,
      });
      // console.log('api response', response);
      return response.data;
    } catch (err) {
      console.log('httppost:', err);
      throw err;
    }
  };

  getRequest = async (url, config = {}) => {
    try {
      this.setHeader(config);
      let response = await axiosInstance.get(url, {
        headers: this.headers,
      });
      return response.data;
    } catch (err) {
      console.log('HttpGetRequest', err);
      throw err;
    }
  };

  deleteRequest = async (url, config = {}) => {
    try {
      this.setHeader(config);
      let response = await axiosInstance.delete(url, {
        headers: this.headers,
      });
      return response.data;
    } catch (err) {
      console.log('HttpGetRequest', err);
      throw err;
    }
  };
}

export default HttpService;
