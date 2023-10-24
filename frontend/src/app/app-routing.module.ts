
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'tabla', component: TablaComponent },
    { path: '**', component: InicioComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
