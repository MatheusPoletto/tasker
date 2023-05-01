import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ListarUsuariosComponent } from './paginas/usuarios/listar-usuarios/listar-usuarios.component';
import { SubnivelMenuLateralComponent } from './componentes/menu-lateral/subnivel-menu-lateral.component';

@NgModule({
    declarations: [AppComponent, MenuLateralComponent, PaginaComponent, DashboardComponent, ListarUsuariosComponent, SubnivelMenuLateralComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
