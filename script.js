let item1 = window.document.querySelector('#item1')
let item2 = window.document.querySelector('#item2')
let item3 = window.document.querySelector('#item3')
let item4 = window.document.querySelector('#item4')
let item5 = window.document.querySelector('#item5')
let item6 = window.document.querySelector('#item6')
let item7 = window.document.querySelector('#item7')


let ask1 = window.document.querySelector('#ask1')
let ask2 = window.document.querySelector('#ask2')
let ask3 = window.document.querySelector('#ask3')
let ask4 = window.document.querySelector('#ask4')
let ask5 = window.document.querySelector('#ask5')
let ask6 = window.document.querySelector('#ask6')
let ask7 = window.document.querySelector('#ask7')

let btn1_1 = window.document.querySelector('#calculatorBtn1_1')
let btn1_2 = window.document.querySelector('#calculatorBtn1_2')
let btn2_1 = window.document.querySelector('#calculatorBtn2_1')
let btn2_2 = window.document.querySelector('#calculatorBtn2_2')
let btn3_1 = window.document.querySelector('#calculatorBtn3_1')
let btn3_2 = window.document.querySelector('#calculatorBtn3_2')
let btn4_1 = window.document.querySelector('#calculatorBtn4_1')
let btn4_2 = window.document.querySelector('#calculatorBtn4_2')
let btn4_3 = window.document.querySelector('#calculatorBtn4_3')
let btn4_4 = window.document.querySelector('#calculatorBtn4_4')

let price = window.document.querySelector('#price')


const click1 = (event, item) => {
  console.log(item1.style.display)
  console.log(item)

  if (item == 1) {
    if (item1.style.display == 'none' || item1.style.display == '') {

      item1.style.display = 'flex';
      let opacity = 0.3;
      item1.style.opacity = `${opacity}`;
      let timerId = setInterval(() => {
        opacity += 0.05
        item1.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId) }, 350);

      ask1.textContent = '-';
      opacity = 0.3;
      ask1.style.opacity = `${opacity}`;
      let timerId2 = setInterval(() => {
        opacity += 0.05
        ask1.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId2) }, 350);
    }
    else {
      item1.style.display = 'none';
      ask1.textContent = '+';
    }
  }
  if (item == 2) {
    if (item2.style.display == 'none' || item2.style.display == '') {
      item2.style.display = 'flex';

      let opacity = 0.3;
      item2.style.opacity = `${opacity}`;
      let timerId = setInterval(() => {
        opacity += 0.05
        item2.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId) }, 350);

      ask2.textContent = '-';
      opacity = 0.3;
      ask2.style.opacity = `${opacity}`;
      let timerId2 = setInterval(() => {
        opacity += 0.05
        ask2.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId2) }, 350);


    }
    else {
      item2.style.display = 'none';
      ask2.textContent = '+';
    }
  }
  if (item == 3) {
    if (item3.style.display == 'none' || item3.style.display == '') {
      item3.style.display = 'flex';
      let opacity = 0.3;
      item3.style.opacity = `${opacity}`;
      let timerId = setInterval(() => {
        opacity += 0.05
        item3.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId) }, 350);

      ask3.textContent = '-';
      opacity = 0.3;
      ask3.style.opacity = `${opacity}`;
      let timerId2 = setInterval(() => {
        opacity += 0.05
        ask3.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId2) }, 350);
    }
    else {
      item3.style.display = 'none';
      ask3.textContent = '+';
    }
  }
  if (item == 4) {
    if (item4.style.display == 'none' || item4.style.display == '') {
      item4.style.display = 'flex';
      let opacity = 0.3;
      item4.style.opacity = `${opacity}`;
      let timerId = setInterval(() => {
        opacity += 0.05
        item4.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId) }, 350);

      ask4.textContent = '-';
      opacity = 0.3;
      ask4.style.opacity = `${opacity}`;
      let timerId2 = setInterval(() => {
        opacity += 0.05
        ask4.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId2) }, 350);
    }
    else {
      item4.style.display = 'none';
      ask4.textContent = '+';
    }
  }
  if (item == 5) {
    if (item5.style.display == 'none' || item5.style.display == '') {
      item5.style.display = 'flex';
      let opacity = 0.3;
      item5.style.opacity = `${opacity}`;
      let timerId = setInterval(() => {
        opacity += 0.05
        item5.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId) }, 350);

      ask5.textContent = '-';
      opacity = 0.3;
      ask5.style.opacity = `${opacity}`;
      let timerId2 = setInterval(() => {
        opacity += 0.05
        ask5.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId2) }, 350);
    }
    else {
      item5.style.display = 'none';
      ask5.textContent = '+';
    }
  }
  if (item == 6) {
    if (item6.style.display == 'none' || item6.style.display == '') {

      item6.style.display = 'flex';
      let opacity = 0.3;
      item6.style.opacity = `${opacity}`;
      let timerId = setInterval(() => {
        opacity += 0.05
        item6.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId) }, 350);

      ask6.textContent = '-';
      opacity = 0.3;
      ask6.style.opacity = `${opacity}`;
      let timerId2 = setInterval(() => {
        opacity += 0.05
        ask6.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId2) }, 350);
    }
    else {
      item6.style.display = 'none';
      ask6.textContent = '+';
    }
  }
  if (item == 7) {
    if (item7.style.display == 'none' || item7.style.display == '') {

      item7.style.display = 'flex';
      let opacity = 0.3;
      item7.style.opacity = `${opacity}`;
      let timerId = setInterval(() => {
        opacity += 0.05
        item7.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId) }, 350);

      ask7.textContent = '-';
      opacity = 0.3;
      ask7.style.opacity = `${opacity}`;
      let timerId2 = setInterval(() => {
        opacity += 0.05
        ask7.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId2) }, 350);
    }
    else {
      item7.style.display = 'none';
      ask7.textContent = '+';
    }
  }

}
let count = 0
window.addEventListener('scroll', function (event) { // событие, которое отслеживает прокрутку
  let elementWrite1 = document.getElementById('greatingText');
  let viewElementWrite1 = elementWrite1.getBoundingClientRect();


  if (count == 0 && (this.window.innerHeight) / 10 <= viewElementWrite1.top && viewElementWrite1.top <= (this.window.innerHeight)) {
    count = 1
    WriteText(' Здравствуйте! Меня зовут Сас Владислав, и я являюсь репетитором по математике и компьютерным наукам. Я помогаю своим ученикам улучшить оценки, подготовиться к экзаменам и поступлению в ведущие вузы страны.', "greatingText", 0)

  }



})



function WriteText(text, id, i = 0, speed = 40) {
  console.log(i, text.charAt(i))
  let txt = String(text); /* Текст */
  if (i < txt.length) {
    document.getElementById(String(id)).innerHTML += txt.charAt(i);
    i++;
    setTimeout(WriteText, speed, text, id, i); //функция,скорость,аргументы в функцию
  }
}

let b1 = 0;
let b2 = 0;
let b3 = 0;
let b4 = 0;

function clickCalculatorBtn(id) {
  if (id == 11) {
    if (btn1_2.style.visibility == 'hidden') {
      btn1_2.style.visibility = 'visible';
      btn1_1.style.position = 'relative';
      b1 = 0;
    }
    else {
      b1 = 1
      btn1_2.style.visibility = 'hidden';
      btn1_1.style.position = 'absolute';
      b1 = 1;
    }
  }
  if (id == 12) {
    if (btn1_1.style.visibility == 'hidden') {
      btn1_1.style.visibility = 'visible';
      btn1_2.style.position = 'relative';
      b1 = 0;
    }
    else {
      btn1_1.style.visibility = 'hidden';
      btn1_2.style.position = 'absolute';
      b1 = 2;
    }
  }
  if (id == 21) {
    if (btn2_2.style.visibility == 'hidden') {
      btn2_2.style.visibility = 'visible';
      btn2_1.style.position = 'relative';
      b2 = 0;
    }
    else {
      btn2_2.style.visibility = 'hidden';
      btn2_1.style.position = 'absolute';
      b2 = 1;
    }
  }
  if (id == 22) {
    if (btn2_1.style.visibility == 'hidden') {
      btn2_1.style.visibility = 'visible';
      btn2_2.style.position = 'relative';
      b2 = 0;
    }
    else {
      btn2_1.style.visibility = 'hidden';
      btn2_2.style.position = 'absolute';
      b2 = 2;
    }
  }
  if (id == 31) {
    if (btn3_2.style.visibility == 'hidden') {
      btn3_2.style.visibility = 'visible';
      btn3_1.style.position = 'relative';
      b3 = 0;
    }
    else {
      btn3_2.style.visibility = 'hidden';
      btn3_1.style.position = 'absolute';
      b3 = 1;
    }
  }
  if (id == 32) {
    if (btn3_1.style.visibility == 'hidden') {
      btn3_1.style.visibility = 'visible';
      btn3_2.style.position = 'relative';
      b3 = 0;
    }
    else {
      btn3_1.style.visibility = 'hidden';
      btn3_2.style.position = 'absolute';
      b3 = 2;
    }
  }
  if (id == 41) {
    if (btn4_2.style.visibility == 'hidden') {
      btn4_2.style.visibility = 'visible';
      btn4_3.style.visibility = 'visible';
      btn4_4.style.visibility = 'visible';
      btn4_2.style.position = 'relative';
      btn4_3.style.position = 'relative';
      btn4_4.style.position = 'relative';
      b4 = 0;
    }
    else {
      btn4_2.style.visibility = 'hidden';
      btn4_3.style.visibility = 'hidden';
      btn4_4.style.visibility = 'hidden';
      btn4_2.style.position = 'absolute';
      btn4_3.style.position = 'absolute';
      btn4_4.style.position = 'absolute';
      b4 = 1;
    }
  }
  if (id == 42) {
    if (btn4_1.style.visibility == 'hidden') {
      btn4_1.style.visibility = 'visible';
      btn4_3.style.visibility = 'visible';
      btn4_4.style.visibility = 'visible';
      btn4_1.style.position = 'relative';
      btn4_3.style.position = 'relative';
      btn4_4.style.position = 'relative';
      b4 = 0;

    }
    else {
      btn4_1.style.visibility = 'hidden';
      btn4_3.style.visibility = 'hidden';
      btn4_4.style.visibility = 'hidden';
      btn4_1.style.position = 'absolute';
      btn4_3.style.position = 'absolute';
      btn4_4.style.position = 'absolute';
      b4 = 2;
    }
  }
  if (id == 43) {
    if (btn4_2.style.visibility == 'hidden') {
      btn4_2.style.visibility = 'visible';
      btn4_1.style.visibility = 'visible';
      btn4_4.style.visibility = 'visible';
      btn4_1.style.position = 'relative';
      btn4_2.style.position = 'relative';
      btn4_4.style.position = 'relative';
      b4 = 0;

    }
    else {
      btn4_2.style.visibility = 'hidden';
      btn4_1.style.visibility = 'hidden';
      btn4_4.style.visibility = 'hidden';
      btn4_1.style.position = 'absolute';
      btn4_2.style.position = 'absolute';
      btn4_4.style.position = 'absolute';
      b4 = 3;
    }
  }
  if (id == 44) {
    if (btn4_2.style.visibility == 'hidden') {
      btn4_2.style.visibility = 'visible';
      btn4_3.style.visibility = 'visible';
      btn4_1.style.visibility = 'visible';
      btn4_2.style.position = 'relative';
      btn4_3.style.position = 'relative';
      btn4_1.style.position = 'relative';
      b4 = 0;

    }
    else {
      btn4_2.style.visibility = 'hidden';
      btn4_3.style.visibility = 'hidden';
      btn4_1.style.visibility = 'hidden';
      btn4_2.style.position = 'absolute';
      btn4_3.style.position = 'absolute';
      btn4_1.style.position = 'absolute';
      b4 = 4;
    }

  }
  console.log(b1, b2, b3, b4)
  if (b1 != 0 && b2 != 0 && b3 != 0 && b4 != 0) {
    WriteText('1000 rub', 'price', 0,1)
  }
  else{
    price.innerHTML='';
  }
}



// var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* Текст */
// var speed = 50; /* Скорость/длительность эффекта в миллисекундах */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }