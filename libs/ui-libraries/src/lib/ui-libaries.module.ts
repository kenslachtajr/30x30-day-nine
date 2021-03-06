// import { RoutingModule } from '@das';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@phones/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // RoutingModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ToolbarComponent,
    WildcardComponent
  ],
  exports: [
    ToolbarComponent,
    LoginComponent,
    WildcardComponent,
    SignupComponent
  ]
})
export class UiLibrariesModule {}
