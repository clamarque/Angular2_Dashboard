;( function( window ) {
    "use strict";

    // On lance l'affichage de la vague au touch ou au click
    if ( "ontouchstart" in window ) {
        document.body.addEventListener( "touchstart", show, false );
    }
    document.body.addEventListener( "mousedown", show, false );

    // Cette fonction permet d'afficher une vague suite à un évènement
    function show( e ) {

        var element = null;

        // On regarde si l'évènement affecte un élément avec la class .wave-effect
        var target = e.target || e.srcElement;
        while ( target.parentElement !== null ) {
            if ( target.classList.contains( "wave-effect" ) ) {
                element = target;
                break;
            }
            target = target.parentElement;
        }

        // Si aucun élement .wave-effect on abandonne, it's a TRAP !
        if ( element === null ) {
            return false;
        }

        // On crée l'élément wave et on l'ajoute à notre élement
        var wave = document.createElement( "div" );
        wave.className = "wave";
        element.appendChild( wave );

        // On anime la transformation scale() sans oublier les préfixes...
        var position = getRelativeEventPostion( element, e );
        var radius = getRadius( element, position );
        var scale = "scale(1)";
        wave.style.left = ( position.x - radius ) + "px";
        wave.style.top = ( position.y - radius ) + "px";
        wave.style.width = ( radius * 2 ) + "px";
        wave.style.height = ( radius * 2 ) + "px";
        wave.style[ "-webkit-transform" ] = scale;
        wave.style[ "-moz-transform" ] = scale;
        wave.style[ "-ms-transform" ] = scale;
        wave.style[ "-o-transform" ] = scale;
        wave.style.transform = scale;

        // Quand on quitte le bouton
        element.addEventListener( "mouseup", hide, false );
        element.addEventListener( "mouseleave", hide, false );
        if ( "ontouchstart" in window ) {
            document.body.addEventListener( "touchend", hide, false );
        }

    }

    // Déclenché au moment d'un release, on masque la dernière vague présente
    function hide( e ) {
        var element = this;

        // On trouve le dernier élement .wave
        var wave = null;
        var waves = element.getElementsByClassName( "wave" );
        if ( waves.length > 0 ) {
            wave = waves[ waves.length - 1 ];
        } else {
            return false;
        }

        // On fait disparaitre la vague en opacité
        wave.style.opacity = 0;

        // On supprime l'élément vague au bout de la durée de l'animation
        setTimeout( function() {
            try {
                element.removeChild( wave );
            } catch ( e ) {
                return false;
            }
        }, 2000 );
    }

    // Permet de récupérer la position d'un élement sur la page
    function getRelativeEventPostion( element, e ) {
        var offset = {
            top: element.getBoundingClientRect().top + window.pageYOffset - element.clientTop,
            left: element.getBoundingClientRect().left + window.pageXOffset - element.clientLeft
        };
        return {
            y: e.pageY - offset.top,
            x: e.pageX - offset.left
        };
    }

    // Permet d'obtenir le rayon d'un cercle qui contiendra tout l'élément, merci Pythagore ^^
    function getRadius( element, position ) {
        var w = Math.max( position.x, element.clientWidth - position.x );
        var h = Math.max( position.y, element.clientHeight - position.y );
        return Math.ceil( Math.sqrt( Math.pow( w, 2 ) + Math.pow( h, 2 ) ) );
    }

} )( window );

