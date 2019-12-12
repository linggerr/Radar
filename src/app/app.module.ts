import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ObjectdetectionComponent } from './objectdetection/objectdetection.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { RightbartemplateComponent } from './rightbartemplate/rightbartemplate.component';
import { FormsModule} from '@angular/forms';
import { LeftbarService} from './leftbar.service';
/*引入创建的Radar服务*/
import { RadarService } from './service/radar.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ImageDetectionComponent } from './image-detection/image-detection.component';
import { SemanticSegmantationComponent } from './semantic-segmantation/semantic-segmantation.component';
import { SemantisRightComponent } from './SemantisRight/semantis-right/semantis-right.component';
import { RadarLeftBarComponent } from './radar-left-bar/radar-left-bar.component';
import { RadarDetectionComponent } from './radar-detection/radar-detection.component';
import { RadarInfoComponent } from './radar-info/radar-info.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObjectdetectionComponent,
    LeftsidebarComponent,
    RightbartemplateComponent,
    ImageDetectionComponent,
    SemanticSegmantationComponent,
    SemantisRightComponent,
    RadarLeftBarComponent,
    RadarDetectionComponent,
    RadarInfoComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LeftbarService, RadarService], /*配置注入RadarService服务*/
  bootstrap: [AppComponent]
})
export class AppModule { }
