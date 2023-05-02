import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ListarUsuariosComponent } from './paginas/usuarios/listar-usuarios/listar-usuarios.component';
import { SubnivelMenuLateralComponent } from './componentes/menu-lateral/subnivel-menu-lateral.component';
import { MenuSuperiorComponent } from './componentes/menu-superior/menu-superior.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

@NgModule({
    declarations: [
        AppComponent,
        MenuLateralComponent,
        PaginaComponent,
        DashboardComponent,
        ListarUsuariosComponent,
        SubnivelMenuLateralComponent,
        MenuSuperiorComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, OverlayModule, CdkMenuModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
