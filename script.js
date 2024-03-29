let x=document.querySelector('#fname');
x.addEventListener('blur',()=>{
	x.value=x.value.toUpperCase();
})