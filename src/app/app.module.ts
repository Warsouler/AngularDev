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
import { FirebaseComponent } from './firebase/firebase.component';


// Una vez instalado angularfirebase para angular 4+
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CoordsComponent } from './coords/coords.component';
import { CoordService } from './services/coord.service';
import { UpdatelugaresComponent } from './updatelugares/updatelugares.component';
import { ListupdatelugaresComponent } from './listupdatelugares/listupdatelugares.component';
import { MarkermapComponent } from './markermap/markermap.component';
import { PosthttpfirebaseComponent } from './posthttpfirebase/posthttpfirebase.component';
import { MaptypescComponent } from './maptypesc/maptypesc.component';
import { PipesComponent } from './pipes/pipes.component';

// Constante de firebase la configuracion seria
export const firebaseConfig = {
  // apiKey: "xxxxxxxxxx",
  // authDomain: "your-domain-name.firebaseapp.com",
  // databaseURL: "https://your-domain-name.firebaseio.com",
  // storageBucket: "your-domain-name.appspot.com",
  // messagingSenderId: '<your-messaging-sender-id>'
  apiKey: "AIzaSyARuuwIsIfsZ6uYBcXSDBVIzeiSMz59Y0Y",
  authDomain: "platziangular-e62c4.firebaseapp.com",
  databaseURL: "https://platziangular-e62c4.firebaseio.com",
  // projectId: "platziangular-e62c4",
  storageBucket: "platziangular-e62c4.appspot.com",
  messagingSenderId: "267628503085"

};



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
    TestserviceComponent,
    FirebaseComponent,
    CoordsComponent,
    UpdatelugaresComponent,
    ListupdatelugaresComponent,
    MarkermapComponent,
    PosthttpfirebaseComponent,
    MaptypescComponent,
    PipesComponent

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

    // Inicializamos angularFireBase con la constante firebaseconfig
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,


  ],
  // Aca en providers ponemos los servicios
  providers: [LugaresService,CoordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
