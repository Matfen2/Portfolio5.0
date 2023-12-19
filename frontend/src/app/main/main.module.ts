import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PresentComponent } from './present/present.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule, Routes } from '@angular/router';

const routesPages : Routes = [
  { path : 'present', component: PresentComponent },
  { path: 'projects/:id', component: ProjectsComponent },
  { path: '', redirectTo: '/present', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    PresentComponent,
    ProjectsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesPages),
  ]
})
export class MainModule { }
