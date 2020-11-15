// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let idText = document.getElementById('text')
// idText.onclick = () => {
//     idText.style.display = 'none';
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.getElementById('btn');
// btn.onclick = () =>{
//     btn.style.display = 'none'
// }

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача------ОНОВЛЯЄТСЬЯ-------
// let btn = document.getElementById('btnOk');
// let input = document.getElementById('input');
// //
// btn.onclick = () =>{
//     if (input.value > 18){
//         alert('You Adult')
//     }else if (input.value <18) {
//         alert('Baby go home')
//     }
// }

//- Создайте меню, которое раскрывается/сворачивается при клике
// let btn = document.getElementById('open');
// let btnClose = document.getElementById('close');
// let ul = document.getElementById('ul');
// btn.onclick=()=>{
//     btn.style.opacity = '0';
//     ul.style.opacity = '1';
//     btnClose.style.opacity ='1';
// }
// btnClose.onclick=()=>{
//     btnClose.style.opacity = '0';
//     ul.style.opacity = '0';
//     btn.style.opacity ='1';
// }

//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
//  let mass =[
//  {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//  {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//  {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//  {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//  {title : 'lorem', body:'lorem ipsum dolo sit ameti'}]
//
// let mass1 = [];
// let massbtn = [];
//
//  for (let el of mass) {
//      console.log(el);
//      let div = document.createElement('div');
//      document.body.appendChild(div);
//      mass1.push(div);
//      mass1.forEach((value, index, array) => {
//          div.setAttribute('id', `${index}`)
//      })
//      div.innerHTML = 'el';
//      let btn = document.createElement('button');
//      btn.innerText = 'DELETE'
//      document.body.appendChild(btn);
//      massbtn.push(btn);
//      massbtn.forEach((value, index) => {
//          btn.setAttribute('id', `${index}`)
//      })
//      btn.onclick = () => {
//         if (btn.id === div.id){
//             div.style.display = 'none'
//         }
//      }
//
//  }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let in1 = document.getElementById('input')
// let in2 = document.getElementById('input2')
// let in3 = document.getElementById('input3')
// let in4 = document.getElementById('input4')
// let btn = document.getElementById('btn');
//
// let form1 = document.forms.firstF;
// let form2 = document.forms.secondF;
//
// btn.onclick = () =>{
//     let val1 = form1.input.value;
//     console.log(val1)
//     let val2 = form1.input2.value;
//     console.log(val2)
//     let val3 = form2.input3.value;
//     console.log(val3)
//     let val4 = form2.input4.value;
//     console.log(val4)
//
// }

//- Створити функцію, яка генерує таблицю.
//  Перший аргумент визначає кількість строк.
//  Другий параметр визначає кліькіть ячеєк в кожній строці.
//  Третій параметр визначає елемент в який потрібно таблицю додати.
// let btn = document.getElementById('btn');
// let tr = document.getElementById('tr');
// let th = document.getElementById('th');
// let td = document.getElementById('td');
// let create = document.getElementById('create')
// let btnTr = document.getElementById('btnTr')
// let btnTd = document.getElementById('btnTd')
// btn.onclick = () => {
//     btn.style.opacity = '0'
//     tr.style.opacity = '1';
//     th.style.opacity = '1';
//     td.style.opacity = '1';
// }
// function createTable() {
//     btn.onclick = () => {
//         btn.style.opacity = '0'
//         tr.style.opacity = '1';
//         td.style.opacity = '1';
//         create.style.opacity = '1';
//     }
//     create.onclick = () => {
//         let x = document.createElement("TABLE");
//         x.setAttribute("id", "myTable");
//         document.body.appendChild(x);
//     }
//     btnTr.onclick = () => {
//         let y = document.getElementById('inp1').value;
//         console.log(y);
//         for (let value = 0; value < +y; value++) {
//             tr = document.createElement("TR");
//             tr.setAttribute("id", `myTr${value}`);
//             let td = document.createElement('td');
//             td.innerText = 'kill'
//             tr.appendChild(td)
//             document.getElementById("myTable").appendChild(tr);
//         }
//     }
//     btnTd.onclick = () => {
//         let y = document.getElementById('inp2').value;
//         console.log(y)
//         for (let value = 0; value < +y; value++) {
//             td = document.createElement("TD");
//             td.innerText = "cell";
//             tr.appendChild(td)
//             document.getElementById("myTr");
//         }
//     }
//     // let x = document.createElement("TABLE");
//     // document.body.appendChild(x);
//     //
//     // let valy = document.getElementById('inp1').value;
//     // for (let i = 0; i < valy.length; i++) {
//     //     let y = document.createElement("TR");
//     //     document.getElementById("myTable")
//     //     document.getElementById("myTable")
//     // }
//     //
//     //
//     // let z = document.createElement("TD");
//     // let valz = document.getElementById('inp2').value;
//     // let t = document.createTextNode("cell");
//     // z.appendChild(t);
//     // document.getElementById("myTr")
// }
// createTable();

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання) ===========================================НЕЗНАЮ======================
// let in1 = document.getElementById('in1')
// let in2 = document.getElementById('in2')
// let in3 = document.getElementById('in3')
// let btn = document.getElementById('btn')
//
// function createTable(){
//
//
//
//
//     // for (y = 0; y < +in1; y++) {
//     //     console.log(y)
//     //     document.createElement('tr')`${y}`;
//     // }
//     // for (x = 0; x < +in2; x++) {
//     //     document.createElement('td')`${x}`;
//     // }
//     //
//     // z.innerText = 'Lol';
//
//     btn.onclick=()=> {
//
//         let a = document.createElement('table');
//         document.body.appendChild(a);
//
//         in1 = document.getElementById('in1').value;
//         for (let value = 0; value < +in1; value++) {
//             tr = document.createElement("tr");
//             tr.setAttribute("id", `${value}`);
//             let td = document.createElement('td');
//             tr.appendChild(td)
//             document.getElementById("myTable");
//             in2 = document.getElementById('in2').value;
//             for (let value = 0; value < +in2; value++) {
//                 td = document.createElement("td");
//                 tr.appendChild(td)
//                 document.getElementById("myTr");
//                 in3 = document.getElementById('in3').value;
//                 tr.innerText = in3;
//                 td.innerText = in3;
//             }
//         }
//     }
// }
// createTable();

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// let mass = ['lox','fuck','omg'];
//
// let input = document.getElementById('input');
// let btn = document.getElementById('btn');
//
// btn.onclick=()=>{
//     for (let massEl of mass) {
//         if (massEl === input.value){
//             alert('BAD!');
//         }
//     }
// }

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
// let mass = ['lox','fuck','omg'];
// let mass1 = [];
//
// let input = document.getElementById('input');
// let btn = document.getElementById('btn');
//
//
// btn.onclick=()=>{
//     mass1.push(input.value)
//     console.log(mass1)
//     for (let el of mass) {
//         for (let el1 of mass1) {
//             let a = mass1.some( element => element === el);
//             alert('BAD WORD!')
//         }
//     }
// }

//-- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let createHeader = document.createElement('button');
// createHeader.innerText = 'HEADER';
// createHeader.setAttribute('id', 'createHeader')
// document.getElementById('content').appendChild(createHeader)
//
// let ul = document.createElement('ul')
// ul.setAttribute('id', 'ul');
// document.getElementById('content').appendChild(ul)
// ul.style.opacity = '0';
//
// let mass = [];
//
// createHeader.onclick = () => {
//     createHeader.style.opacity = '0';
//     ul.style.opacity = '1'
//     let h = document.body.getElementsByTagName('h2');
//     for (let i = 0; i < h.length; i++) {
//         let li = document.createElement('li');
//         mass.push(li);
//         mass.forEach((value, index) => {
//             li.setAttribute('id', `${index}`)
//         });
//         document.getElementById('ul').appendChild(li)
//         h[i].textContent;
//         li.innerText = h[i].textContent;
//     }
// }
//=========================ДОРОБИТИ СИЛКИ=====================================

// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// let checkStatus = document.createElement('input')
// checkStatus.setAttribute('type', 'checkbox');
// document.body.appendChild(checkStatus)
// let p1 = document.createElement('p');
// p1.innerText = 'Check Status';
// document.body.appendChild(p1);
//
// checkStatus.onchange = () =>{
//     for (let i = 0; i < usersWithAddress.length; i++) {
//         if (usersWithAddress[i].status === false){
//             let a = JSON.stringify(usersWithAddress[i]);
//             let div = document.createElement('div');
//             document.body.appendChild(div);
//             div.innerText = a;
//         }
//     }
// }
//
//
//
// let checkAge = document.createElement('input')
// checkAge.setAttribute('type', 'checkbox');
// document.body.appendChild(checkAge)
// let p2 = document.createElement('p');
// p2.innerText = 'Check Age';
// document.body.appendChild(p2)
//
// checkAge.onchange = ()=>{
//     for (let i = 0; i < usersWithAddress.length; i++) {
//         if (usersWithAddress[i].age >=29){
//             let a = JSON.stringify(usersWithAddress[i]);
//             let div = document.createElement('div');
//             document.body.appendChild(div);
//             div.innerText = a;
//         }
//     }
// }
//
// let checkCity = document.createElement('input')
// checkCity.setAttribute('type', 'checkbox');
// document.body.appendChild(checkCity)
// let p3 = document.createElement('p');
// p3.innerText = 'Check City';
// document.body.appendChild(p3)
//
// checkCity.onchange = ()=>{
//     for (let i = 0; i < usersWithAddress.length; i++) {
//         if(usersWithAddress[i].address.city === 'Kyiv'){
//             let a = JSON.stringify(usersWithAddress[i]);
//             let div = document.createElement('div');
//             document.body.appendChild(div);
//             div.innerText = a;
//         }
//     }
// }

//*****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
// let div1 = document.createElement('div');
// div1.setAttribute('id', 'div1');
// div1.innerText = 'DIV1'
// document.body.appendChild(div1);
//
// let div3 = document.createElement('div');
// div1.setAttribute('id', 'div3');
// div3.innerText = 'DIV3'
// document.body.appendChild(div3);
//
// let div2 = document.createElement('div');
// div2.setAttribute('id','div2');
// div2.innerText = 'DIV2'
// div1.appendChild(div2);
//
// let div4 = document.createElement('div');
// div2.setAttribute('id','div4');
// div4.innerText = 'DIV4'
// div3.appendChild(div4);
//
// let btn1 = document.createElement('button');
// btn1.setAttribute('id','btn1');
// btn1.innerText = 'BACK';
// document.body.appendChild(btn1);
//
// let btn2 = document.createElement('button');
// btn2.setAttribute('id','btn2');
// btn2.innerText = 'NEXT';
// document.body.appendChild(btn2);
//
//
// btn2.onclick = ()=>{
//     console.log(div1.textContent)
// }
//===================================================================DONT KNOW========================================================================

//*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

let div = document.createElement('div');
div.innerText = 'loremasf as fas asfasfsaf  safasf asf saf saf fsa fsaf saf  fsafasfsafsaf fsafas fsa asfsafasf';
document.body.appendChild(div);

function copy (){
    if(addEventListener('dblclick')){
        console.log(div.innerText)
    }
}
copy();