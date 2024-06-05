import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';


import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // потрібно для частини articles
 

  //створення масиву із заголовків в ts файлі
  itemsTitle = ['Category', 'Items', 'Gl Code', 'Amount', 'Sales Tax', 'Total'];
  pageOptionsList: any;
  title: any;
  description: any;
  //робота над шаблонними формами
  //привязка форм до кнопки
  submitForm(form: NgForm) {
    console.log(form);
  }




  //робота над реактивними формами
  reactiveForm: FormGroup = new FormGroup({
    name: new FormControl('Andriy'),
    // валидатор required - поле ввода обовязкове. pattern(/^[0-9]+$/) значить що повинні бути тільки цифри
    age: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
    ]),
    job: new FormControl(''),
    
  });
  //<!-- кнопка яка відправляє дані які ввів користувач -->
  submitForm2() {
    console.log(this.reactiveForm);
  }
  //<!-- додавання активного класу до кнопок по натисканню  -->
  activeButton: 'one' | 'two' = 'one';

  setActive(value: 'one' | 'two') {
    this.activeButton = value;
  }

  localItems: any = [
    //<!-- Це цикл1. цикл 1 має в собі цикл2 -->
    {
      id: 1,
      name: '',
      items: [
        //<!--Це цикл2. цикл 2 в середині цикла 1 -->
        {
          id: 1,
          name: '',
          glCode: null,
          amount: null,
          salesTax: null,
        },
      ],
    },
  ];

  salesTaxArrow = [
    { id: 1, title: 'No tax', value: 0 },
    { id: 2, title: 'NY', value: 10 },
    { id: 3, title: 'UA', value: 20 },
  ];

  //<!-- тег form i  (ngSubmit)="submitForm3(myForm3)" #myForm3="ngForm"
  // потрібна для відправки даних форми + функція в тс файлі -->
  submitForm3(myForm3: NgForm) {
    console.log(myForm3);
  }


// додає ще одну  категорію з полем вводу і кнопками по натисканню на кнопку
  addCategory() {
    this.localItems.push(
      //<!-- Це цикл1. цикл 1 має в собі цикл2 -->
      {
        id: -(new Date().getTime()),
        name: '',
        items: [
          //<!--Це цикл2. цикл 2 в середині цикла 1 -->
          {
            id: -(new Date().getTime()),
            name: '',
            glCode: 0,
            amount: 0,
            salesTax: {id: 0, title: '', value: 0},
          },
        ],
      }
    );
  }

  // видаляє категорію з полем вводу і кнопками по натисканню на кнопку
  removeCategory(id: number){
    const idx = this.localItems.findIndex((item: { id: number; }) => item.id === id)
    if (idx !== -1){
      this.localItems.splice(idx, 1);
    }
  }
}








