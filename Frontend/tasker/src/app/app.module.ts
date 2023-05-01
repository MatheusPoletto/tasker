import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ListarUsuariosComponent } from './paginas/usuarios/listar-usuarios/listar-usuarios.component';

@NgModule({
    declarations: [AppComponent, MenuLateralComponent, PaginaComponent, DashboardComponent, ListarUsuariosComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
