import {Injectable} from '@angular/core';

@Injectable()
export class SysConfig {
  public url;
  public port;
  public protocol = 'https';
  public fullUrl: string;


  public constructor() {
    this.url = 'trackyourlife-api.azurewebsites.net';
    this.protocol = 'https';

    if (this.port) {
      this.fullUrl = `${this.protocol}://${this.url}:${this.port}/api`;
    } else {
      this.fullUrl = `${this.protocol}://${this.url}/api`;
    }
  }
}
