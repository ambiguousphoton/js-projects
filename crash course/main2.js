const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);
li.innerHTML = 'X-men';
li.classList.add('list-items');

const tl = document.querySelector('#heading');
tl.style.color = 'blue';
const listitems = document.querySelectorAll('.list-items');
for(i = 0; i < listitems.length ;i++)
{
    listitems[i].style.fontSize = '18px';
    listitems[i].style.backgroundColor = 'red'
}
console.log(tl)
// Parent node traversal
// let ulx = document.querySelector('ul');
let parent = ul.parentNode;
console.log( parent)

let doc =document.documentElement;
console.log(doc.parentNode)
console.log(doc.parentElement)

children = ul.childNodes
console.log(children)
console.log(ul.firstChild)
console.log(ul.lastChild)
children[1].style.backgroundColor = 'yellow';