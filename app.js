const input =  document.querySelector('.switch input');
const content =  document.querySelectorAll('.price_items h2');

input.addEventListener("click",function(){
	content.forEach(function(yy){
		if(input.checked == false){
			yy.innerHTML = '$3600/Year';
		}
		else{
			yy.innerHTML = '$340/Month';
		}
	})
});

const items = document.querySelectorAll('.classes_items');

items.forEach(function(aa){
	const plus = aa.children[2];
	const info = aa.children[1];
	plus.addEventListener("click",function(){
		info.classList.toggle("appair");
		plus.classList.toggle("rotate");
	});
});

const hamburger = document.querySelector('.list_container i')
const pop = document.querySelector('.list_pop')
const x = document.querySelector('.list_pop i');
const a = document.querySelector('.list_pop ul');

hamburger.addEventListener("click", function(){
	pop.style.height = '100vh';
	pop.style.transition = ' height 800ms ease-out';
	a.style.display='block';
	x.style.display='block';
});

x.addEventListener("click", function(){
	pop.style.height = '0vh';
	a.style.display='none';
	x.style.display='none';
});
