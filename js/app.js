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
    var input = Array.from(form.querySelectorAll('.drop_down_list'));
    var basket = document.querySelector('.summary_panel');
    var listProduct = basket.querySelector('.panel_left');
    var priceProduct = basket.querySelector('.panel_right');

    var nameProduct = listProduct.querySelector('.title');
    var priceName = priceProduct.querySelector('.title_value');

    var colorProduct = listProduct.querySelector('.color');
    var priceColor = priceProduct.querySelector('.color_value');

    var patternProduct = listProduct.querySelector('.pattern');
    var pricePattern = priceProduct.querySelector('.pattern_value');
    var sumArr = [];


    input.forEach(function (element) {
        element.addEventListener('click', function () {

            var dropMenu = element.querySelector('.list_panel');
            dropMenu.classList.toggle('activeMenu');


            var listProducts = Array.from(element.querySelectorAll('.list_panel li'));

                listProducts.forEach(function (t) {
                    t.addEventListener('click', function () {
                        var select = this.innerText;
                        var dropMenuArr = Array.from(document.querySelectorAll('.list_panel'));
                        var activeList = document.querySelector('.activeMenu');

                        if ( activeList === dropMenuArr[0]) {
                             nameProduct.innerHTML='krzesło typu'+select;
                                if (select == 'Clair') {
                                    priceName.innerHTML = '100pln';
                                    sumArr.push(100);
                                } else if (select == 'Margarita') {
                                    priceName.innerHTML = '150pln';
                                    sumArr.push(150);
                                } else {
                                    priceName.innerHTML = '170pln';
                                    sumArr.push(170);
                                }
                        } else if (activeList === dropMenuArr[1]){
                             colorProduct.innerHTML=select;
                                if (select == 'Czerwony') {
                                    priceColor.innerHTML = '50pln';
                                    sumArr.push(50);
                                } else if (select == 'Czarny') {
                                    priceColor.innerHTML = '100pln';
                                    sumArr.push(100);
                                } else {
                                    priceColor.innerHTML = '30pln';
                                    sumArr.push(30);
                                }
                        } else {
                             patternProduct.innerHTML=select;
                            if (select == 'Tkanina') {
                                pricePattern.innerHTML = '150pln';
                                sumArr.push(150);
                            } else {
                                pricePattern.innerHTML = '300pln';
                                sumArr.push(300);
                                console.log(sumArr);
                            }
                        }
                    })
                })
        })
    });











});