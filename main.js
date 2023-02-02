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
const getAllChildren = (element) => {
  if (element.children.length === 0) return [element];
  let allChildElements = [];
  for (let i = 0; i < element.children.length; i++) {
    let children = getAllChildren(element.children[i]);
    if (children) allChildElements.push(...children);
  }
  allChildElements.push(element);
  return allChildElements;
};
const allChildren = getAllChildren(elemMainHeader)
for(let i = 0; i < allChildren.length; i++) {
  allChildren[i].className = 'nav-item';
  }
console.log(getAllChildren(elemMainHeader));

//Знайти всі елементи із класом section-title. Видалити цей клас у цих елементів.
const elemSectionTitle = document.querySelectorAll(".section-title");
 elemSectionTitle.forEach((e) => {
  e.classList.remove("section-title");
});
console.log(elemSectionTitle);
