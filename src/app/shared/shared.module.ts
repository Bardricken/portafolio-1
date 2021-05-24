import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ErrorPageComponent, FooterComponent, NavbarComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
  exports: [ErrorPageComponent, FooterComponent, NavbarComponent],
})
export class SharedModule {}
