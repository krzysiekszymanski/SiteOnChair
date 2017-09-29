document.addEventListener('DOMContentLoaded', function(){
    //Slider
    var btnNext = document.getElementById('nextPicture');
    var btnPrev = document.getElementById('prevPicture');
    var liElements = document.querySelectorAll('.slider li');
    var counter = 0;
    var tabLi = Array.from(liElements);

    window.addEventListener('load', function(){
        tabLi[counter].classList.add( 'visible' );
    });

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
    });

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
    });
    // slider
    // section aplication - calc
    var form = document.querySelector('.form');
    var input = form.querySelectorAll('.drop_down_list');


    input.forEach(function (element) {
        element.addEventListener('click', function () {
            var dropMenu = element.querySelector('.list_panel');
            var listProducts = this.querySelectorAll('.list_panel li');
            dropMenu.classList.toggle('activeMenu');
            console.log(listProducts);
        })
    })






});