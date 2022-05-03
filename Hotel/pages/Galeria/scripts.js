let imagens = document.querySelectorAll('.img-item');
let modal= document.querySelector('.modal');
let modalIMG = document.querySelector('#modal-img');
let btClose = document.querySelector('#bt-close');
let srcVal = "";

for(let i = 0; i < imagens.length; i++){
	imagens[i].addEventListener('click', 
		function(){
			srcVal = imagens[i].getAttribute('src');
			modalIMG.setAttribute('src', srcVal);
			modal.classList.toggle('modal_active');
		}    
	);
}

btClose.addEventListener('click',
	function(){
		modal.classList.toggle('modal_active');
		
	}
);