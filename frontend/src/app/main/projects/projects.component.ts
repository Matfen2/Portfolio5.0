import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ProjetDetail {
  id: number;
  name: string;
  mainPict: string;
  langageOne: string;
  langageTwo: string;
  langageThree: string;
  hrefGithub: string;
  hrefSite: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projetId!: number;
  projetData: ProjetDetail | undefined;

  projetDetails: ProjetDetail[] = [
    {
      id: 1,
      name: 'HEAL GAMER',
      mainPict: '/assets/pict/projets/healGamerSite.png',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'SCSS',
      hrefGithub: 'https://github.com/Matfen2/HealGamer',
      hrefSite: 'https://matfen2.github.io/test-second-deploy-github/',
    },
    {
      id: 2,
      name: 'BACK WORLD',
      mainPict: '/assets/pict/projets/backWorldSite.png',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'SCSS',
      hrefGithub: 'https://github.com/Matfen2/BackWorld',
      hrefSite: 'https://back-world-2b7ce022df91.herokuapp.com/main-page',
    },
    {
      id: 3,
      name: 'ANIMUS',
      mainPict: '/assets/pict/projets/animusSite.png',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'SCSS',
      hrefGithub: 'https://github.com/Matfen2/Animus',
      hrefSite: 'https://animus-87d3c39892ed.herokuapp.com/main-page',
    },
  ];

  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.projetId = +params['id'];
      try {
        this.projetData = this.projetDetails.find(
          (projet) => projet.id === this.projetId
        );
      } catch (error) {
        console.error(
          'Erreur lors de la récupération des données du projet :',
          error
        );
      }
    });
  }
}
