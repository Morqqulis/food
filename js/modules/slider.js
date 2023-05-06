function slider ( { container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, inner, } ) {
    //----------------------------------------------
    // Slider Вариант 1
    // 	const slides = document.querySelectorAll( '.offer__slide' );
    // 	let slideIndex = 1;
    // 	const totalSlides = document.querySelector( '#total' );
    // 	const currentSlide = document.querySelector( '#current' );
    // 	if ( slides.length < 10 ) {
    // 		totalSlides.textContent = `0${ slides.length }`;
    // 	} else {
    // 		totalSlides.textContent = slides.length;
    // 	}
    // 
    // 	const showSlides = ( n = slideIndex ) => {
    // 		if ( n > slides.length ) slideIndex = 1;
    // 		if ( n < 1 ) slideIndex = slides.length;
    // 
    // 		slides.forEach( slide => slide.classList.add( 'hide' ) );
    // 		slides[ slideIndex - 1 ].classList.remove( 'hide' );
    // 
    // 		const currentSlide = document.querySelector( '#current' );
    // 		if ( slides.length < 10 ) currentSlide.textContent = `0${ slideIndex }`;
    // 		else currentSlide.textContent = slideIndex - 1;
    // 	};
    // 	const slidesCount = ( n ) => showSlides( slideIndex += n );
    // 
    // 	showSlides( slideIndex );
    // 	document.querySelector( '.offer__slider' ).addEventListener( 'click', ( e ) => {
    // 		const t = e.target;
    // 
    // 		if ( t.closest( '.offer__slider-prev' ) ) slidesCount( - 1 );
    // 		if ( t.closest( '.offer__slider-next' ) ) slidesCount( + 1 );
    // 	} );
    //----------------------------------------------
    // Slider Вариант 2
    const slider = document.querySelector( container ),
        slides = document.querySelectorAll( slide ),
        slidesWrapper = document.querySelector( wrapper ),
        totalSlides = document.querySelector( totalCounter ),
        currentSlide = document.querySelector( currentCounter ),
        slidesInner = document.querySelector( inner ),
        width = window.getComputedStyle( slidesWrapper ).width;

    let slideIndex = 1;

    let offset = 0;

    if ( slides.length < 10 ) {
        totalSlides.textContent = `0${ slides.length }`;
        currentSlide.textContent = `0${ slideIndex }`;
    }
    else {
        totalSlides.textContent = slides.length;
        currentSlide.textContent = slideIndex;
    };
    slidesInner.style.cssText = `
        width: ${ 100 * slides.length + '%' };
        display: flex;
        transition: all 0.5s ease;
        `;
    slidesWrapper.style.overflow = 'hidden';
    slider.style.position = 'relative';

    slides.forEach( slide => slide.style.width = width );
    // dots
    const dots = [];
    const indicators = document.createElement( 'ol' );

    indicators.classList.add( 'carousel-indicators' );
    slider.append( indicators );

    for ( let i = 0; i < slides.length; i++ ) {
        const dot = document.createElement( 'li' );
        dot.classList.add( 'dot' );
        dot.setAttribute( 'data-slide-to', i + 1 );
        if ( i == 0 ) dot.style.opacity = '1';
        indicators.append( dot );
        dots.push( dot );
        
    }




    const dotsOpacity = () => {
        dots.forEach( dot => dot.style.opacity = '.5' );
        dots[ slideIndex - 1 ].style.opacity = '1';
    };

    const deleteNotDigits = ( str ) => {
        return +str.replace( /\D/g, '' );
    };

    const moveSlide = ( direction ) => {
        if ( direction == 'left' ) {
            if ( offset === 0 )
                offset = deleteNotDigits( width ) * ( slides.length - 1 );
            else offset -= deleteNotDigits( width );
            slidesInner.style.transform = `translateX(-${ offset }px)`;
        }
        if ( direction == 'right' ) {
            if ( offset === deleteNotDigits( width ) * ( slides.length - 1 ) ) {
                offset = 0;
            } else {
                offset += deleteNotDigits( width );
            }

            slidesInner.style.transform = `translateX(-${ offset }px)`;
        }
    };

    function slideNumeration ( direction ) {

        if ( direction == 'left' ) {
            if ( slideIndex == 1 ) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            };

        } else if ( direction == 'right' ) {
            if ( slideIndex == slides.length ) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }

        }

        if ( slides.length < 10 ) {
            currentSlide.textContent = `0${ slideIndex }`;
        } else {
            currentSlide.textContent = slideIndex;
        }

    };

    slider.addEventListener( 'click', ( e ) => {
        const t = e.target;

        if ( t.closest( prevArrow ) ) {
            moveSlide( 'left' );
            slideNumeration( 'left' );
            dotsOpacity();
        };
        if ( t.closest( nextArrow ) ) {
            moveSlide( 'right' );
            slideNumeration( 'right' );
            dotsOpacity();
        };

        if ( t.closest( '[data-slide-to]' ) ) {
            const slideAttValue = t.getAttribute( 'data-slide-to' );
            slideIndex = +slideAttValue;
            offset = deleteNotDigits( width ) * ( +slideAttValue - 1 );

            slidesInner.style.transform = `translateX(-${ offset }px)`;

            slideNumeration();
            dotsOpacity();
        }
    } );

}

export default slider;
