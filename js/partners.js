const cardsRestaurant = document.querySelector('.cards-restaurants')

const renderItems = (data) => {
    data.forEach(({image, kitchen, name, price, products, stars, time_of_delivery}) => {
        const a = document.createElement('a')
        a.setAttribute('href', '/restaurant.html')
        a.classList.add('card')
        a.classList.add('card-restaurant')

        a.dataset.products = products

        a.innerHTML = `
            <img src="${image}" alt="${name}" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">${name}</h3>
                    <span class="card-tag tag">${time_of_delivery} мин</span>
                </div>
                <!-- /.card-heading -->
                <div class="card-info">
                    <div class="rating">
                    ${stars}
                    </div>
                    <div class="price">От ${price} ₽</div>
                    <div class="category">${kitchen}</div>
                </div>
                <!-- /.card-info -->
            </div>
            <!-- /.card-text -->
        `

        a.addEventListener('click', (e)=> {
            e.preventDefault()
            const link = a.dataset.products

            localStorage.setItem('restaurant', link)
            localStorage.setItem('name', name)
            localStorage.setItem('stars', stars)
            localStorage.setItem('price', price)
            localStorage.setItem('kitchen', kitchen)
            window.location.href = '/restaurant.html'
        })

        cardsRestaurant.append(a)
    })
}

fetch('/db/partners.json')
    .then((response) => response.json())
    .then((data)=> {
        renderItems(data)
    }) 
    .catch((error) => {
        console.log(error);
})