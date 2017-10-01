import {NgModule, SkipSelf, Optional} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import {SharedModule} from '../shared/shared.module';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {loadsngResources} from '../utils/svg.util';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
              ir: MdIconRegistry,
              ds: DomSanitizer) {
    if (parent) {
      throw new Error('模块已存在，不能再次加载');
    }
    loadsngResources(ir, ds);
  }
}
