import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { RevenueComponent } from './revenue.component';
import {RevenueRoutingModule} from "./revenue-routing.module";
import {RevenueService} from "../services/revenue.service";

const routes: Routes = [
    { path: 'revenue', component: RevenueComponent },
    // Ajouter des routes supplémentaires ici
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        RevenueRoutingModule,
    ],
    declarations: [
        RevenueComponent,
    ],

})
export class RevenueModule { }