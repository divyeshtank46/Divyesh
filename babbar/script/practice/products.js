// async function getdata() {
  
//   try {
//     const response = await fetch("https://dummyjson.com/products/categories");
//     const data = await response.json();
//     let category = "";
//     data.map((value) => {
//       category += `<li class="mt-2" data-slug="${value.slug}">${value.slug}</li>`;
//     });
//     document.getElementById("category").innerHTML = category;
//     // console.log(data);
//   } catch (error) {
//     console.log("Error :", error);
//   }
// }
// getdata();
// async function getProducts(catSlug) {
//   let apiurl;
//   try {
//     if (catSlug == " ") {
//       apiurl = "https://dummyjson.com/products";
//     } else {
//       apiurl = `https://dummyjson.com/products/category/${catSlug}`;
//     }
//     const response = await fetch(apiurl);
//     const data = await response.json();
//     let products = "";
//     data.products.map((value) => {
//       products += `
//                   <div class="cart-items">
//                     <div class="cart-img">
//                         <img src="${value.thumbnail}"
//                             alt="Cart-items">
//                     </div>
//                     <div class="pro-desc">
//                         <h3 class="fs-6 p-1 text-center">${value.title}</h3>
//                         <div class="d-flex justify-content-between">
//                             <h4 class="mx-2">$ ${value.price}</h4>
//                             <button class="btn btn-outline-dark">Add To Cart</button>
//                         </div>
//                     </div>
//                 </div>
//       `;
//     });
//     document.getElementById("cartProducts").innerHTML = products;
//     // console.log(data);
//   } catch (error) {
//     console.log("Error :", error);
//   }
// }
// let category = document.getElementById("category");
// category.addEventListener("click", (e) => {
//   if (e.target.tagName == "LI") {
//     let currentSlug = e.target.getAttribute("data-slug");
//     getProducts(currentSlug);
//     let currentCategory = document.getElementById("currentCategory");
//     currentCategory.innerText = currentSlug;
//   }
// });

// getProducts(" ");
// let allProducts = async () => {
//   const response = await fetch("https://dummyjson.com/products");
//   const data = await response.json();
//   let products = "";
//   data.products.map((value) => {
//     products += `
//                   <div class="cart-items">
//                     <div class="cart-img">
//                         <img src="${value.thumbnail}"
//                             alt="Cart-items">
//                     </div>
//                     <div class="pro-desc">
//                         <h3 class="fs-6 p-1 text-center">${value.title}</h3>
//                         <div class="d-flex justify-content-between">
//                             <h4 class="mx-2">$ ${value.price}</h4>
//                             <button class="btn btn-outline-dark">Add To Cart</button>
//                         </div>
//                     </div>
//                 </div>
//       `;
//   });
//   document.getElementById("cartProducts").innerHTML = products;
// };
// let searchProducts = async () => {
//   let proSearch = document.getElementById("search-products").value;
//   const response = await fetch(
//     `https://dummyjson.com/products/search?q=${proSearch}`
//   );
//   const data = await response.json();

//   // // ❗ Check if no product found
//   // if (data.products.length === 0) {
//   //   document.getElementById("cartProducts").innerHTML = `
//   //       <h2 class="text-center text-danger mt-3">Product Not Found</h2>
//   //   `;
//   //   return; // stop the function here
//   // }

//   if (data.products.length === 0) {
//     document.getElementById(
//       "cartProducts"
//     ).innerHTML = `<h2 class="mx-4 text-center">Product Not Found</h2>`;
//     document.getElementById("currentCategory").innerHTML = "";
//     return;
//   }
//   let products = "";
//   data.products.map((value) => {
//     products += `
//       <div class="cart-items">
//         <div class="cart-img">
//             <img src="${value.thumbnail}" alt="Cart-items">
//         </div>
//         <div class="pro-desc">
//             <h3 class="fs-6 p-1 text-center">${value.title}</h3>
//             <div class="d-flex justify-content-between">
//                 <h4 class="mx-2">$ ${value.price}</h4>
//                 <button class="btn btn-outline-dark">Add To Cart</button>
//             </div>
//         </div>
//       </div>
//     `;
//   });

//   document.getElementById("cartProducts").innerHTML = products;

// };

//   document.getElementById("search-products").addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     searchProducts(); // call your function
//   }
// });
// Add CSS for modern loader
const loaderStyle = document.createElement('style');
loaderStyle.textContent = `
  .modern-loader {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 20px auto;
  }
  
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 100%;
  }
  
  .pulse-loader {
    display: inline-block;
    width: 80px;
    height: 80px;
    position: relative;
  }
  
  .pulse-loader div {
    position: absolute;
    border: 4px solid #3498db;
    opacity: 1;
    border-radius: 50%;
    animation: pulse 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  
  .pulse-loader div:nth-child(2) {
    animation-delay: -0.75s;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes pulse {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
  
  .skeleton-loader {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
    border-radius: 4px;
  }
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
document.head.appendChild(loaderStyle);

// Modern loader HTML
function showLoader(type = 'modern') {
  let loaderHTML = '';
  
  switch(type) {
    case 'pulse':
      loaderHTML = `
        <div class="loader-container">
          <div class="pulse-loader">
            <div></div>
            <div></div>
          </div>
        </div>
      `;
      break;
    case 'skeleton':
      loaderHTML = `
        <div class="container">
          <div class="row">
            ${Array(6).fill(0).map(() => `
              <div class="col-md-4 mb-4">
                <div class="skeleton-loader" style="height: 200px; margin-bottom: 10px;"></div>
                <div class="skeleton-loader" style="height: 20px; width: 80%; margin: 5px auto;"></div>
                <div class="skeleton-loader" style="height: 30px; width: 90%; margin: 5px auto;"></div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      break;
    default:
      loaderHTML = `
        <div class="loader-container">
          <div class="modern-loader"></div>
        </div>
      `;
  }
  
  document.getElementById("cartProducts").innerHTML = loaderHTML;
}

async function getdata() {
  try {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    let category = "";
    data.map((value) => {
      category += `<li class="mt-2" data-slug="${value.slug}">${value.slug}</li>`;
    });
    document.getElementById("category").innerHTML = category;
  } catch (error) {
    console.log("Error :", error);
  }
}

getdata();

async function getProducts(catSlug) {
  let apiurl;
  try {
    // Show loader before fetching
    showLoader('pulse'); // You can change to 'modern' or 'skeleton'
    
    if (catSlug == " ") {
      apiurl = "https://dummyjson.com/products";
    } else {
      apiurl = `https://dummyjson.com/products/category/${catSlug}`;
    }
    
    const response = await fetch(apiurl);
    const data = await response.json();
    
    // Simulate loading delay for better UX (remove in production)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let products = "";
    data.products.map((value) => {
      products += `
                  <div class="cart-items">
                    <div class="cart-img">
                        <img src="${value.thumbnail}"
                            alt="Cart-items">
                    </div>
                    <div class="pro-desc">
                        <h3 class="fs-6 p-1 text-center">${value.title}</h3>
                        <div class="d-flex justify-content-between">
                            <h4 class="mx-2">$ ${value.price}</h4>
                            <button class="btn btn-outline-dark">Add To Cart</button>
                        </div>
                    </div>
                </div>
      `;
    });
    document.getElementById("cartProducts").innerHTML = products;
  } catch (error) {
    console.log("Error :", error);
    document.getElementById("cartProducts").innerHTML = `
      <div class="text-center text-danger mt-4">
        <h3>Error loading products</h3>
        <p>Please try again later</p>
      </div>
    `;
  }
}

let category = document.getElementById("category");
category.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    let currentSlug = e.target.getAttribute("data-slug");
    getProducts(currentSlug);
    let currentCategory = document.getElementById("currentCategory");
    currentCategory.innerText = currentSlug;
  }
});

getProducts(" ");

let allProducts = async () => {
  try {
    showLoader('modern');
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let products = "";
    data.products.map((value) => {
      products += `
                  <div class="cart-items">
                    <div class="cart-img">
                        <img src="${value.thumbnail}"
                            alt="Cart-items">
                    </div>
                    <div class="pro-desc">
                        <h3 class="fs-6 p-1 text-center">${value.title}</h3>
                        <div class="d-flex justify-content-between">
                            <h4 class="mx-2">$ ${value.price}</h4>
                            <button class="btn btn-outline-dark">Add To Cart</button>
                        </div>
                    </div>
                </div>
      `;
    });
    document.getElementById("cartProducts").innerHTML = products;
  } catch (error) {
    console.log("Error:", error);
    showError();
  }
};

let searchProducts = async () => {
  try {
    showLoader('skeleton');
    let proSearch = document.getElementById("search-products").value;
    
    if (!proSearch.trim()) {
      allProducts();
      return;
    }
    
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${proSearch}`
    );
    const data = await response.json();
    
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (data.products.length === 0) {
      document.getElementById(
        "cartProducts"
      ).innerHTML = `<h2 class="mx-4 text-center text-muted">Product Not Found</h2>`;
      document.getElementById("currentCategory").innerHTML = "";
      return;
    }
    
    let products = "";
    data.products.map((value) => {
      products += `
        <div class="cart-items">
          <div class="cart-img">
              <img src="${value.thumbnail}" alt="Cart-items">
          </div>
          <div class="pro-desc">
              <h3 class="fs-6 p-1 text-center">${value.title}</h3>
              <div class="d-flex justify-content-between">
                  <h4 class="mx-2">$ ${value.price}</h4>
                  <button class="btn btn-outline-dark">Add To Cart</button>
              </div>
          </div>
        </div>
      `;
    });

    document.getElementById("cartProducts").innerHTML = products;
  } catch (error) {
    console.log("Error:", error);
    showError();
  }
};

function showError() {
  document.getElementById("cartProducts").innerHTML = `
    <div class="text-center text-danger mt-4">
      <h3>Failed to load products</h3>
      <button class="btn btn-outline-primary mt-2" onclick="getProducts(' ')">Try Again</button>
    </div>
  `;
}

document.getElementById("search-products").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchProducts();
  }
});