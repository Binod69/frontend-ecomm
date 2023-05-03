import ApiEndpoints from '../config/api.endpoints';
import HttpService from './http.service';
class BannerService extends HttpService {
  listAllBanner = async (params = null) => {
    try {
      let respone = await this.getRequest(ApiEndpoints.Banner, {
        login: true,
        params: params,
      });
      return respone;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}

const bannerSvc = new BannerService();
export default bannerSvc;
