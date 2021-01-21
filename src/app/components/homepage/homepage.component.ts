import { DynamicLoaderServiceService } from './../../services/dynamic-loader-service.service';
import { DynamicDirectiveDirective } from './../dynamic-directive.directive';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DynamicPageComponent } from '../dynamic-page/dynamic-page.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit , AfterViewInit {

  @ViewChild(DynamicDirectiveDirective, { static: true })
  dynamicDirective! : DynamicDirectiveDirective;

  @ViewChild("#home") dynamicHomeElement!: ElementRef;

  name = 'Sathish';

  mail = "sathishkumar.kanda@gmail.com";

  loaderService!: DynamicLoaderServiceService;

  constructor(loaderService: DynamicLoaderServiceService) {
    this.loaderService = loaderService;
   }

  ngOnInit(): void {
    const viewContainerRef = this.dynamicDirective.viewContainerRef;
    this.loaderService.loadComponent(viewContainerRef,false);
  }

 //  @ViewChild(DynamicPageComponent) dynamicPage!: DynamicPageComponent;


  ngAfterViewInit(){
   //  console.log("in parent... "+this.dynamicPage.dynamicElement);

  }

}
