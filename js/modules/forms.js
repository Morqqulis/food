import { openModal, closeModal } from "./modal";
import { postData } from "../services/services";

function forms ( formSelector ) {
    // Отправка Формы

    const forms = document.querySelectorAll( formSelector );

    const message = {
        loading: 'img/spinner.svg',
        success: 'Спасибо, мы скоро с вами свяжемся',
        failure: "Что-то пошло не так"
    };

    const bindPostData = ( form ) => {
        form.addEventListener( 'submit', ( e ) => {
            e.preventDefault();

            const statusMessage = document.createElement( 'img' );
            statusMessage.setAttribute( 'src', message.loading );
            statusMessage.style.cssText = `
			display: 'block',
			margin: 0 auto;
			`;
            // statusMessage.textContent = message.loading;
            // form.append( statusMessage );
            form.insertAdjacentElement( 'afterend', statusMessage );

            // const request = new XMLHttpRequest();
            // request.open( 'POST', 'server.php' );

            // В XMLHttpRequest при использовании 'multipart/form-data' -- метод setRequestHeader использовать нельзя, Точнее ответ не будет получен.
            // request.setRequestHeader( 'Content-type', 'multipart/form-data' );
            // request.setRequestHeader( 'Content-type', 'application/json' );

            const formData = new FormData( form );

            const json = JSON.stringify( Object.fromEntries( formData.entries() ) );


            // const object = {};
            // formData.forEach( ( value, key ) => {
            // 	object[ key ] = value;
            // } );

            // request.send( JSON.stringify( object ) );


            postData( ' http://localhost:3000/requests', json )
                .then( data => {
                    console.log( data );
                    showThanksModal( message.success );
                    statusMessage.remove();
                } )
                .catch( () => {
                    showThanksModal( message.failure );
                } )
                .finally( () => {
                    form.reset();
                } );
            // request.addEventListener( 'load', () => {
            // 	if ( request.status === 200 ) {
            // 		console.log( request.response );
            // 		showThanksModal( message.success );
            // 		form.reset();
            // 		statusMessage.remove();
            // 	} else {
            // 		showThanksModal( message.failure );
            // 	}
            // } );
        } );
    };

    forms.forEach( form => {
        bindPostData( form );
    } );

    function showThanksModal ( message ) {
        const prevModalDialog = document.querySelector( '.modal__dialog' );

        prevModalDialog.classList.add( 'hide' );
        openModal( '.modal' );

        const thanksModal = document.createElement( 'div' );
        thanksModal.classList.add( 'modal__dialog' );
        thanksModal.innerHTML = `
		<div class="modal__content">
			<div class="modal__close" data-close>&times;</div>
			<div class="modal__title">${ message }</div>
		</div>
		`;

        document.querySelector( '.modal' ).append( thanksModal );

        setTimeout( () => {
            thanksModal.remove();
            prevModalDialog.classList.add( 'show' );
            prevModalDialog.classList.remove( 'hide' );
            closeModal( '.modal' );
        }, 4000 );
    }

}

export default forms;
