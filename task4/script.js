const anchor=document.querySelector('a');

anchor.addEventListener('click',(e)=>{
    e.preventDefault();
    let text=prompt('Введите текст для ссылки','Новый текст ссылки');
    anchor.textContent=text;
});
