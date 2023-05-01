import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RevenueComponent } from './revenue/revenue.component';
import {ChargeComponent} from "./charge/charge.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'charge',
        component:ChargeComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'revenue',
        component: RevenueComponent
    },

    {
        path: '**',
        redirectTo: 'dashboard'
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {path : 'charge' , component : ChargeComponent},


            {
                path: '',
                loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)

            }]},

];

@NgModule({
    imports:[
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes,{
            useHash: true
        })
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {}
