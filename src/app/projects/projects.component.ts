import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: "Gestion d'un laboratoire de recherche ",
      description: 'Description of project 1',
      link: '/research-lab-web-app'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      link: '/project2'
    }
    // Add more projects
  ];
}
