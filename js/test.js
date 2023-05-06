"use strict";


//==================Запросы от сервера XMLHttpRequest===========================

// const inputRub = document.querySelector( '#rub' );
// const inputUsd = document.querySelector( '#usd' );
//
//
// inputRub.addEventListener( 'input', function () {
//   const request = new XMLHttpRequest();
//
//   request.open( 'GET', '../js/current.json' );
//   request.setRequestHeader( 'Content-type', 'application/json; charset=utf-8' );
//   request.send();
//
//   request.addEventListener( 'load', () => {
//     if ( request.status === 200 ) {
//       const data = JSON.parse( request.response );
//       inputUsd.value = ( +inputRub.value / +data.current.usd ).toFixed( 2 );
//     } else {
//       inputUsd.value = 'Что-то пошло не так';
//     }
//   } );
// } );

// status
// statusText
// response
// readyState


//===============Промисы==============================

// console.log( 'Запрос данных...' );
//
// const req = new Promise( function ( resolve, reject ) {
//   setTimeout( () => {
//     console.log( 'Подготовка данных...' );
//
//     const product = {
//       name: 'TV',
//       price: 2000
//     };
//
//     resolve( product );
//   }, 2000 );
// } );
//
// req.then( ( product ) => {
//   return new Promise( ( resolve, reject ) => {
//     setTimeout( () => {
//       product.status = 'order';
//       resolve( product );
//       // console.log( product );
//     }, 2000 );
//   } );
//
// } ).then( data => {
//   data.modify = true;
//   return data;
//
// } ).then( ( data ) => {
//   console.log( data );
// } ).catch( () => {
//   console.error( "Произошла ошибка" );
// } ).finally( () => {
//   console.log( 'Всё прекрасно' );
// } )

//----------------------------------------------

// const test = time => {
//   return new Promise( resolve => setTimeout( () => resolve(), time ) );
// };


// test( 1000 ).then( () => console.log( '1000 secs' ) );
// test( 2000 ).then( () => console.log( '2000 secs' ) );

// Promise.all( [ test( 1000 ), test( 2000 ) ] ).then( () => {
// console.log('All');
// } );

// Promise.race( [ test( 1000 ), test( 2000 ) ] ).then( () => {
//   console.log( 'Race' );
// } );

//===============FETCH API==============================

// fetch( 'https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify( { name: 'Achilles' } ),
//   headers: { 'Content-Type': 'application/json' }
// } )
//   .then( response => response.json() )
//   .then( json => console.log( json ) );

//=====================Перебор Массивов========================

// filter:

// const names = [ 'Achilles', 'November', 'cat', 'December' ];
//
// const shortNames = names.filter( name => {
//   return name.length < 5;
// } );
//
// console.log( shortNames );
//----------------------------------------------

// map:

// let answers = [ 'Achilles', 'November', 'cat', 'DecERer' ];
//
// const lowerCaseAnswers = answers.map( answer => answer.toLowerCase() );
// // answers = answers.map( answer => answer.toLowerCase() );
//
// console.log( lowerCaseAnswers );

//----------------------------------------------
// every/some:
//
// const arr = [ 4, 'qwerty', 'check' ];
// const arr2 = [ 4, 5, 6 ];
//
// console.log( arr.some( item => typeof ( item ) === 'number' ) );
//
// console.log( arr2.every( item => typeof ( item ) === 'number' ) );
//----------------------------------------------
// reduce
//
// const arr = [ 4, 5, 6, 1, 8, 2, 11 ];
// const arr2 = [ 'Achilles', 55, 'November', 'cat', 'DecERer' ];
//
// // const res = arr2.reduce( ( sum, current ) => `${ sum },  ${ current }` );
// const res = arr2.reduce( ( sum, current ) => `${ sum },  ${ current }`, 555 );
//
// console.log( res );
//----------------------------------------------
// Превратить Объект в Массивы

// const obj = {
//   ivan: 'persone',
//   Ann: 'persone',
//   dog: 'animal',
//   cat: 'animal',
// };

// const newArr = Object.entries( obj )
// const newArr = Object.entries( obj ).filter( item => {
// console.log( item[1] );
//   return item[ 1 ] === 'persone';
// } );

// const newArr = Object.entries( obj )
//   .filter( item => {
//     // console.log( item[ 1 ] );
//     return item[ 1 ] === 'persone';
//   } )
//   .map( item => {
//     // console.log( item[ 0 ] );
//     return item[ 0 ];
//   } );
//
// console.log( newArr );

//==================localStorage===========================

// localStorage.setItem( 'number', 5 ); // Вствка
// const a = localStorage.getItem( 'number' ); // Получение
// localStorage.removeItem( 'number' ); // Удаление
// console.log( localStorage );
// console.log( a );
// localStorage.clear(); // Очистка

//----------------------------------------------
// const form = document.querySelector( 'form' ),
//   checkbox = form.querySelector( 'input[type="checkbox"]' ),
//   changeColor = form.querySelector( '#color' ),
//   submit = form.querySelector( '#confirm' );
//
// if ( localStorage.getItem( 'isChecked' ) ) {
//   checkbox.checked = true;
// }
//
// if ( localStorage.getItem( 'bg' === 'changed' ) ) {
//   form.style.backgroundColor = 'crimson';
// }
//
// console.log( checkbox );
// checkbox.addEventListener( 'change', () => {
//   localStorage.setItem( 'isChecked', true );
// } );
//
//
//
// document.addEventListener( "click", ( e ) => {
//   const t = e.target;
//
//   if ( t == changeColor ) {
//     if ( localStorage.getItem( 'bg' ) === 'changed' ) {
//       localStorage.removeItem( 'bg' );
//       form.style.backgroundColor = 'white';
//     } else {
//       localStorage.setItem( 'bg', 'changed' );
//       form.style.backgroundColor = 'crimson';
//     }
//   }
// } );
//
// const persone = {
//   name: 'Achilles',
//   age: 30
// };
//
// const serializedPersone = JSON.stringify( persone );
// localStorage.setItem( 'Achilles', serializedPersone );
// console.log( JSON.parse( localStorage.getItem( 'Achilles' ) ) );
//=================РЕгулярные Выражения============================
// Флаги
//  Флаги можно комбинировать
// пример комбинаций /спс/gim // Ищет спс
// i Ищем что либо вне зависимости от регистра
// g Ищем несколько совпадений
// m Ищем в многострочном режиме
//----------------------------------------------
// Классы
//  \d ищет цифры
//  \w Ищет слова
//  \s ищет пробелы
//----------------------------------------------
// Обратные Классы
// Загланые буквы
//  \D ищет цифры
//  \W Ищет слова
//  \S ищет пробелы
//----------------------------------------------
// Методы поиска
// const ans = prompt( 'Введите ваше имя' );
// const reg = /n/i; // между палками вставить то что ищешь.
// const reg = /n/gi; // между палками вставить то что ищешь.
// search
// console.log( ans.search( reg ) ); //  он слабый и ищет только первное совпадение
// match
// console.log( ans.match( reg ) ); // Получаем массив c найденными значениями
// test
// console.log( reg.test( ans ) );
//  Вернет либо true либо False
//----------------------------------------------
// Изменение совпадений
// Метод replace
// 1) что ищем
// 2) на что меняем
//  Точка в Регулярных выражениях означает что берутся все значения как * в css
// const pass = prompt( 'Password' );
// console.log( pass.replace( /./g, "*" ) );
//  Результат воода  =  *****
// Если надо найти именно точку то нужно экранировать обратным слэшем перед символом поиска. сам слэш экранируется так же . то есть 2 слеша подрят.
// console.log( pass.replace( /\./g, "*" ) );
// console.log( '12-34-56'.replace( /-/g, ':' ) );
// Результат: 12:34:56
//----------------------------------------------
// Пример
// const str = 'My name is R2D2';
// console.log( str.match( /\w\d\w\d/i ) ); // R2D2 (Буква, цифра, буква, цифра)

//================Геттеры и Сеттерыю Акцессоры=============================

// const persone = {
//     name: 'Achilles',
//     age: 30,
//
//     // Геттер поволяет обращаться к данным объекта без вызова в стиле функций.
//     get userAge () {
//         return this.age;
//     },
//
//     // Сеттер позволяет менять значение, без него изменить через сеттер не получится.
//     set userAge ( num ) {
//         this.age = num;
//     }
// };
// // console.log( persone.userAge ); // Без скобок.
// console.log( persone.userAge = 40 ); // Без скобок.

//==============Инкапсуляция==== Просто защита объекта или класса===========================

// class User {
//     constructor ( name, age ) {
//         this.name = name;
//         this._age = age;
//     }
//     #surnage = 'Iskenderov';
//
//     say = () => {
//         console.log( `Имя пользователя: ${ this.name }, Фамилия: ${ this.#surnage } Возраст: ${ this.age }` );
//     };
//
//     get age () {
//         return this._age;
//     }
//
//     set age ( age ) {
//         if ( typeof age === 'number' && age > 0 && age < 110 ) {
//             this._age = age;
//         } else {
//             console.log( 'Недопустимое значение' );
//         }
//     }
//
//     /**
//      * @param {string} surname
//      */
//     set surnage ( surname ) {
//         return this.#surnage = surname;
//     }
// }
//
// const dimon = new User( 'Dimon', 30 );
// console.log( dimon.surname );
// dimon.say()

//==================Модули===========================

// const number = 1;
// 
// 
// ( function () {
//     let number = 2;
//     console.log( number );
//     console.log( number + 3 );
// }() );
// 
// console.log( number );
// 
// const user = ( function () {
//     const privat = function () {
//         console.log( 'I am Privat' );
//     };
//     return {
//         sayHello: privat
//     };
// }() );
// 
// user.sayHello();
