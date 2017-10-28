import {
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import {SysConfig} from "../../../environments/sysConfig";
import {AuthService} from "../services/authService";


@Injectable()
export class HttpServiceWrapper {
  constructor(private http: Http,
              private config: SysConfig,
              private router: Router,
              private authService: AuthService) {
  }

  static createOptions(): RequestOptions {
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/json; charset=utf-8');
    options.headers.append('Accept', 'q=0.8;application/json;q=0.9');
    return options;
  }

  /**
   * Performs a request with `post` http method.
   */
  post(url: string, body: any, options?: any): Promise<Response> {
    return this.processOptions(url, options).then(requestOptions => {
      const requestBody = JSON.stringify(body);
      const result = this.http.post(this.config.fullUrl + '/' + url, requestBody, requestOptions).toPromise();

      if (options && options.noIntercept) {
        return result.then(res => {
          return res.json();
        });
      }

      return this.interceptAuthError(result).then(res => {
        return res.text() ? res.json() : {};
      });
    });

  }

  /**
   * Performs a request with `put` http method.
   */
  put(url: string, body: string, options?: any): Promise<Response> {
    return this.processOptions(url, options).then(requestOptions => {
      const requestBody = JSON.stringify(body);

      const result = this.http.put(this.config.fullUrl + '/' + url, requestBody, requestOptions).toPromise();

      if (options && options.noIntercept) {
        return result.then(res => {
          return res.json();
        });
      }

      return this.interceptAuthError(result).then(res => {
        return res.text() ? res.json() : {};
      });
    });
  }


  get(url: string, options?: any): Promise<Response> {
    return this.processOptions(url, options).then(requestOptions => {
      const result = this.http.get(this.config.fullUrl + '/' + url, requestOptions).toPromise();

      return this.interceptAuthError(result).then((res) => {
        return res.json();
      });
    });
  }

  /**
   * Performs a request with `delete` http method.
   */
  delete(url: string, options?: any): Promise<Response> {
    return this.processOptions(url, options).then(requestOptions => {
      requestOptions.headers.delete('Content-Type');

      const result = this.http.delete(this.config.fullUrl + '/' + url, requestOptions).toPromise();
      return this.interceptAuthError(result);
    });
  }


  protected processOptions(url: string, options: any): Promise<RequestOptions> {
    const requestOptions = HttpServiceWrapper.createOptions();

    return this.authService.acquireToken(url).then(token => {
      if (token) {
        requestOptions.headers.append('Authentication', 'Bearer ' + token);
      }

      if (!options) {
        return requestOptions;
      }

      return requestOptions;
    }, error => {
      console.log(error);
      this.router.navigate(["/login"]);
      return Promise.reject({message: error, status: 401});
    });
  }

  interceptAuthError(promise: Promise<Response>): Promise<Response> {
    return promise.catch(err => {
      if (err.status === 401) {
        this.authService.login();
        return;
      } else {
        return Promise.reject(err);
      }
    });
  }

}
