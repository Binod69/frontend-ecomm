import HttpService from './http.service';
import AppConstant from '../config/constants';
import ApiEndpoints from '../config/api.endpoints';

class AuthService extends HttpService {
  login = async (data) => {
    try {
      let loginResponse = await this.postRequest(ApiEndpoints.LOGIN, data);
      localStorage.setItem(
        AppConstant.AUTH_KEY,
        loginResponse.result.accessToken
      );
      let user = {
        id: loginResponse.result.userDetail._id,
        name: loginResponse.result.userDetail.name,
        email: loginResponse.result.userDetail.email,
        image: loginResponse.result.userDetail?.image?.[0],
        role: loginResponse.result.userDetail.role,
      };
      localStorage.setItem(AppConstant.AUTH_USER_KEY, JSON.stringify(user));
      return loginResponse.result;
    } catch (err) {
      console.log('login error', err);
      throw err;
    }
  };

  getLoggedInUser = async () => {
    try {
      let response = await this.getRequest(ApiEndpoints.LOGGEDINUSER, {
        login: true,
      });
      return response;
    } catch (err) {
      throw err;
    }
  };

  register = async (data) => {
    try {
      let response = await this.postRequest(ApiEndpoints.REGISTER, data, {
        file: true,
      });
      return response;
    } catch (err) {
      console.log('registererror:', err);
      throw err;
    }
  };

  updatePassword = async (data) => {
    try {
      let response = await this.postRequest(ApiEndpoints.CHANGEPASSWORD, data, {
        login: true,
      });

      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}

const authSvc = new AuthService();
export default authSvc;
