import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RadarService {/*RadarService是一个类，这里把这个类暴露出来*/

  public isShowRadarLeft: boolean;
  public isRSSelected: boolean;
  public isRISelected: boolean;

  constructor(public http: HttpClient) {
    this.isRSSelected = false;
    this.isRISelected = false;
  }

  httpOptions = {
    headers:new HttpHeaders({'Content-Type':"application/x-www-form-urlencoded;charset=UTF-8"})
  }

  setRadarLeft() {
    this.isShowRadarLeft = !this.isShowRadarLeft;
  }
  getRadarLeft() {
    return this.isShowRadarLeft;
  }
  setRSSelected() {
    this.isRSSelected = !this.isRSSelected;
  }
  getRSSelected() {
    return this.isRSSelected;
  }
  setRISelected() {
    this.isRISelected = !this.isRISelected;
  }
  getRISelected() {
    return this.isRISelected;
  }
}
