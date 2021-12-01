import { environment } from "../../environment/environment";
import { environment as devEnvironment } from "../../environment/environment.dev";
import { api } from "../api.service";
import { encodedParam } from "../../utils/common";
class LRequest {
  static config: any = {};
  private _api: any = api;
  public baseApiUrl: string = process.env.NODE_ENV === "development" ? devEnvironment.apiUrl : environment.apiUrl;
  //   'Content-Type': 'application/json',
  //   accept: 'application/json',
  // }

  private async checkResponseStatus(res: Response): Promise<any> {
    return new Promise(async (resolve: any, reject: any) => {
      switch (res.status) {
        case 200: // 请求成功
          resolve(await res.json());
          break;
        case 0: // 错误
          break;
        case 400: //
          reject(await res.json());
          break;
        case 302: // 重定向
        case 401: // 未登录状态码(登陆时白)
          reject(await res.json());
          window.location.href = window.location.origin + "#/Login";
          break;
        case 402:
        case 403:
        case 404:
        case 500:
          break;
      }
      // return data;
    });
  }

  /**
   * interceptors
   *
   * @memberof LRequest
   */
  interceptors = {
    request: (url: string, option: any) => {
      const apiUrl = this.baseApiUrl + url;
      const requestOption = {
        ...{
          headers: {
            // Authorization: `Bearer ${this._api.token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
        ...option,
      };
      return { url: apiUrl, option: requestOption };
    },
    response: async (res: any) => {
      return this.checkResponseStatus(res);
    },
  };
  /**
   * fetch JSON
   *
   * @param {string} url
   * @param {*} option
   * @return {*}  {Promise<any>}
   * @memberof LRequest
   */
  public async request(url: string, option: any): Promise<any> {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const response: Response = await fetch(url, option);
        // console.log(response.status);
        // console.log(response.statusText)
        resolve(await this.interceptors.response(response));
      } catch (error) {
        // console.log("error", error);
        reject();
      }
    });
  }

  /**
   * get ("Content-Type","application/json")
   *
   * @param {string} url
   * @param {*} [data={}]
   * @return {*}  {Promise<any>}
   * @memberof LRequest
   */
  public async get(url: string, data?: any): Promise<any> {
    const paramUrl = url + encodedParam(data);
    const option = {
      method: "GET",
    };
    const completeOption = this.interceptors.request(paramUrl, option);
    return this.request(completeOption.url, completeOption.option);
  }

  /**
   * post ("Content-Type","application/x-www-form-urlencoded")
   *
   * @param {string} url
   * @param {*} [data={}]
   * @return {*}  {Promise<any>}
   * @memberof LRequest
   */
  public async urlencodedPost(url: string, data: any = {}): Promise<any> {
    const urlencodedHeader = new Headers();
    urlencodedHeader.append("Content-Type", "application/x-www-form-urlencoded");
    urlencodedHeader.append("Accept", "application/json, text/plain, */*");
    const option = {
      method: "POST",
      body: encodedParam(data, "urlencoded"),
      headers: urlencodedHeader,
    };
    const completeOption = this.interceptors.request(url, option);
    return this.request(completeOption.url, option);
  }

  /**
   * post ("Content-Type","application/json")
   *
   * @param {string} url
   * @param {*} [data={}]
   * @return {*}  {Promise<any>}
   * @memberof LRequest
   */
  public async post(url: string, data: any = {}): Promise<any> {
    const option = {
      method: "POST",
      body: JSON.stringify(data),
    };
    const completeOption = this.interceptors.request(url, option);
    return this.request(completeOption.url, completeOption.option);
  }
}

export const request = new LRequest();
