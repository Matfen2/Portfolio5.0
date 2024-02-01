import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css'],
})
export class PresentComponent implements OnInit {
  constructor(private authService: AuthService) {}

  // MES PROJETS
  projets = [
    {
      id: 1,
      pict: '/assets/pict/projets/tlouLogo.png',
    },
    {
      id: 2,
      pict: '/assets/pict/projets/soulsHeroesLogo.png',
    },
    {
      id: 3,
      pict: '/assets/pict/projets/massEffectLogo.png',
    },
  ];

  // CONTACT
  successmsg: any = 'Message envoyé avec succès';
  errormsg: any = "Echec de l'envoie du message";

  answer = new FormGroup({
    adress: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  contact() {
    this.authService.sendMessage(this.answer.value).subscribe(
      (res) => {
        alert(this.successmsg);
      },
      (error) => {
        this.successmsg = false;
        this.errormsg = true;
        alert(this.errormsg);
      }
    );
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = '/assets/pict/CV Mathieu FENOUIL.jpg';
    link.download = 'CV_Mathieu_FENOUIL.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  ngOnInit(): void {}
}
