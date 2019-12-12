import { Component, OnInit } from '@angular/core';
import {LeftbarService} from '../../leftbar.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-semantis-right',
  templateUrl: './semantis-right.component.html',
  styleUrls: ['./semantis-right.component.css']
})
export class SemantisRightComponent implements OnInit {
  public listItems: any[]=[];//用来接受后端传递的值
  private pixAcc:any;
  private mIou:any;
  private FPS:any;
  constructor(private LeftbarService : LeftbarService) { }
  getMessage()
  {
    this.LeftbarService.getReturnData("http://202.115.11.197:8881/SS_History/test1_data").then((data)=>{
      this.pixAcc=data['pixAcc']
      this.mIou=data['mIou']
      this.FPS=data['FPS']
    });
    this.getMessage()
  }

  ngOnInit() { 
   
  }
  ngAfterViewInit()
  {
   //this.getMessage()
  }

}
