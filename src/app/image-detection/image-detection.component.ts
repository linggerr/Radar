import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LeftbarService} from '../leftbar.service';

@Component({
  selector: 'app-image-detection',
  templateUrl: './image-detection.component.html',
  styleUrls: ['./image-detection.component.css']
})
export class ImageDetectionComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  ShowImage: string;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public http: HttpClient, private LeftbarService: LeftbarService) {

  }

  ngOnInit() {
    this.ShowImage = this.LeftbarService.getVideoSource();
  }

}
