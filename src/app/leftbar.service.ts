import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})/*自动生成的装饰器*/

export class LeftbarService {
  /*声明以下变量，均为布尔类型，true or false*/
  public isShowLeftBar: boolean;
  public isODSelected: boolean;
  public isSSSelected: boolean;
  public isTLSelected: boolean;

  public videoSource: string;

  public index: string;
  constructor(private http: HttpClient) {
    this.isTLSelected = false;
    this.isODSelected = false;
    this.isSSSelected = false;
    this.videoSource = '../../assets/show.jpeg';
  }
  setVideoSource(s: string) {
    this.videoSource = s;
  }
  getVideoSource() {
    return this.videoSource;
  }
  httpOptions = {
    headers:new HttpHeaders({'Content-Type':"application/x-www-form-urlencoded;charset=UTF-8"})
  }

  //获得返回的数据
  getReturnData(url){
    return this.http.get(url,
   )
      .toPromise()
      .then((data: any) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /*设置index的值*/
  setIndex(index)  {
    this.index = index;
  }
  /*获取index的值*/
  getIndex() {
    return this.index;
  }

  /*设置图像检测左侧栏，在左侧栏的显示与不显示之间切换状态*/
  setLeftBar() {
    this.isShowLeftBar = !this.isShowLeftBar;
  }
  getLeftBar() {
    return this.isShowLeftBar;
  }
  setODSelected() {
    this.isODSelected = !this.isODSelected;
  }
  getODSelected() {
    return this.isODSelected;
  }
  setSSSelected() {
    this.isSSSelected = !this.isSSSelected;
  }
  getSSSelected() {
    return this.isSSSelected;
  }
  setTLSelected() {
    this.isTLSelected = !this.isTLSelected;
  }
  getTLSelected() {
    return this.isTLSelected;
  }
}
