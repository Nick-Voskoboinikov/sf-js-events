const inputField=document.querySelector('input[type=text]');
const paragraphDup=document.querySelector('p#duplicateField');
const formToCatch=document.querySelector('form');

inputField.addEventListener('input',(e)=>{
    paragraphDup.textContent=(e.target).value;
})

formToCatch.addEventListener('submit',(e)=>{
    e.preventDefault();
    let savedText=inputField.value;
    formToCatch.reset();
    paragraphDup.textContent='';
    console.clear(); // to make things more evident
    console.log('Текст из поля ввода:\n' + savedText);
})