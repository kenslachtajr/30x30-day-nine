import { AuthTokenInterceptorService } from '@phones/core-data';
import { UiLibrariesModule } from '@phones/ui-libraries';
import { CoreDataModule } from '@phones/core-data';
import { MaterialModule } from '@phones/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhonesComponent } from './phones/phones.component';
import { PhonesItemComponent } from './phones/phones-item/phones-item.component';
import { PhonesDetailsComponent } from './phones/phones-details/phones-details.component';
import { PhonesListComponent } from './phones/phones-list/phones-list.component';
import { RoutingModule } from './routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent,
    PhonesItemComponent,
    PhonesDetailsComponent,
    PhonesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiLibrariesModule,
    RoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
