//1. НАХОДИМ КОНТРОЛЫ (кнопки - и +)
let buttons = document.querySelectorAll('[data-action]'); 

//2. Для каждои кнопки вешаем событие click
  buttons.forEach(function(item){
    item.addEventListener("click", function(){
         

        if(this.dataset.action === "plus"){
            let counterWrapper = this.closest('.counter-wrapper');
            let counter = counterWrapper.querySelector('[data-counter]');
            counter.innerText = ++counter.innerText;
        } else{
            let counterWrapper = this.closest('.counter-wrapper');
            let counter = counterWrapper.querySelector('[data-counter]');
           
            if (parseInt(counter.innerText) > 1){
                 counter.innerText = --counter.innerText;
            }
        }
    })
  })

//3. Для кнопки + -> увеличиваем

//4. Для кнопки - -> уменьшаем

