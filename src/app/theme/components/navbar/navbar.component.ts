import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  implements OnInit {

  @Input() public isAuth: boolean = false;

  @Input() public navbar: boolean = false;


  constructor(private authService: AuthService) {}

  //Цей код в компоненті слідкує за тим, чи користувач увійшов в систему. 
  // Коли стан аутентифікації змінюється, код оновлює локальну змінну, щоб компонент міг відреагувати на ці зміни
  // і змінювати своє відображення або поведінку в залежності від того, чи користувач увійшов чи вийшов з системи.
  // відповідно коли *ngIf="!isAuth" то показує повідомлення `авторизуйтесь`
  ngOnInit() {
    this.authService.isAuth$.subscribe((auth) => {
      this.isAuth = auth;
    });
  }

}
