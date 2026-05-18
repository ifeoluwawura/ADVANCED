const products = [
  {
    id: 1,
    category: "Cloth",
    name: "Classic White T-Shirt",
    image_link: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    price: 25.99
  },
  {
    id: 2,
    category: "Cloth",
    name: "Black Hoodie",
    image_link: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
    price: 49.99
  },
  {
    id: 3,
    category: "Cloth",
    name: "Blue Denim Jacket",
    image_link: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg",
    price: 75.00
  },
  {
    id: 4,
    category: "Cloth",
    name: "Red Flannel Shirt",
    image_link: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    price: 39.99
  },
  {
    id: 5,
    category: "Cloth",
    name: "Grey Sweatpants",
    image_link: "https://images.pexels.com/photos/6311603/pexels-photo-6311603.jpeg",
    price: 34.50
  },
  {
    id: 6,
    category: "Cloth",
    name: "Brown Leather Jacket",
    image_link: "https://images.pexels.com/photos/5325886/pexels-photo-5325886.jpeg",
    price: 120.00
  },
  {
    id: 7,
    category: "Cloth",
    name: "Summer Floral Dress",
    image_link: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg",
    price: 55.00
  },
  {
    id: 8,
    category: "Cloth",
    name: "Casual White Sneakers",
    image_link: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    price: 65.00
  },
  {
    id: 9,
    category: "Cloth",
    name: "Beige Trench Coat",
    image_link: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
    price: 140.00
  },
  {
    id: 10,
    category: "Cloth",
    name: "Black Cargo Pants",
    image_link: "https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg",
    price: 58.00
  },

  {
    id: 11,
    category: "Perfume",
    name: "Luxury Gold Perfume",
    image_link: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg",
    price: 85.00
  },
  {
    id: 12,
    category: "Perfume",
    name: "Rose Essence",
    image_link: "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg",
    price: 72.50
  },
  {
    id: 13,
    category: "Perfume",
    name: "Ocean Breeze Cologne",
    image_link: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg",
    price: 66.00
  },
  {
    id: 14,
    category: "Perfume",
    name: "Vanilla Musk",
    image_link: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
    price: 59.99
  },
  {
    id: 15,
    category: "Perfume",
    name: "Amber Night",
    image_link: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg",
    price: 90.00
  },
  {
    id: 16,
    category: "Perfume",
    name: "Fresh Citrus Spray",
    image_link: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg",
    price: 48.00
  },
  {
    id: 17,
    category: "Perfume",
    name: "Elegant Noir",
    image_link: "https://images.pexels.com/photos/724635/pexels-photo-724635.jpeg",
    price: 110.00
  },
  {
    id: 18,
    category: "Perfume",
    name: "Jasmine Bloom",
    image_link: "https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg",
    price: 70.00
  },
  {
    id: 19,
    category: "Perfume",
    name: "Sweet Candy Mist",
    image_link: "https://images.pexels.com/photos/1190828/pexels-photo-1190828.jpeg",
    price: 52.00
  },
  {
    id: 20,
    category: "Perfume",
    name: "Midnight Oud",
    image_link: "https://images.pexels.com/photos/3059624/pexels-photo-3059624.jpeg",
    price: 130.00
  },

  {
    id: 21,
    category: "Beauty",
    name: "Matte Lipstick",
    image_link: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
    price: 15.99
  },
  {
    id: 22,
    category: "Beauty",
    name: "Face Foundation",
    image_link: "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg",
    price: 28.00
  },
  {
    id: 23,
    category: "Beauty",
    name: "Skin Care Serum",
    image_link: "https://images.pexels.com/photos/6621468/pexels-photo-6621468.jpeg",
    price: 35.00
  },
  {
    id: 24,
    category: "Beauty",
    name: "Mascara",
    image_link: "https://images.pexels.com/photos/3373747/pexels-photo-3373747.jpeg",
    price: 18.50
  },
  {
    id: 25,
    category: "Beauty",
    name: "Beauty Blender Set",
    image_link: "https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg",
    price: 12.00
  },
  {
    id: 26,
    category: "Beauty",
    name: "Pink Blush Palette",
    image_link: "https://images.pexels.com/photos/2533267/pexels-photo-2533267.jpeg",
    price: 22.99
  },
  {
    id: 27,
    category: "Beauty",
    name: "Hydrating Face Cream",
    image_link: "https://images.pexels.com/photos/6621338/pexels-photo-6621338.jpeg",
    price: 30.00
  },
  {
    id: 28,
    category: "Beauty",
    name: "Nail Polish Collection",
    image_link: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
    price: 19.00
  },
  {
    id: 29,
    category: "Beauty",
    name: "Perfumed Body Lotion",
    image_link: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
    price: 26.00
  },
  {
    id: 30,
    category: "Beauty",
    name: "Makeup Brush Kit",
    image_link: "https://images.pexels.com/photos/2113854/pexels-photo-2113854.jpeg",
    price: 40.00
  }
]

let myProducts = document.querySelector('#products');
products.forEach(function(value, index){
    myProducts.innerHTML +=
    `
    <div class="bg-white rounded-xl p-3 gap-5 py-4 py-3">
        <img src="${value.image_link}" class="rounded-xl h-[220px] w-[100%] object-cover">
        <p class="font-semibold text-sm mt-2">${value.name}</p>
        <p class="text-gray-500 text-sm mt-2">Category: ${value.category}</p>
        <p class="text-yellow-600 font-semibold mt-1">Price: ${value.price}</p>
    </div>
    `;
});

function filterProducts() {
    let search = document.querySelector('#searchBar').value;

    let productFilter = products.filter(function(value){
        return value.name.toLowerCase().includes(search.toLowerCase());
    });

    let productsResult = document.getElementById('products')
    let message = document.querySelector('#notFound')

    if(productFilter.length === 0){
        productsResult.innerHTML = "";
    } else {
        message.classList.add('hidden');
        let filterMap = productFilter.map(function(value){
            return `
             <div class="bg-white rounded-xl p-3 gap-5 py-4 py-3">
        <img src="${value.image_link}" class="rounded-xl h-[220px] w-[100%] object-cover">
        <p class="font-semibold text-sm mt-2">${value.name}</p>
        <p class="text-gray-500 text-sm mt-2">Category: ${value.category}</p>
        <p class="text-yellow-600 font-semibold mt-1">Price: ${value.price}</p>
     </div>
     `;
                
        });

        productsResult.innerHTML = filterMap.join("");
    }

}
    document.querySelector('#searchBar').addEventListener('input' , filterProducts)
