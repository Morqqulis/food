let modalTimerId;

const closeModal = ( elem = document.querySelectorAll( elem ) ) => {
    document.querySelectorAll( elem ).forEach( el => {
        el.classList.remove( 'show' );
        el.classList.add( 'hide' );
        document.body.style.overflow = 'auto';
    } );
};

const openModal = ( elem = document.querySelectorAll( elem ) ) => {
    document.querySelectorAll( elem ).forEach( el => {
        el.classList.add( 'show' );
        el.classList.remove( 'hide' );
        document.body.style.overflow = 'hidden';
    } );
    clearInterval( modalTimerId );
};



function modal () {


    //----------------------------------------------
    // Модальное окно
    const modal = document.querySelector( '.modal' );


    document.addEventListener( 'click', ( e ) => {
        const t = e.target;
        if ( t.closest( '[data-modal]' ) ) {
            openModal( '.modal' );
        }
        if ( t === modal || t.closest( '[data-close]' ) ) {
            closeModal( '.modal' );
        }
    } );

    document.addEventListener( 'keydown', ( e ) => {
        if ( e.code === 'Escape' && modal.classList.contains( 'show' ) ) {
            closeModal( '.modal' );
        }
    } );


    //---------------------------------------------
    modalTimerId = setTimeout( openModal( '.modal' ), 50000 );
    const html = document.documentElement;

    const showModalByScroll = () => {
        if ( window.pageYOffset + html.clientHeight >= html.scrollHeight ) {
            openModal( '.modal' );
            window.removeEventListener( 'scroll', showModalByScroll );
        }
    };
    window.addEventListener( 'scroll', showModalByScroll );

    //---------Modal end-------------------------------------
}

export default modal;
export { closeModal, openModal };
