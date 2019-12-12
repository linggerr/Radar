import { Component, OnInit } from '@angular/core';
import {LeftbarService} from '../leftbar.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.css']
})
export class LeftsidebarComponent implements OnInit {
  public ODSelected: boolean;
  public SSSelected: boolean;
  public TLSelected: boolean;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private LeftbarService: LeftbarService, public http: HttpClient) {}

  ngOnInit() {
    this.TLSelected = this.LeftbarService.isTLSelected;
    this.ODSelected = this.LeftbarService.isODSelected;
    this.SSSelected = this.LeftbarService.isSSSelected;
  }

  showOD() {
    this.LeftbarService.setODSelected();
    this.getODactivate();
    if (this.ODSelected) {
    // @ts-ignore
    this.http.put('http://202.115.11.197:8881/od/test?type=OD').subscribe();
    } else if (!this.ODSelected && this.SSSelected) {
      // @ts-ignore
      this.http.put('http://202.115.11.197:8881/od/test?type=SS').subscribe();
    } else {
      // @ts-ignore
      this.http.put('http://202.115.11.197:8881/od/test?type=origin').subscribe();
    }
  }
  getODactivate() {
    this.ODSelected = this.LeftbarService.getODSelected();
  }

  showSS() {
    this.LeftbarService.setSSSelected();
    this.getSSactivate();

    if (this.SSSelected) {
       // @ts-ignore
      this.http.put('http://202.115.11.197:8881/od/test?type=SS').subscribe();
    } else if (!this.SSSelected && this.ODSelected) {
      // @ts-ignore
    this.http.put('http://202.115.11.197:8881/od/test?type=OD').subscribe();
    } else {
      // @ts-ignore
    this.http.put('http://202.115.11.197:8881/od/test?type=origin').subscribe();
    }
  }
  getSSactivate() {
    this.SSSelected = this.LeftbarService.getSSSelected();
  }
  showTL() {
    this.LeftbarService.setTLSelected();
    this.getTLactivate();
  }
  getTLactivate() {
    this.TLSelected = this.LeftbarService.getTLSelected();
  }
}
