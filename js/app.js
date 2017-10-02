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
                listProducts.forEach(function (ele) {
                    ele.removeAttribute('price', '');// usuwanie datasetu gdyby uzytkownik zdecydował sie na zmiany
                    ele.addEventListener('click', function () {
                        var select = this.innerText;
                        var dropMenuArr = Array.from(document.querySelectorAll('.list_panel'));
                        var activeList = document.querySelector('.activeMenu');

                        if ( activeList === dropMenuArr[0]) {
                             nameProduct.innerHTML='krzesło typu: ' +select;
                                if (select === 'Clair') {
                                    priceName.innerHTML = '100pln';
                                    this.setAttribute('price', '100');
                                    return;
                                } else if (select === 'Margarita') {
                                    priceName.innerHTML = '150pln';
                                    this.setAttribute('price', '150');
                                    return;
                                } else {
                                    priceName.innerHTML = '170pln';
                                    this.setAttribute('price', '170');
                                    return;
                                }
                        return;
                        } else if (activeList === dropMenuArr[1]){
                             colorProduct.innerHTML=select;
                                if (select === 'Czerwony') {
                                    priceColor.innerHTML = '50pln';
                                    this.setAttribute('price', '50');
                                    return;
                                } else if (select === 'Czarny') {
                                    priceColor.innerHTML = '100pln';
                                    this.setAttribute('price', '50');
                                    return;
                                } else {
                                    priceColor.innerHTML = '30pln';
                                    this.setAttribute('price', '30');
                                    return;
                                }
                        return;
                        } else {
                                 patternProduct.innerHTML=select;
                                if (select === 'Tkanina') {
                                    pricePattern.innerHTML = '150pln';
                                    this.setAttribute('price', '150');
                                    return;
                                } else {
                                    pricePattern.innerHTML = '300pln';
                                    this.setAttribute('price', '300');
                                    return;
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
        var dateSetArr = document.querySelectorAll('.application .form li');
        dateSetArr.forEach(function (t) {
            if (t.getAttribute('price') !== null){
                wholePrice+=parseInt(t.getAttribute('price'));
                wholePrice+=
            }
            wholeSum.innerHTML = wholePrice;
            return
        });
    }





var transportChecker = document.getElementById('transport');

    transportChecker.addEventListener('change', function () {
        if (transportChecker.checked) {
            transportProduct.innerHTML = 'transport';
            priceTransport.innerHTML = '100 PLN';
            counting();
            return
        } else {
            transportProduct.innerHTML = '';
            priceTransport.innerHTML = '';
            counting();
            return
        }
    })




});