
let block = document.querySelector(".block");

block.addEventListener('mousedown', mouseDown);
block.addEventListener('mouseup', mouseUp);

function move(e) {
    let x = e.pageX - block.offsetWidth / 2;
    let y = e.pageY - block.offsetHeight / 2;
    block.style.left = x + 'px';
    block.style.top = y + 'px';    
};

function mouseDown() {
    block.addEventListener('mousemove', move)
}; 

function mouseUp() {
    block.removeEventListener('mousemove', move)
}; 