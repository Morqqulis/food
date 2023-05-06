"use strict";
//----------------------------------------------
require( 'es6-promise' ).polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs.js';
import modal from './modules/modal.js';
import timer from './modules/timer.js';
import forms from './modules/forms.js';
import cards from './modules/cards.js';
import slider from './modules/slider.js';
import calc from './modules/calc.js';

//----------------------------------------------

document.addEventListener( 'DOMContentLoaded', () => {
	//----------------------------------------------

	tabs( '.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active' );
	modal();
	timer( '.timer', '2023-04-28' );
	cards();
	calc();
	forms( 'form' );
	slider( {
		container: '.offer__slider',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		inner: '.offer__slider-inner',
		slide: '.offer__slide',
		currentCounter: '#current',
		totalCounter: '#total',
		wrapper: '.offer__slider-wrapper'
	} );

	//----------------------------------------------



} )
//=============================================
