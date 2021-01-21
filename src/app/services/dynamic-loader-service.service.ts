import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ComponentLoader {
  loadChildren: () => Promise<any>;
}

@Injectable({
  providedIn: 'root'
})
export class DynamicLoaderServiceService {

  componentResolver!: ComponentFactoryResolver;

  constructor(componentResolver: ComponentFactoryResolver) {
    this.componentResolver = componentResolver;
  }


  forChild(vcr: ViewContainerRef, cl: ComponentLoader) : Observable<any> {
    return from(cl.loadChildren()!).pipe(
      map((component: any) => this.componentResolver.resolveComponentFactory(component)),
      map(componentFactory => vcr.createComponent(componentFactory))
    );
  }

  private loadLoginRequest(): any {

    return () =>
       import('../components/login-request/login-request.component').then(
           login=> login.LoginRequestComponent
       );


  }

  private loadLoginComponent() : any{
    return () =>
    import('../components/login-component/login-component.component').then(
      login=> login.LoginComponentComponent
  );

  }

  loadComponent(viewContainerRef: ViewContainerRef , isLogin: boolean){
     viewContainerRef.clear();
     console.log(this.loadLoginComponent());
    this.forChild(viewContainerRef, {loadChildren: isLogin? this.loadLoginComponent(): this.loadLoginRequest()}).subscribe(data=>
      {
       console.log("data changes");
      })
  }



}
