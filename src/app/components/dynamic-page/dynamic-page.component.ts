import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.scss']
})
export class DynamicPageComponent implements OnInit , AfterViewInit{

  @Input() name!: string;

  @Input() mail! : string;

  @ViewChild("indyn") dynamicElement!: ElementRef;


  constructor() { }


  ngOnInit(): void {
    console.log("In Init Your name "+this.name+"mail"+this.mail);
  }

  ngAfterViewInit(): void {
    console.log("In After View Init Your name "+this.name+"mail"+this.mail);
    console.log("Dynamic element changes");
    console.log("dynmaic native element" +this.dynamicElement.nativeElement);
  }

}
