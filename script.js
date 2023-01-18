// Получить ссылку на первый абзац с дива с id, равным block, и вывести его в консоль

const blockE1 = document.querySelector('#block');
console.log(blockE1.firstElementChild);

//Получить ссылку на первый абзац с классом www. и вывести его в консоль

const wwwE1 = document.querySelector('.www');
console.log(wwwE1);

const linkText = document.querySelector('.link'); //находим 
linkText.textContent = 'link text js'; //меняем текст
linkText.href = "https://developer.mozilla.org/ru/" //меняем ссылку


const photoChenge = document.querySelector('.photo'); //находим фото
photoChenge.src = "https://www.purina.ru/sites/default/files/2021-10/britanskaya-3.jpg" //меняем картинку



const contentNew = document.querySelector('.content'); //нашли элемент контент
const paragraphElement = document.createElement('p'); //создали параграф
contentNew.appendChild(paragraphElement); // поместили параграф внутрь контента
paragraphElement.textContent = ('Новый текстовый элемент'); // задали текст параграфа
//paragraphElement.remove() //удаление узла

const contentNew1 = document.querySelector('.new');
const buttonElement = document.createElement('button');
contentNew1.appendChild(buttonElement);
buttonElement.textContent = ('Отправить');
let k = 0;
buttonElement.onclick = function () {  //при нажатии на кнопку меняем текст и устанавливаем счётчик нажатий
    buttonElement.textContent = 'Текст отправлен';
    k++;
    console.log(k);
}


/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/

const superLink = document.getElementById('super_link');
console.log(superLink);

/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/

const cardLink = document.querySelectorAll('.card-link');
cardLink.forEach(element => {
    element.textContent = 'ссылка';
});

/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/

const cardLink1 = document.querySelectorAll('.card-body .card-link');
console.log(cardLink1);

/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/

const dataNumber = document.querySelector('[data-number="50"]');
console.log(dataNumber);

/*
5. Выведите содержимое тега title в консоль.
*/

console.log(document.title);

/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/

const cardTitle = document.querySelector('.card-title').parentNode;
console.log(cardTitle);

/*
7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/

const paragraphElem = document.createElement('p');
paragraphElem.textContent = 'Привет';
document.querySelector('.card').prepend(paragraphElem);

/*
8. Удалите тег h6 на странице.
*/

const titleH6 = document.querySelector('h6');
titleH6.remove();