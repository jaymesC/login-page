const inputs = document.quaerySelectorAll('.inputs');

function focusFunc(){
  let parent = this.parentNode.parentNode;
  parentNode.classList.add('focus');
}

function blurFunc(){
  let parent = this.parentNode.parentNode;
  if(this.value == ""){
  parentNode.classList.remove('focus');
  }
}


inputs.forEach(inputs =>{
  input.addEventListener('focus', focusFunc);
  input.addEventListener('focus', blurFunc);
});