// const products = localStorage.getItem('products')
// const cardsMenu = document.querySelector('.cards-menu')

// const renderItems = (data) => {
//     data.forEach(({description, id, image, name, price}) => {
//         const card = document.createElement('div')
//         card.classList.add('card')

//         card.innerHTML = `
//             <img src="${image}" alt="image" class="card-image" />
//             <div class="card-text">
//                 <div class="card-heading">
//                     <h3 class="card-title card-title-reg">${name}</h3>
//                 </div>
//                 <!-- /.card-heading -->
//                 <div class="card-info">
//                     <div class="ingredients">${description}
//                     </div>
//                 </div>
//                 <!-- /.card-info -->
//                 <div class="card-buttons">
//                     <button class="button button-primary button-add-cart">
//                         <span class="button-card-text">В корзину</span>
//                         <span class="button-cart-svg"></span>
//                     </button>
//                     <strong class="card-price-bold">${price} ₽</strong>
//                 </div>
//             </div>
//         `
//         cardsMenu.append(card)
//     });
// }

// if (localStorage.getItem('products')) {
//     fetch(`/db/${products}`)
//     .then((response) => response.json())
//     .then((data)=> {
//         renderItems(data)
//     }) 
//     .catch((error) => {
//         console.log(error);
//     })
// }
// else {
//     alert('Данные о выбранном ресторане отсутствуют. Вы будете возвращены на главную страницу.')
//     window.location.href = '/'
// }




//Вариант 2
const restourant = localStorage.getItem('restaurant')
const cardsMenu = document.querySelector('.cards-menu')

const renderItems = (data) => {
    data.forEach(({description, id, image, name, price}) => {
        const card = document.createElement('div')
        card.classList.add('card')

        card.innerHTML = `
            <img src="${image}" alt="image" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <!-- /.card-heading -->
                <div class="card-info">
                    <div class="ingredients">${description}
                    </div>
                </div>
                <!-- /.card-info -->
                <div class="card-buttons">
                    <button class="button button-primary button-add-cart">
                        <span class="button-card-text">В корзину</span>
                        <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold">${price} ₽</strong>
                </div>
            </div>
        `
        cardsMenu.append(card)
    });
}

if (localStorage.getItem('restaurant')) {
    const restaurant = JSON.parse(localStorage.getItem('restaurant'))
    fetch(`/db/${restaurant.products}`)
    .then((response) => response.json())
    .then((data)=> {
        renderItems(data)
    }) 
    .catch((error) => {
        console.log(error);
    })
}
else {
    alert('Данные о выбранном ресторане отсутствуют. Вы будете возвращены на главную страницу.')
    window.location.href = '/'
}


