let item1 = window.document.querySelector('#item1')
let item2 = window.document.querySelector('#item2')
let item3 = window.document.querySelector('#item3')
let item4 = window.document.querySelector('#item4')
let item5 = window.document.querySelector('#item5')
let item6 = window.document.querySelector('#item6')
let item7 = window.document.querySelector('#item7')
let item8 = window.document.querySelector('#item8')

let ask1 = window.document.querySelector('#ask1')
let ask2 = window.document.querySelector('#ask2')
let ask3 = window.document.querySelector('#ask3')
let ask4 = window.document.querySelector('#ask4')
let ask5 = window.document.querySelector('#ask5')
let ask6 = window.document.querySelector('#ask6')
let ask7 = window.document.querySelector('#ask7')
let ask8 = window.document.querySelector('#ask8')
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

      ask1.textContent='-';
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
      ask1.textContent='+';
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

      ask2.textContent='-';
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
      ask2.textContent='+';
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
      
      ask3.textContent='-';
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
      ask3.textContent='+';
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

      ask4.textContent='-';
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
      ask4.textContent='+';
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

      ask5.textContent='-';
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
      ask5.textContent='+';
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

      ask6.textContent='-';
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
      ask6.textContent='+';
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

      ask7.textContent='-';
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
      ask7.textContent='+';
    }
  }
  if (item == 8) {
    if (item8.style.display == 'none' || item8.style.display == '') {
      
      item8.style.display = 'flex';
      let opacity = 0.3;
      item8.style.opacity = `${opacity}`;
      let timerId = setInterval(() => {
        opacity += 0.05
        item8.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId) }, 350);

      ask8.textContent='-';
      opacity = 0.3;
      ask8.style.opacity = `${opacity}`;
      let timerId2 = setInterval(() => {
        opacity += 0.05
        ask8.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId2) }, 350);
    }
    else {
      item8.style.display = 'none';
      ask8.textContent='+';
    }
  }
}