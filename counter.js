
let mainTitle =document.querySelector('#title');
let incrementBtn =document.querySelector('#increment');
let decrementBtn =document.querySelector('#decrement');
let resetBtn =document.querySelector('#reset');
let count =0;


incrementBtn.addEventListener('click',()=>{
    count++;
    mainTitle.textContent=count;
});


decrementBtn.addEventListener('click',()=>{
    count--;
    mainTitle.textContent=count;
});


resetBtn.addEventListener('click', () => {
    count = 0;
    mainTitle.textContent = count;
  });
