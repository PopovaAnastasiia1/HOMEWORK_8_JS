//Знайти всі параграфи на сторінці та встановити колір фону #ff0000
const findP = document.querySelectorAll("p");
findP.forEach((e) => {
  e.style.cssText = "background: #ff0000";
});

//Знайти елемент із id="optionsList". Вивести у консоль.
//Знайти батьківський елемент та вивести в консоль. Знайти дочірні ноди, якщо вони є, і вивести в консоль назви та тип нод.

const findId = document.getElementById("optionsList");
console.log(findId);

const parentElem = findId.parentNode;
console.log(parentElem);

const childElem = findId.childNodes;
console.log(childElem);

//Встановіть в якості контента елемента з класом testParagraph наступний параграф - This is a paragraph

const elemTestParagraph = document.getElementById("testParagraph");
elemTestParagraph.textContent = "This is a paragraph";
console.log(elemTestParagraph);

//Отримати елементи, вкладені в елемент із класом main-header і вивести їх у консоль. Кожному з елементів присвоїти новий клас nav-item.

const elemMainHeader = document.querySelector(".main-header");
const childElemMainHeader = elemMainHeader.childNodes;
console.log(childElemMainHeader);

for(let i = 0; i < childElemMainHeader.length; i++) {
  childElemMainHeader[i].className = 'nav-item';
}
console.log(childElemMainHeader);

//Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів.
const elemSectionTitle = document.querySelector(".section-title");
elemSectionTitle.classList.remove("section-title");
console.log(elemSectionTitle.classList);