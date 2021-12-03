import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GraficalComponent } from "./grafical/grafical.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafical', component: GraficalComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }