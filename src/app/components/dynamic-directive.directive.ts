import { Component, Directive, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-directive',
  templateUrl: 'dynamic-directive.html'
})
export class DynamicDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}

}
