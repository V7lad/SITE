let item1 = window.document.querySelector('#item1')
let item2 = window.document.querySelector('#item2')
let item3 = window.document.querySelector('#item3')
let item4 = window.document.querySelector('#item4')
let item5 = window.document.querySelector('#item5')

const click1 = (event, item) => {
  console.log(item1.style.display)
  console.log(item)

  if (item == 1) {
    if (item1.style.display == 'none' || item1.style.display == '') {
      item1.style.display = 'flex';

      let opacity=0.5;
      
      let timerId = setInterval(() => {
        opacity+=0.1
        item1.style.opacity = `${opacity}`;

      }, 100);
      setTimeout(() => { clearInterval(timerId)}, 500);

    }
    else {
      
      
      let opacity=1;
      let timerId = setInterval(() => {
        opacity-=0.1
        item1.style.opacity = `${opacity}`;

      }, 25);
      setTimeout(() => { clearInterval(timerId)}, 250);
      item1.style.display = 'none';
    }
  }
  if (item == 2) {
    if (item2.style.display == 'none' || item1.style.display == '') {
      item2.style.display = 'flex';

    }
    else {
      item2.style.display = 'none';
    }
  }
  if (item == 3) {
    if (item3.style.display == 'none' || item1.style.display == '') {
      item3.style.display = 'flex';
    }
    else {
      item3.style.display = 'none';
    }
  }
  if (item == 4) {
    if (item4.style.display == 'none' || item1.style.display == '') {
      item1.style.display = 'flex';
    }
    else {
      item4.style.display = 'none';
    }
  }
  if (item == 5) {
    if (item5.style.display == 'none' || item1.style.display == '') {
      item5.style.display = 'flex';
    }
    else {
      item5.style.display = 'none';
    }
  }

}