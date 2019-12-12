import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-objectdetection',
  templateUrl: './objectdetection.component.html',
  styleUrls: ['./objectdetection.component.css']
})
export class ObjectdetectionComponent implements OnInit {

  constructor(public http: HttpClient) { }

  testAPI() {
    this.http.get('http://202.115.11.197:8881/od/test').subscribe(response => {
        console.log(response);
    });
  }

  ngOnInit() {
    // this.testAPI();
  }
}
