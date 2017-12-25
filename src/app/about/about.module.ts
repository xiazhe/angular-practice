import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { AboutComponent } from './about.component';
import { routes } from './about.routes';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})
export class AboutModule {
    public static routes = routes;
    constructor() {
      console.log('`DevModuleModule` module initialized');
    }
 }
