import {Injectable} from '@angular/core';

@Injectable()
export class SysConfig {
  public url;
  public port;
  public protocol = 'http';
  public fullUrl: string;
  public postLogoutRedirectUri: string;


  public constructor() {
    this.postLogoutRedirectUri = 'https://localhost:44349/';
    this.url = 'localhost';
    this.port = '44349';
    this.protocol = 'https';
    this.fullUrl = `${this.protocol}://${this.url}:${this.port}/api`;
  }
}
