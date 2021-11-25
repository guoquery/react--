import { environment } from "../../environment/environment";
import { api } from "../../services/api.service";
import { encodedParam } from "../common";

class LRequest {
  static config: any = {};

  //  headerConfig: any = {
  //   'Content-Type': 'application/json',
  //   accept: 'application/json',
  // }

  // private handleData = (res: any): Promise<any> => {
  //   return new Promise((resolve: any, reject: any) => {
  //     switch (res.statusCode) {
  //       case 200: // 请求成功
  //         if (res.data.Code && res.data.Result) {
  //           // 若无权限或数据与当前机构不同一机构，则返回主页
  //           if (
  //             res.data.Result === 2
  //           ) {
  //             if (res.data.Code === 2052) {
  //               this.router.redirectTo('/pages/noPermission/noPermission')
  //               uni.showToast({
  //                 title: res.data.Message,
  //                 duration: 2000,
  //               })
  //             }
  //             if (res.data.Code === 2060) {
  //               uni.showToast({
  //                 title: res.data.Message,
  //                 duration: 2000,
  //                 success: function (res) {

  //                 },
  //                 complete: () => {
  //                   setTimeout(() => {
  //                     this.router.redirectTo('/pages/login/login')
  //                   }, 2000);
  //                 }
  //               });
  //               reject(res)
  //             } else {
  //               // #ifdef APP-PLUS
  //               (function () {
  //                 plus.nativeUI.toast(
  //                   `<font color="#fa3534">${res.data.Message}</font>`,
  //                   {
  //                     type: 'richtext',
  //                     duration: 'shot',
  //                     richTextStyle: { align: 'center' },
  //                     padding: '30px',
  //                     verticalAlign: 'center',
  //                     background: '#fef0f0'
  //                   } as any
  //                 );
  //               })()
  //               // #endif
  //               // #ifdef H5
  //               uni.showToast({
  //                 title: res.data.Message,
  //                 icon: 'none'
  //               });
  //               // #endif
  //               resolve(res.data)
  //             }

  //           } else {
  //             resolve(res.data)
  //           }
  //         } else {
  //           resolve(res.data)
  //         }
  //         break
  //       // case 302: // 重定向
  //       //     this.router.navigate(['/login']);
  //       //     break;
  //       case 0: // 错误
  //         break
  //       case 302: // 重定向
  //         this.router.redirectTo('/pages/login/login')
  //         break
  //       case 400: //
  //         reject(res.data.error_description)
  //         break
  //       case 401: // 未登录状态码(登陆时白)
  //         this.router.redirectTo('/pages/login/login')
  //         break
  //       case 402:
  //       case 403:
  //       case 404:
  //       case 500:
  //         break
  //     }
  //   })
  // }

  /**
   * interceptors
   *
   * @memberof LRequest
   */
  interceptors = {
    request: (url: string, option: any) => {
      const apiUrl = environment.apiUrl + url;
      const requestOption = {
        ...{
          headers: {
            Authorization: `Bearer ${api.token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
        ...option,
      };
      return { url: apiUrl, option: requestOption };
    },
    response: async (res: any) => {
      // return this.handleData(res);
    },
  };
  /**
   * fetch
   *
   * @param {string} url
   * @param {*} option
   * @return {*}  {Promise<any>}
   * @memberof LRequest
   */
  public async request(url: string, option: any): Promise<any> {
    try {
      console.log(url, option);
      const response = await fetch(url, option);
      console.log(response.status);
      console.log(response.statusText);
      return await response.json();
    } catch (error) {}
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
    urlencodedHeader.append(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
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
