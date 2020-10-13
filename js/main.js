//let fruits1 = "apple";
//let fruits2 = "peach";
//let fruit3 = "pear";
//let fuit4 = "nectarin";

//let fruits = ["apple", "paeach", "pear", "nectarin"];
//console.log(fruits);

//1. найти кнопку +

let buttonPlus = document.querySelector('[data-action="plus"]');

//2. Отследить клик по кнопке
buttonPlus.addEventListener("click", function () {
    // console.log("Ai click");

    //3. По клику совер-инь действие: увеличить счётчик на 1
    //3.1 находим счётчик
    //3.1.2 находим тут блок с текущбж счётчиком

    let counterWrapper = buttonPlus.closest('.counter-wrapper');
    console.log(counterWrapper);
    //3.1.3 Внутри всего блока находим тег, отвечающий за счётчик
    let counter = counterWrapper.querySelector('[data-counter]');
    console.log(counter);

    //3/2 увеличиваем счётчик 1
    let counterValue = counter.dataset.counter;//1
    console.log(counterValue);
    //counterValue = ++ counterValue;

    //counter.dataset.counter = counterValue;  

    //counter.innerText =  counterValue;

    counter.innerText = ++counter.innerText;
});


let buttonMinus = document.querySelector('[data-action="minus"]');

buttonMinus.addEventListener('click', () => {
    let counterWrapper = buttonMinus.closest('.counter-wrapper');
    let counter = counterWrapper.querySelector('[data-counter]');
    //проверка: если счётчик > 1, уменьшаем. Если равен 1 - ничего не делаем.
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    }
});