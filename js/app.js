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
        if( counter===0 ) {
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
    var transportProduct = listProduct.querySelector('.transport');
    var priceTransport = priceProduct.querySelector('.transport_value');
    var sumArr = [];
    var wholeSum = document.querySelector('.sum');


    input.forEach(function (element) {
        element.addEventListener('click', function () {
            // wlasciwosc togle zeby był drop down
            var dropMenu = element.querySelector('.list_panel');
            dropMenu.classList.toggle('activeMenu');
            // wybor konkretnego elemntu

            var listProducts = element.querySelectorAll('.activeMenu li');
                listProducts.forEach(function (t) {
                    t.addEventListener('click', function () {
                        var select = this.innerText;
                        var dropMenuArr = Array.from(document.querySelectorAll('.list_panel'));
                        var activeList = document.querySelector('.activeMenu');

                        if ( activeList === dropMenuArr[0]) {
                             nameProduct.innerHTML='krzesło typu: ' +select;
                                if (select === 'Clair') {
                                    priceName.innerHTML = '100pln';
                                    sumArr.splice(0, 1, 100);
                                    return
                                } else if (select === 'Margarita') {
                                    priceName.innerHTML = '150pln';
                                    sumArr.splice(0, 1, 150);
                                    return
                                } else {
                                    priceName.innerHTML = '170pln';
                                    sumArr.splice(0, 1, 170);
                                    return
                                }
                        return;
                        } else if (activeList === dropMenuArr[1]){
                             colorProduct.innerHTML=select;
                                if (select === 'Czerwony') {
                                    priceColor.innerHTML = '50pln';
                                    sumArr.splice(1, 1, 50);
                                    return
                                } else if (select === 'Czarny') {
                                    priceColor.innerHTML = '100pln';
                                    sumArr.splice(1, 1, 100);
                                    return
                                } else {
                                    priceColor.innerHTML = '30pln';
                                    sumArr.splice(1, 1, 30);
                                    return
                                }
                        return;
                        } else {
                                 patternProduct.innerHTML=select;
                                if (select === 'Tkanina') {
                                    pricePattern.innerHTML = '150pln';
                                    sumArr.splice(2, 1, 150);
                                    return
                                } else {
                                    pricePattern.innerHTML = '300pln';
                                    sumArr.splice(2, 1, 300);
                                    return
                                }
                        return;
                        };


                    });

                });
            counting();
            });

    });
    // funkcja do zliczania koszyka
    function counting() {
        var wholePrice = 0;
            sumArr.forEach(function (t2) {
            wholePrice +=t2;
            wholeSum.innerHTML = wholePrice;});
    }

var transportChecker = document.getElementById('transport');

    transportChecker.addEventListener('change', function () {
        if (transportChecker.checked) {
            transportProduct.innerHTML = 'transport';
            priceTransport.innerHTML = '100 PLN';
            sumArr.push(100);
            counting();
            return
        } else {
            transportProduct.innerHTML = '';
            priceTransport.innerHTML = '';
            sumArr.splice(3, 1, 0);
            counting();
            return
        }
    })




});