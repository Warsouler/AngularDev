import { ForeachComponent } from './foreach/foreach.component';
import { Link3Component } from './link3/link3.component';
import { Link2Component } from './link2/link2.component';
import { Link1Component } from './link1/link1.component';
import { IffComponent } from './iff/iff.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
{ path: 'link1', component: Link1Component},
{ path: 'link2', component: Link2Component},
{ path: 'link3', component: Link3Component},
{ path: 'linkforeach', component: ForeachComponent},
{ path: 'linkiff', component: IffComponent},

];