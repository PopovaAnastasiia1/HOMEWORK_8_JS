# HOMEWORK_8_JS
My homework in DanIt.

1.Опишіть своїми словами що таке Document Object Model (DOM)
DOM – це деревоподібний вигляд веб-сайту, що завантажується в браузер, у вигляді серії об'єктів, вкладених один в одного.

2.Яка різниця між властивостями HTML-елементів innerHTML та innerText?
InnerHTML візьме рядок HTML і відтворить його як звичайний HTML.InnerText з іншого боку візьме звичайний рядок і відобразить його таким, яким він є. Він не відображатиме жодного HTML, як innerHTML. 

3.Як можна звернутися до елемента сторінки за допомогою JS? Який спосіб кращий?
document.getElementById() - повертає об'єкт Element за його id.
document.getElementsByName() - повертає масив елементів за name.
document.getElementsByTagName() - масив елемінтів за назвою.
document.getElementsByClassName() - повертає масив елементів за вказаним класом.
document.querySelector() - повертає об'єкт Element за вказаним CSS селектором.
document.querySelectorAll() - повертає масив елементів за вказаним CSS селектором.
Найкращий спосіб це document.querySelector().