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
