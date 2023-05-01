import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ListarUsuariosComponent } from './paginas/usuarios/listar-usuarios/listar-usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'usuarios/listar-usuarios',
        component: ListarUsuariosComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}
