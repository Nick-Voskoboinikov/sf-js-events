const consoleLog=document.querySelector('#consoleLog');

consoleLog.addEventListener('click',()=>{
    alert('Метод для вывода сообщения в веб-консоль.');
    document.querySelector('body > section > code:nth-child(3)').innerText='Пример использования команды console.log\nconsole.log(\'Текст, выеденный в консоль\')';
})


const _alert=document.querySelector('#alert')

_alert.addEventListener('click',()=>{
    alert('Метод для вывода сообщения пользователю во всплывающем диалоговом окне браузера.');
    document.querySelector('body > section > code:nth-child(5)').innerText='Пример использования команды alert():\nalert(\'Текст, выведенный для ознакомления пользователю.\')';
})



const _prompt=document.querySelector('#prompt')

_prompt.addEventListener('click',()=>{
    alert('Метод для получения информации/ввода от пользователя во всплывающем диалоговом окне браузера.');
    document.querySelector('body > section > code:nth-child(7)').innerText='Пример использования команды prompt():\nprompt(\'Текст, выеденный для ознакомления пользователю (напр., какая информация требуется).\' , \'Значение по умолчани для поле ввода.\')';
})
