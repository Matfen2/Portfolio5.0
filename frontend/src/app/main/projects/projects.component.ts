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
      name: "CAR'S EAGLE",
      mainPict: '/assets/pict/projets/carsEagleSite.png',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'MYSQL/PHP',
      hrefGithub: 'https://github.com/Matfen2/CarsEagle',
      hrefSite: 'https://cars-eagle.vercel.app/show',
    },
    {
      id: 2,
      name: "SOUL'S HEROES",
      mainPict: '/assets/pict/projets/soulsHeroesSite.png',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'API/CRUD OPERATIONS',
      hrefGithub: 'https://github.com/Matfen2/Souls-Heroes',
      hrefSite: 'https://souls-heroes.vercel.app/univers',
    },
    {
      id: 3,
      name: 'MASS EFFECT',
      mainPict: '/assets/pict/projets/massEffectSite.png',
      langageOne: 'ANGULAR',
      langageTwo: 'TYPESCRIPT',
      langageThree: 'SCSS',
      hrefGithub: 'https://github.com/Matfen2/Mass-Effect',
      hrefSite: 'https://mass-effect.vercel.app/home',
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
