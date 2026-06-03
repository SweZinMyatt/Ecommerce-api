/** @format */
async function getProdcuts() {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const itemContainer=document.getElementById("item-container")
    const result = await response.json();
    //return result;
    const item=result.map(i=>{
      const itemcard=`
        <a href="singleProduct.html" class="block h-[450px]">
          <div class="flex flex-col group relative overflow-hidden h-full">
            <div class="h-1/2 flex items-center justify-center bg-white p-4">
              <img src="${i.image}" alt="${i.title}" class="max-w-full max-h-full object-contain">
            </div>
      
   
            <div class="absolute bg-black/50 inset-0 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center z-10">
              <button class="bg-white px-5 py-3 text-primary font-bold hover:bg-gray-100">Add to cart</button>
              <div class="flex gap-2 md:gap-4 mt-5 text-white">
              <div class="flex gap-2 text-[10px] lg:text-[16px]"><img src="./images/share.png" alt="share" class="w-4 h-3 xl:w-5 xl:h-5"> Share</div>
              <div class="flex gap-2 text-[10px] lg:text-[16px]"><img src="./images/transfer.png" alt="transfer" class="w-4 h-3 xl:w-5 xl:h-5">Compare</div>
          <div class="flex gap-2 text-[10px] lg:text-[16px]"><img src="./images/heart.png" alt="heart" class="w-4 h-3 xl:w-5 xl:h-5">Like</div>
        </div>
      </div>

    
      <div class="bg-secondary-muted px-4 py-4 h-1/2 flex flex-col justify-between">
        <div>
          <h1 class="font-bold text-[16px] lg:text-[22px] text-[#3A3A3A] line-clamp-3">${i.title}</h1>
          <h3 class="text-[#898989] text-[10px] lg:text-[16px] font-[500px] mt-1">${i.category}</h3>
        </div>
        <h1 class="font-bold text-[16px] lg:text-[22px] text-[#3A3A3A]">$${i.price}</h1>
      </div>

  </div>
</a>`;

      return itemcard;
    })
    itemContainer.innerHTML=item.join("")

  } catch (error) {
    console.error(error.message);
  }
}

const singleContainer=document.getElementById("single-container")
const singlePdesc=document.getElementById("singleP-desc")
async function getProdcut(id) {
  const url = `https://fakestoreapi.com/products/1`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    const product=`<img class="w-80 h-80" src="${result.image}" alt="${result.title}">`
    const details=`<h1 class="font-semibold text-[42px] mb-3">${result.title}</h1>
    <h2 class="text-[24px] font-semibold text-muted mb-3">$${result.price}</h2>
    <div class=flex gap-5 mb-3>
      <div>
        <span class="fa fa-star checked text-yellow-500"></span>
        <span class="fa fa-star checked text-yellow-500"></span>
        <span class="fa fa-star checked text-yellow-500"></span>
        <span class="fa fa-star checked text-yellow-500"></span>
        <span class="fa fa-star"></span>
        </div>
        <div>&nbsp;&nbsp;&#124;&nbsp;&nbsp; 5 Customer Review</div>
      </div>
      <div class="pt-5">${result.description}</div>
      <div class="my-10">
        <h3 class="text-[14px] text-muted">Size</h3>
        <div class="flex gap-5 pt-5">
          <p class="px-3 py-2 bg-primary rounded-lg w-auto">L</p>
          <p class="px-3 py-2 bg-[#F9F1E7] rounded-lg w-auto">XL</p>
          <p class="px-3 py-2 bg-[#F9F1E7] rounded-lg w-auto">XS</p>
      </div>
       <div class="my-10">
        <h3 class="text-[14px] text-muted">Color</h3>
        <div class="flex gap-5 pt-5">
          <p class="bg-violet-600 w-10 h-10 rounded-full"></p>
          <p class="bg-black rounded-full w-10 h-10"></p>
          <p class="bg-primary rounded-full w-10 h-10"></p>
      </div>
      <div class="flex gap-3 mt-5 pb-15 border-b border-[#D9D9D9]">
        <button class="rounded-lg border border-muted px-5 py-4">- &nbsp;1 &nbsp; +</button>
        <button class="rounded-lg border px-5 py-4">Add To Cart</button>
        <button class="rounded-lg border border-muted px-5 py-4">+ &nbsp;&nbsp; Compare</button>
      </div>
      `
    singleContainer.innerHTML=product
    singlePdesc.innerHTML=details
    return result;
    
  } catch (error) {
    console.error(error.message);
  }
}

export { getProdcuts, getProdcut };
