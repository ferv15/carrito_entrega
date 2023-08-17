document.addEventListener
("DOMContentLoaded",function(){
    const base_url = 'https://ecommercebackend.fundamentos-29.repl.co/';
    const buy = document.querySelector ('.car');
    const allItems = document.querySelector('.allProducts');
    const allProducts = document.querySelector('.allProducts');
    const Tshirts = document.querySelector('Tshirts');
    const Sacks = document.querySelector('.Sacks');
    
    
    async function getApi(){
        try {
            const data = await fetch(base_url);
            const res = await data.json();
            return res;
        } catch (error) {
            console.log(error);
        }
    }
// getApi();

async function main(){
    const products = await getApi();
    // console.log(products)
    const section = document.querySelector('.section');
    console.log(section);
    let html = '';
    // console.log(html);
    for(const product of products){
        console.log(product);
        html += `
    <div class="product">
        <div class="product_img">
            <img src="${product.image}" alt="imagen de producto" />
        </div>
        <div class="product_description">
            <h2>
            ${product.category} 
            </h2>
            <p>
            ${product.description} 
            </p>
            <div class="footer">
                <strong>
                Stock: ${product.quantity}
                </strong>
                <strong class="value">
                Precio: $${product.price}
                </strong>
                <button class="add" id=${product.id}>
                Add To cart
                </button>
            </div>
        </div>
    </div>
        `
    }
    section.innerHTML = html;
    console.log(html);
}
main();


    buy.addEventListener('click',function(){
        window.alert("carrito");
    })

    allItems.addEventListener('click',function(){
        window.alert("all items")
    })

    allProducts.addEventListener('click',function(){
        window.alert("all products");
    })
})

// minuto 1:48:15