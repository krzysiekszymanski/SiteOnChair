document.addEventListener('DOMContentLoaded', function(){

    var btnNext = document.getElementById('nextPicture');
    var btnPrev = document.getElementById('prevPicture');
    var liElements = document.querySelectorAll('.slider li');
    var counter = 0;
    var tabLi = Array.from(liElements);

    window.addEventListener('load', function(){
        tabLi[counter].classList.add( 'visible' );
    })

    btnNext.addEventListener('click', function(){
        if( counter==tabLi.length-1 ) {
            tabLi[counter].classList.remove( 'visible' );
            counter=0;
            tabLi[counter].classList.add( 'visible' );
        } else {
            tabLi[counter].classList.remove( 'visible' );
            counter++;
            tabLi[counter].classList.add( 'visible' );
        }
    })

    btnPrev.addEventListener('click', function(){
        if( counter==0 ) {
            tabLi[counter].classList.remove( 'visible' );
            counter=tabLi.length-1;
            tabLi[counter].classList.add( 'visible' );
        } else {
            tabLi[counter].classList.remove( 'visible' );
            counter--;
            tabLi[counter].classList.add( 'visible' );
        }
    })

})