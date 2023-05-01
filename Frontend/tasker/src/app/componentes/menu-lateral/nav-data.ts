import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
    {
        routerLink: 'dashboard',
        icon: 'fas fa-home',
        label: 'Dashboard',
        items: [
            {
                routerLink: 'usuarios/listar-usuarios',
                label: 'Listar Usuários',
                items: [
                    {
                        routerLink: 'usuarios/listar-usuarios',
                        label: 'Listar Usuários',
                    },
                    {
                        routerLink: 'usuarios/cadastrar-usuarios',
                        label: 'Cadastrar Usuários',
                    },
                ],
            },
            {
                routerLink: 'usuarios/cadastrar-usuarios',
                label: 'Cadastrar Usuários',
            },
        ],
    },
    {
        routerLink: 'usuarios',
        icon: 'fas fa-users',
        label: 'Usuários',
        items: [
            {
                routerLink: 'usuarios/listar-usuarios',
                label: 'Listar Usuários',
                items: [
                    {
                        routerLink: 'usuarios/listar-usuarios',
                        label: 'Listar Usuários',
                    },
                    {
                        routerLink: 'usuarios/cadastrar-usuarios',
                        label: 'Cadastrar Usuários',
                    },
                ],
            },
            {
                routerLink: 'usuarios/cadastrar-usuarios',
                label: 'Cadastrar Usuários',
            },
        ],
    },
];
