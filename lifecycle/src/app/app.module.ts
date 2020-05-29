import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Angular Material Imports
import { MaterialModule } from './material.module';

// Components Imports
import { MainLifecycleComponent } from './components/main-lifecycle/main-lifecycle.component';
import { LifecycleChildComponent } from './components/main-lifecycle/lifecycle-child/lifecycle-child.component';
import { ChildChildComponent } from './components/main-lifecycle/lifecycle-child/child-child/child-child.component';
import { CheckComponent } from './components/check/check.component';
import { CheckChildComponent } from './components/check/check-child/check-child.component';

@NgModule({
  declarations: [AppComponent, MainLifecycleComponent, LifecycleChildComponent, ChildChildComponent, CheckComponent, CheckChildComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
