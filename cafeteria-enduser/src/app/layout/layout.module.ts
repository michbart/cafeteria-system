import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    ToolbarComponent,
    MainLayoutComponent,
    FooterComponent,
  ],
  exports: [
    ToolbarComponent,
    MainLayoutComponent,
    FooterComponent,
  ],
})
export class LayoutModule {}
