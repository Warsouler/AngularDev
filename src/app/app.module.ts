import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';
import { Link3Component } from './link3/link3.component';
import { ForeachComponent } from './foreach/foreach.component';
import { IffComponent } from './iff/iff.component';
import { GooglemapsexampleComponent } from './googlemapsexample/googlemapsexample.component';

// Importamos la libreria angular google maps despues de instalar
import { AgmCoreModule } from '@agm/core';
import { NggSylesandClassComponent } from './ngg-sylesand-class/ngg-sylesand-class.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DirattrComponent } from './dirattr/dirattr.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { HostlistenersComponent } from './hostlisteners/hostlisteners.component';
import { ContacrClicksDirective } from './directives/contar-clics.directive';
import { HostbindersComponent } from './hostbinders/hostbinders.component';
import { ContacrClicks2Directive } from './directives/hostbinder.directive';
import { BootstrapstylesComponent } from './bootstrapstyles/bootstrapstyles.component';
import { RouterparameterComponent } from './routerparameter/routerparameter.component';
import { Routerparameter2Component } from './routerparameter2/routerparameter2.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TestserviceComponent } from './testservice/testservice.component';
import { LugaresService } from './services/lugares.service';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    Link1Component,
    Link2Component,
    Link3Component,
    ForeachComponent,
    IffComponent,
    GooglemapsexampleComponent,
    NggSylesandClassComponent,
    NgswitchComponent,
    DirattrComponent,
    ResaltarDirective,
    HostlistenersComponent,
    ContacrClicksDirective,
    HostbindersComponent,
    ContacrClicks2Directive,
    BootstrapstylesComponent,
    RouterparameterComponent,
    Routerparameter2Component,
    ContactoComponent,
    TestserviceComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    // ponemos el apikey de google
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDKv4v3baFljI_9SpXrVwanhrjNRirNw9o',
    }),
  ],
  // Aca en providers ponemos los servicios
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
