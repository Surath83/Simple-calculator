let string="";
let buttons = document.querySelectorAll('#button');
let count=0;
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    console.log(document.querySelector('.input').value=e);
    if(e.target.innerHTML =='='){
      console.log(document.querySelector('.inputall').value=string);
      string=eval(string);
      console.log(document.querySelector('.input').value=string);
      count++;
    }
    if(e.target.innerHTML== 'C'){
      string='';
      console.log(document.querySelector('.input').value=string);
      count++;
    }
    if(e.target.innerHTML== 'AC'){
      string='';
      console.log(document.querySelector('.inputall').value=string);
      console.log(document.querySelector('.input').value=string);
      count++;
    }
    if(count==0){
    console.log(document.querySelector('.input').value=e.target.innerHTML);
    string=string+e.target.innerHTML;
    document.querySelector('.input').value=string;
    }
    count=0;
  })
})


const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const h1 = document.querySelector('h1');
toggle.onclick = function() {
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  h1.classList.toggle('active');
}