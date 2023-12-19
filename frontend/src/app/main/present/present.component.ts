import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css'],
})
export class PresentComponent implements OnInit {
  successmsg: any = '';
  errormsg: any = "";

  answer = new FormGroup({
    adress: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  contact() {
    this.authService.sendMessage(this.answer.value).subscribe(
      (res) => {
        this.successmsg = true;
        this.errormsg = false;
      },
      (error) => {
        this.successmsg = false;
        this.errormsg = true;
      }
    );
  }

  ngOnInit(): void {}
}
