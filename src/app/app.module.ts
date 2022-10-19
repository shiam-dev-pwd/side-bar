import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { TestListComponent } from './test-list/test-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TestArrService } from './test-arr.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [TestArrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
