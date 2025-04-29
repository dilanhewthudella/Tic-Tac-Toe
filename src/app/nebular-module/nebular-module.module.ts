import { NgModule } from '@angular/core';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbIconModule,
  NbCardModule,
  NbSidebarModule,
  // Add other Nebular modules you need
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [],
  imports: [
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
    // Add other Nebular modules you need
  ],
  exports: [
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbCardModule,
    NbSidebarModule,
    NbEvaIconsModule,
    // Export all modules that you want to use in components
  ],
})
export class NebularModule {}
