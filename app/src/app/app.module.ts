import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SkiSlopesComponent } from './ski-slopes/ski-slopes.component';
import { PostSlopesComponent } from './post-slopes/post-slopes.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    SkiSlopesComponent,
    PostSlopesComponent,
    MainComponent,
  ],
  imports: [
    AuthModule,
    AppRoutingModule,
    BrowserModule, //MyModule.withProviders()
    CoreModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
