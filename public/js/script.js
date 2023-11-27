let products = document.querySelectorAll("#product");
let productsName = document.querySelectorAll("#product-name");
let price = document.querySelectorAll("#price");
let cardShopping = document.querySelectorAll("#card-shopping");
let bill = document.querySelector(".bill");
let total = document.getElementById("total");
let disc = document.getElementById("discount");
let getTax = document.getElementById("tax");
let plus,minus,trashIcon;

let invoice = document.getElementById("invoice");

document.getElementById('cart').addEventListener('click',()=>{
  document.getElementById('payBtn').classList.toggle('tutup-cart');
  invoice.classList.toggle('tutup-cart');
  document.getElementById('bungkus').classList.toggle('layar-bungkus');
})

cardShopping.forEach((e, i) => {
  e.addEventListener("click", (e) => {
    // alert("test");
    disc.style.display = "inline";
    getTax.style.display = "inline";

    let div = document.createElement("div");
    div.setAttribute("id", "bill");
    div.classList.add("bill-child");
    bill.append(div);

    let h2 = document.createElement("h2");
    h2.innerHTML = productsName[i].innerText;
    h2.setAttribute("id", "h2bill");
    h2.style.fontWeight = "bold";
    h2.style.fontSize = "16px";

    div.append(h2);

    let pBill = document.createElement("p");
    let numb = 1;
    pBill.innerHTML = numb;

    h2.after(pBill);

    minus = document.createElement("span");
    minus.innerHTML = '<i class="fa-solid fa-minus"></i>';

    pBill.before(minus);

    plus = document.createElement("span");
    plus.innerHTML = '<i class="fa-solid fa-plus"></i>';

    pBill.after(plus);

    let spanNew = document.createElement("span");
    spanNew.textContent = "Rp.";
    spanNew.style.display = "inline-block";
    h2.after(spanNew);

    let h3 = document.createElement("h3");
    h3.innerHTML = price[i].innerText;
    h3.classList.add("bill-childH3");

    spanNew.append(h3);

    trashIcon = document.createElement("span");
    trashIcon.innerHTML = '<i class="fa-solid fa-trash" style="color: #c62a51;"></i>';

    div.append(trashIcon);

    div.style.display = "flex";
    div.style.justifyContent = "space-between";

    //1 item 
    // let allBill = document.querySelectorAll("#bill");
    // allBill.forEach((e,i) => {
    //   if(e === e){
    //     console.log("test");
    //   }
    // });

    // console.log(allBill)

    trashIcon.addEventListener("click", (e, i) => {
      div.remove();

      totalAmount();
    });

    plus.addEventListener("click", () => {
      numb += 1;
      pBill.innerHTML = numb;
      console.log(price);

      var curP = price[i].textContent * parseInt(numb);
      console.log(price[i].textContent);
      h3.innerText = curP;

      totalAmount();
    });

    minus.addEventListener("click", () => {
      numb -= 1;
      pBill.innerHTML = numb;

      var curP = price[i].textContent * numb;
      console.log(price[i].textContent);

      h3.innerText = curP;

      totalAmount()

      if (numb < 1) {
        div.remove();
      }
    });

    totalAmount();
  });
});

let totalAmount = (e, i) => {
  let h3ol = document.querySelectorAll(".bill-childH3");
  let jumlah = 0;

  // console.log(document.querySelectorAll(".bill-childH3"));
  h3ol.forEach((v, i) => {
    let tax = 200;
    let discPersen= ((5/100) * parseInt(v.textContent));
    let hasil = ((parseInt(v.textContent) - discPersen) + tax);

    jumlah += hasil;
  });

  total.innerHTML = jumlah;
};

// name of item
productsName.forEach((e, i) => {
  nameProduct = ["Nasi Ayam bakar", "Aqua", "Paket Donat salju", "American Pizza", "Japanese Ramen", "Chicken Curry", "Oreo Milkshake"];

  e.innerText = nameProduct[i];
});


// price of item
price.forEach((e, i) => {
  let prices = [20000, 4000, 6000, 98000, 34000, 48000, 18000, 25000];
  e.innerHTML = prices[i];
});


// search func. can fix,but later
// let search = document.querySelector("#search");

// search.addEventListener("input",(e)=>{
//   // if(e.key === 'Enter'){
//     fungsiCari()
//   // }
// })

// let fungsiCari = ()=>{
//   //ambil input user
//   let searchValue = search.value.toLowerCase();

//   // filter array nama product
//   let nameProductFilter = nameProduct.filter((e)=>{
//     return e.toLowerCase().includes(searchValue);
//   })

//   products.forEach((e,i) =>{
//     document.getElementById('kotakProduct').innerHTML = "";
//     // document.querySelector('.swiper').innerHTML = "";
//   })

//   nameProductFilter.forEach((e,i)=>{
//     document.getElementById('kotakProduct').innerHTML += `<div id="product" class="shadow w-full rounded-md mt-2 overflow hover:scale-110 transition-all ">
//     <img src="./img/nasi_ayam_bakar.jpg" alt="" id="gambar" class="object-cover object-center h-28 w-full">
//     <div>
//       <h2 id="product-name" class="font-bold p-1  ">${e}</h2>
//       <div class="flex justify-between ">
//         <span>Rp.<p id="price" class="inline text-base pl-1  font-mono "></p></span>
//         <span id="card-shopping" class="px-2 py-1 rounded-tl-xl bg-[skyblue]  text-purple-100 hover:bg-[royalblue] cursor-pointer "><i class="fa-solid fa-cart-shopping fill-current"></i></span>
//       </div>
//     </div>
//   </div>`;

//     console.log(e);
//   });
  

//   // console.log(allNameProduct);
// }



//swipper js
let pictures = [
  {
    id: 1,
    pic: "./img/milkshakePromo.jpg"
  },
  {
    id: 2,
    pic: "./img/promoRamen.jpg"
  },
  {
    id: 3,
    pic: "./img/panties-pizza-promo.jpg"
  },
]

let slideEl = document.querySelectorAll(".swiper-slide");

slideEl.forEach((e,i)=>{
  e.style.backgroundImage = `url(${pictures[i].pic})`;
  e.style.objectFit = `cover`;
  e.style.backgroundPosition = `50% 50%`;
  e.style.backgroundRepeat = `no-repeat`;
  e.style.backgroundSize = `100%`;
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 2300,
  spaceBetween: 30,
  autoplay: {
    duration: 3500,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});


// payment info
let payment = ()=>{
  let billDiv = document.querySelectorAll("#bill");
  let totalAll = document.querySelectorAll("#total")
  let totalAllNew;

  totalAll.forEach((e,i)=>{
    totalAllNew = e.textContent;
  })

  billDiv.forEach((e,i)=>{
    if(i.length === 0){
      return
    }else{
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Payment has been successful of Rp.${totalAllNew}`,
        showConfirmButton: false,
        timer: 1500
      });

      invoice.style.display = "block";

      document.querySelector("#main").innerHTML = invoice.innerHTML;
      
      let iconBack = document.createElement("span");
      iconBack.innerHTML = '<img src="./img/WhatsApp_Image_2023-11-17_at_17.12.26-removebg-preview.png" alt="" width=175px" >';

        
      document.body.append(iconBack);
      iconBack.classList.add("iconBack");

      
      iconBack.addEventListener("click",()=>{
        location.reload()
      });

      html2pdf().from(invoice.innerHTML).save();
    }

  });

}

//aos
AOS.init();
  



