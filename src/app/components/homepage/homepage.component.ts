import { DynamicLoaderServiceService } from './../../services/dynamic-loader-service.service';
import { DynamicDirectiveDirective } from './../dynamic-directive.directive';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit , AfterViewInit {

  @ViewChild(DynamicDirectiveDirective, { static: true })
  dynamicDirective! : DynamicDirectiveDirective;

  @ViewChild('home') private dynamicHomeElement!: ElementRef;

  name = 'Sathish';

  mail = "sathishkumar.kanda@gmail.com";

  loaderService!: DynamicLoaderServiceService;

  constructor(loaderService: DynamicLoaderServiceService, private rendered2: Renderer2, private elRef: ElementRef) {
    this.loaderService = loaderService;

   }

  ngOnInit(): void {

  }

 //  @ViewChild(DynamicPageComponent) dynamicPage!: DynamicPageComponent;


  ngAfterViewInit(){
    this.rendered2.setStyle(this.dynamicHomeElement.nativeElement,'color','red');
    const li = this.rendered2.createElement('li');
    const text = this.rendered2.createText('New li element from renderer');
    this.rendered2.appendChild(li, text);
    this.rendered2.appendChild(this.dynamicHomeElement.nativeElement, li);
    const div = this.rendered2.createElement('div');
    const beforeChild = this.rendered2.createText('beforeChild');
    this.rendered2.appendChild(div, beforeChild);
    this.rendered2.insertBefore(this.elRef.nativeElement.parentNode, div,this.elRef.nativeElement);

  }

}
