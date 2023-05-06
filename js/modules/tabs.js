function tabs ( tabsSelector, tabsContentSelector, tabsParentSelector, activeClass ) {
    // Tabs
    const tabsLinks = document.querySelectorAll( tabsSelector );
    const tabsContent = document.querySelectorAll( tabsContentSelector );
    const tabsParent = document.querySelector( tabsParentSelector );
    //----------------------------------------------

    mytabs();
    //----------------------------------------------

    tabsParent.addEventListener( 'click', ( e ) => {
        const t = e.target;
        // Tabs
        if ( t && t.classList.contains( tabsSelector.slice( 1 ) ) ) {
            tabsLinks.forEach( ( link, i ) => {
                if ( t == link ) {
                    mytabs( i );
                }
            } );
        }
    } );
    //----------------------------------------------


    function mytabs ( i = 0 ) {
        function hideTabsContent () {
            tabsContent.forEach( ( tabContent ) => {
                tabContent.classList.add( 'hide' );
                tabContent.classList.remove( 'show', 'fade' );
            } );

            tabsLinks.forEach( tabLink => tabLink.classList.remove( activeClass ) );

        }

        function showTabsContent () {
            tabsContent[ i ].classList.add( 'show', 'fade' );
            tabsContent[ i ].classList.remove( 'hide' );
            tabsLinks[ i ].classList.add( 'tabheader__item_active' );
        }
        hideTabsContent();
        showTabsContent();
    }
    //  Tabs End
}

export default tabs;
