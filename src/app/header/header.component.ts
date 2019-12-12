import { Component, OnInit } from '@angular/core';
import {LeftbarService} from '../leftbar.service';
// import {HeaderService} from '../service/header.service';

/*在使用RadarService的页面引入服务，注册服务*/
import {RadarService} from '../service/radar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public acitvate = true;
  public currentData: string = null;
  public ShowCurrentData = true;
  public BanButton = false;
  public index: string = null;
  // public loading:boolean=false;
  // public content:string='';
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private LeftbarService: LeftbarService , private RadarService: RadarService) {/*配置RadarSer服务*/

  }
  ngOnInit() {
    // @ts-ignore
    this.acitvate = true;
    // @ts-ignore
    $('.ui.dropdown').dropdown();
    // this.HeaderService.setItem('loading',false)
    // this.HeaderService.setItem('content','')
  }
  showImageDetection() {
    // tslint:disable-next-line:triple-equals
    /*当LeftbarService中的字符串变量index为空时，显示警告*/
    if (this.LeftbarService.index == null) {
      alert('请先选择数据源');
      return;
    }

    // tslint:disable-next-line:triple-equals
/*    if (this.LeftbarService.isShowLeftBar == true) {
    } else { /!*在此函数中，如果LeftbarService服务中的布尔变量isShowLeftBar为false*!/
      this.LeftbarService.setLeftBar(); /!*false->true*!/
      this.LeftbarService.setVideoSource('http://202.115.11.197:8881/od/test?type=origin')
    }*/
    if (this.RadarService.isShowRadarLeft == true && this.LeftbarService.isShowLeftBar == false) {
      this.RadarService.setRadarLeft();
      this.LeftbarService.setLeftBar();
    } else if (this.LeftbarService.isShowLeftBar == true) {
    } else {
      this.LeftbarService.setLeftBar();
    }
  }

  showMapBuild() {
    // tslint:disable-next-line:triple-equals
    /*还未添加模块，此时LeftbarService中的isShowLeftBar若为true都变为false*/
    if (this.LeftbarService.isShowLeftBar == true) {
      this.LeftbarService.setLeftBar();
    }
  }

  showRadarDetection() {
    /*if (this.LeftbarService.isShowLeftBar == true) {
      this.LeftbarService.setLeftBar();
    } else if (this.RadarService.isShowRadarLeft == true) {
    } else {
      this.RadarService.setRadarLeft();
    }*/
    if (this.RadarService.isShowRadarLeft == true) {
      if (this.LeftbarService.isShowLeftBar == true) {
        this.LeftbarService.setLeftBar();
      } else {
      }
    } else if (this.LeftbarService.isShowLeftBar == true) {
      this.LeftbarService.setLeftBar();
      this.RadarService.setRadarLeft();
    } else {
      this.RadarService.setRadarLeft();
    }
  }

  /*在此函数中，如果LeftbarService服务中的布尔变量isShowLeftBar为true，执行函数setLeftBar()*/
  showHome() {
    // tslint:disable-next-line:triple-equals
   /* if (this.LeftbarService.isShowLeftBar == true ) {
      this.LeftbarService.setLeftBar(); /!*若isShowLeftBar是true，表示显示左侧栏，则通过函数置为false，即不显示左侧栏，变为主页空白*!/
    }*/
   if (this.LeftbarService.isShowLeftBar == true) {
     if (this.RadarService.isShowRadarLeft == true){
       this.LeftbarService.setLeftBar();
       this.RadarService.setRadarLeft();
     } else {
       this.LeftbarService.setLeftBar();
     }
   } else if (this.RadarService.isShowRadarLeft == true) {
     this.RadarService.setRadarLeft();
   }
  }
  SureDataset(dataName) {
    // this.loading=true;
    // this.content='数据集加载中，请稍后!';
    this.currentData = dataName;
    if ( dataName == 'cityscape') {
      this.index = '1';
    }
    this.LeftbarService.setIndex(this.index);
    this.ShowCurrentData = false;
    this.BanButton = true;

  }


  showHistory() {
    this.acitvate = false;
    // this.loading=false

  }

  showReal() {
   this.acitvate = true;
   this.BanButton = true;
   this.LeftbarService.setIndex('0'); /*设置index值为0*/

  //  this.HeaderService.setItem('loading',true)
  //  this.HeaderService.setItem('content','传感器初始化中，请稍后!')
  //  this.content='传感器初始化中，请稍后！'
  //  this.loading=true

  }
  cancel() {
    // this.loading=false;
    this.BanButton = false;
    this.ShowCurrentData = true;
  }
  start() {

  }
}
