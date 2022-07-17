//seting initial count
let count = 0;

const value = document.querySelector("#span");
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const style = e.currentTarget.classList;
        if (style.contains('tuper')) {
            count--;
        }
        else if (style.contains('super')) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
        if (count > 0) {
            value.style.color = 'green';
        }
        else if (count < 0) {
            value.style.color = 'red';
        }
        if (count == 0) {
            value.style.color = 'black';
        }
    });

});