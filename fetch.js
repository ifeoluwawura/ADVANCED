
let products = [];
async function getproducts() {
    try{
        const fetchData = {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: "Bearer hchcjdjcjc"
    },
};
    let url = "https://dummyjson.com/products?limit=10"

    let response = await fetch(url,fetchData);
    let data = await response.json();
        console.log(data);
        products = data.products;
        console.log(products);    

    let myproductContent = products.map(function(product){
       return `
        <div class="bg-white border border-gray-200 shadow-sm p-5 text-center flex flex-col justify-between rounded-lg">
            <div class="w-full h-32 flex items-center justify-center bg-gray-50 rounded mb-3 overflow-hidden">
            <img src="${product.thumbnail}" class="max-h-full max-w-full object contain">
            </div>
        <div>
            <h4 class="text-sm font-semibold text-gray-800 mb-1">${product.title}</h4>
            <p class="text-[10px] text-gray-400 text-xs font-bold mb-2">${product.category}</p>
            <p class="text-gray-700 mb-4 h-8"> ${product.description}</p>
            <p class="text-xs font-bold text-yellow-500">PRICE: $${product.price}</p>
        
        </div>
        </div>
    `
    });

    document.querySelector('#ourProducts').innerHTML = myproductContent.join("")

    } catch(error){
        console.log(error);
        document.querySelector('#userError').innerHTML = "Error loading products..."
    } finally{
        console.log("Fetching completed");
    }
}

getproducts();



