import {Injectable} from '@angular/core';

@Injectable()
export class SysConfig {
  public url;
  public port;
  public protocol = 'http';
  public fullUrl: string;


  public constructor() {
    this.url = 'localhost';
    this.port = '5000';
    this.protocol = 'http';
    this.fullUrl = `${this.protocol}://${this.url}:${this.port}/api`;
  }
}
