import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DishesModule } from '../dishes/dishes.module';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    DishesModule
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
