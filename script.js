document.querySelector('#fname').addEventListener('blur',()=>{
	let i=document.querySelector('#fname');
	i.value=i.value.toUpperCase();
})