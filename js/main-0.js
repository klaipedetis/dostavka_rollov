

//1. найти кнопку +

let buttonsPlus = document.querySelectorAll('[data-action="plus"]');

buttonsPlus.forEach(function (item) {
    item.addEventListener('click', function () {
        
        let counterWrapper = this.closest('.counter-wrapper');
       

        //3.1.3 Внутри всего блока находим тег, отвечающий за счётчик

        let counter = counterWrapper.querySelector('[data-counter]');
     

        //3/2 увеличиваем счётчик 1

        counter.innerText = ++counter.innerText;
    });
});

let buttonsMinus = document.querySelectorAll('[data-action="minus"]');

buttonsPlus.forEach(function (item) {
    item.addEventListener('click', function () {
        let counterWrapper = this.closest('counter-wrapper');
        let counter = counterWrapper.querySelector('[data-counter]');
        if (parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;
        )
    });  
})

