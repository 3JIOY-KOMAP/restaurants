const name = localStorage.getItem('name')
const stars = localStorage.getItem('stars')
const price = localStorage.getItem('price')
const kitchen = localStorage.getItem('kitchen')

const menu = document.querySelector('.menu')
const title = document.createElement('div')
title.classList.add('section-heading')
title.innerHTML = `
<h2 class="section-title restaurant-title">${name}</h2>
	<div class="card-info">
		<div class="rating">${stars}</div>
		<div class="price">От ${price} ₽</div>
		<div class="category">${kitchen}</div>
	</div>
`
menu.prepend(title)

