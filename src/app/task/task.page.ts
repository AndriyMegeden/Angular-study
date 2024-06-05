import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { QuestionsConfig } from '../interfaces/main.interface';
import { questions } from '../interfaces/main.settings';


@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})




export class TaskPage implements OnInit {

 
  @Input() isAuth: boolean = false;



  //робота над реактивними формами
  country: any;
  countriesWithAdress: any;
  
  //<!-- кнопка яка відправляє дані які ввів користувач -->
  
  countryCityForm: FormGroup;

  countriesWithCities = [
    {
      country: 'США',
      cities:
       ['Нью-Йорк', 'Лос-Анджелес', 'Чикаго', 'Сан-Франциско'],
      adress:
       ['123 Main Street, Los Angeles, CA 90001', '456 Elm Avenue, New York, NY 10001', '789 Oak Lane, Chicago, IL 60601'],
    },
    {
      country: 'Франция',
      cities: 
        ['Париж', 'Марсель', 'Лион', 'Тулуза'],
      adress:
        ['10 Rue de la République, Paris, 75001', '25 Avenue des Champs-Élysées, Lyon, 69002', '8 Rue du Commerce, Marseille, 13001'],
    },
    // Добавьте другие страны и их города по аналогии
  ];
  authService: any;
                                              // public auth: AuthService потрібна для перевірки чи авторизований користувач
  constructor(private formBuilder: FormBuilder, public auth: AuthService) {
    this.countryCityForm = this.formBuilder.group({
      selectedCountry: new FormControl('США'),
      selectedCity: new FormControl(''),
      selectedAdress: new FormControl(''),
        name: new FormControl('Aaaa', [Validators.required, nameValidator()]),
        surname: new FormControl('Aaaa', [Validators.required, surnameValidator()]),
        // валидатор required - поле ввода обовязкове. pattern(/^[0-9]+$/) значить що повинні бути тільки цифри
        email: new FormControl('a@gmail.com', [
          Validators.required,
          Validators.email,
        ]),
        country: new FormControl('country'),
        city: new FormControl('city'),
        address: new FormControl('address'),
        phone_number: new FormControl('+380 995676884', [
          Validators.required,
          phoneValidator(),
        ]),
        password: new FormControl('password', [
          Validators.required,
          passwordValidator(),
        ]),
        new_password: new FormControl('new_password', [
          Validators.required,
          new_passwordValidator(),
        ]),


    });
  }
  

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }


  // Повертають масиви міст та адрес для обраної країни відповідно.
  get selectedCountryCities() {
    const selectedCountry = this.countryCityForm.get('selectedCountry')?.value;
    const country = this.countriesWithCities.find(c => c.country === selectedCountry);
    return country ? country.cities : [];
  }

  get selectedCountryAdress() {
    const selectedCountry = this.countryCityForm.get('selectedCountry')?.value;
    const country = this.countriesWithCities.find(c => c.country === selectedCountry);
    return country ? country.adress : [];
  }
  

  onCountryChange() {
    this.countryCityForm.get('selectedCity')?.setValue(''); // Скидаємо вибір міста при зміні країни
  }


  submitForm() {
    console.log(this.countryCityForm);
  }

  getData(){
    console.log(this.countryCityForm.value)
    
   }
  
  ngOnInit() {}
}
// потрібно для валідації по назві і прописати назву в name: new FormControl
export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const name = control.value;
    //на 1 велику літеру
    const firstChar = name.charAt(0);
    if (name && name.length < 4) {
      return { shortName: true };
    }
    if (name && name.length > 8) {
      return { longName: true };
    }
    // задає валідацію на букви і на 1 велику літеру
    if (
      !/^[A-Z][a-zA-Z]*$/.test(name) ||
      firstChar !== firstChar.toUpperCase()
    ) {
      return { nameFormat: true };
    }
    return null;
  };
}

export function surnameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const name = control.value;
    //на 1 велику літеру
    const firstChar = name.charAt(0);
    if (name && name.length < 4) {
      return { shortName: true };
    }
    if (name && name.length > 8) {
      return { longName: true };
    }
    // задає валідацію на букви і на 1 велику літеру
    if (
      !/^[A-Z][a-zA-Z]*$/.test(name) ||
      firstChar !== firstChar.toUpperCase()
    ) {
      return { nameFormat: true };
    }
    return null;
  };
}

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneNumber = control.value;

    if (!/^\+\d{3} \d{9}$/.test(phoneNumber)) {
      return { phoneFormat: true };
    }

    return null;
  };
}

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const name = control.value;
    //на 1 велику літеру
    const firstChar = name.charAt(0);
    if (name && name.length < 8) {
      return { shortName: true };
    }
    return null;
  };
}

export function new_passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const name = control.value;
    //на 1 велику літеру
    const firstChar = name.charAt(0);
    if (name && name.length < 8) {
      return { shortName: true };
    }
    return null;
  };
}












