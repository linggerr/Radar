import { Component, OnInit } from '@angular/core';
import {LeftbarService} from '../leftbar.service'


@Component({
  selector: 'app-semantic-segmantation',
  templateUrl: './semantic-segmantation.component.html',
  styleUrls: ['./semantic-segmantation.component.css']
})
export class SemanticSegmantationComponent implements OnInit {
  public VideoSource : string;
  public ShowImage : String;
  constructor(private LeftbarService : LeftbarService) { }

  ngOnInit() {
    this.ShowImage = this.LeftbarService.getVideoSource();
    // if(this.LeftbarService.index=='0')
    // {
    // this.VideoSource = 'http://127.0.0.1:8888/SS/test';
    // }
    // if(this.LeftbarService.index=='1')
    // {
    //   this.VideoSource='http://127.0.0.1:8888/SS_History/test1';
    // }
  }
  
}
