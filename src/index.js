import _ from 'lodash'
import './style.css'
import imgs from './circle.png'

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = imgs;

  element.appendChild(muIcon)
  return element;
}

document.body.appendChild(component());