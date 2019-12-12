import { Component } from '@angular/core';
import {LeftbarService} from './leftbar.service';
import {RadarService} from './service/radar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'driverless-web';

  // tslint:disable-next-line:variable-name no-shadowed-variable
  constructor(private LeftbarService: LeftbarService ,private RadarService:RadarService) {}
  isImageDetection() {
    // @ts-ignore
    return this.LeftbarService.isShowLeftBar;
  }

  isOD() {
    return this.LeftbarService.isODSelected;
  }
  isSS() {
    return this.LeftbarService.isSSSelected;
  }

  /*毫米波跳转函数*/
  isRadarDetection() {
    return this.RadarService.isShowRadarLeft;
  }

    /*当“开始检测被选中”,RadarService中初始化为false*/
  isRS() {
    return this.RadarService.isRSSelected;
  }

  /*当“雷达信息被选中”，同上*/
  isRI() {
    return this.RadarService.isRISelected;
  }
}
