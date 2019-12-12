import { Component, OnInit } from '@angular/core';
import {RadarService} from '../service/radar.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-radar-left-bar',
  templateUrl: './radar-left-bar.component.html',
  styleUrls: ['./radar-left-bar.component.css']
})
export class RadarLeftBarComponent implements OnInit {
  public RSSelected: boolean;
  public RISelected: boolean;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private RadarService: RadarService, public http: HttpClient) { }

  ngOnInit() {
    this.RSSelected = this.RadarService.isRSSelected;
    this.RISelected = this.RadarService.isRISelected;
  }

  showRS() {
    this.RadarService.setRSSelected(); /*开始检测被选中，调用函数中变量isRSSelected由false变为true*/
    this.getRSactivate();
    if (this.RSSelected) {
      // @ts-ignore
      this.http.put('http://202.115.11.197:8881/od/test?type=OD').subscribe();
    } else if (!this.RSSelected && this.RISelected) {
      // @ts-ignore
      this.http.put('http://202.115.11.197:8881/od/test?type=SS').subscribe();
    } else {
      // @ts-ignore
      this.http.put('http://202.115.11.197:8881/od/test?type=origin').subscribe();
    }
  }

  getRSactivate() {
    this.RSSelected = this.RadarService.getRSSelected();
  }

  showRI() {
    this.RadarService.setRISelected();
    this.getRIactivate();
    if (this.RISelected) {
      // @ts-ignore
      this.http.put('http://202.115.11.197:8881/od/test?type=SS').subscribe();
    } else if (!this.RISelected && this.RSSelected) {
      // @ts-ignore
      this.http.put('http://202.115.11.197:8881/od/test?type=OD').subscribe();
    } else {
      // @ts-ignore
      this.http.put('http://202.115.11.197:8881/od/test?type=origin').subscribe();
    }
  }
  getRIactivate() {
    this.RISelected = this.RadarService.getRISelected();
  }

}
