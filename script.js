let modalQt = 1;

// PROTOTIPO DE QUERY'S
const qs = (el)=>document.querySelector(el);
const qsa = (el)=>document.querySelectorAll(el);

// CRIANDO UMA CÓPIA DE MODELS DO HTML
pizzaJson.map((item, index)=>{
    let pizzaItem = qs('.models .pizza-item').cloneNode(true);


    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e)=> {
        e.preventDefault();
        // Selecionando a pizza clicada 
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
            // console.log(pizzaJson[key]);
            modalQt = 1;

            qs('.pizzaBig img').src = pizzaJson[key].img;
            qs('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
            qs('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
            qs('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
            qs('.pizzaInfo--size.selected').classList.remove('selected');
            qsa('.pizzaInfo--size').forEach((size, sizeIndex)=> {
                if(sizeIndex == 2) {
                    size.classList.add('selected');
                }

                size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];

            });

            qs('.pizzaInfo--qt').innerHTML = modalQt;


        // MODAL
        qs('.pizzaWindowArea').style.opacity = 0;
        qs('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=> {
            qs('.pizzaWindowArea').style.opacity = 1;
        }, 200);

        
    });


    qs('.pizza-area').append(pizzaItem);
});