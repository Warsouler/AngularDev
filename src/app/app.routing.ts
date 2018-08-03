import { ForeachComponent } from './foreach/foreach.component';
import { Link3Component } from './link3/link3.component';
import { Link2Component } from './link2/link2.component';
import { Link1Component } from './link1/link1.component';
import { IffComponent } from './iff/iff.component';
import { GooglemapsexampleComponent } from './googlemapsexample/googlemapsexample.component';
import { NggSylesandClassComponent } from './ngg-sylesand-class/ngg-sylesand-class.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DirattrComponent } from './dirattr/dirattr.component';
import { HostlistenersComponent } from './hostlisteners/hostlisteners.component';
import { HostbindersComponent } from './hostbinders/hostbinders.component';
import { BootstrapstylesComponent } from './bootstrapstyles/bootstrapstyles.component';
import { RouterparameterComponent } from './routerparameter/routerparameter.component';
import { Routerparameter2Component } from './routerparameter2/routerparameter2.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TestserviceComponent } from './testservice/testservice.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { CoordsComponent } from './coords/coords.component';
import { ListupdatelugaresComponent } from './listupdatelugares/listupdatelugares.component';
import { MarkermapComponent } from './markermap/markermap.component';
import { PosthttpfirebaseComponent } from './posthttpfirebase/posthttpfirebase.component';
import { MaptypescComponent } from './maptypesc/maptypesc.component';
import { PipesComponent } from './pipes/pipes.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';
// import { DirattrComponent } from './dirattr/dirattr.component';

import { Routes } from '@angular/router';
import { makeParamDecorator } from '@angular/core/src/util/decorators';
import { UpdatelugaresComponent } from './updatelugares/updatelugares.component';

export const appRoutes: Routes = [
{ path: 'link1', component: Link1Component},
{ path: 'link2', component: Link2Component},
{ path: 'link3', component: Link3Component},
{ path: 'linkforeach', component: ForeachComponent},
{ path: 'linkiff', component: IffComponent},
{ path: 'linkmaps', component: GooglemapsexampleComponent},
{ path: 'linkngstcl', component: NggSylesandClassComponent},
{ path: 'linkngsw', component: NgswitchComponent},
{ path: 'linkdiratr', component: DirattrComponent},
{ path: 'hostlistener', component: HostlistenersComponent},
{ path: 'Hostbinders', component: HostbindersComponent},
{ path: 'linkbss', component: BootstrapstylesComponent},
// cuando queremos pasar parametros por ruta se pone : y el nombre del parametro, si queremos mas de 1 seguimos con /:parametro y asi sucesivamente
// ej: linkrp/:id/:name
{ path: 'linkrp/:id', component: RouterparameterComponent},
{ path: 'linkrp2/:id', component: Routerparameter2Component},
{ path: 'linkcontacto', component: ContactoComponent},
{ path: 'linktestservice', component: TestserviceComponent},
{ path: 'linkfirebase', component: FirebaseComponent},
{ path: 'linkcoords', component: CoordsComponent},

{ path: 'linklul', component: ListupdatelugaresComponent},
{ path: 'linkul/:id', component: UpdatelugaresComponent},
{ path: 'linkmkc', component: MarkermapComponent},
{ path: 'linkpfb', component: PosthttpfirebaseComponent},
{ path: 'linkmtc', component: MaptypescComponent},
{ path: 'linkpc', component: PipesComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
// { path: 'linkngsw', component: NgswitchComponent},
];