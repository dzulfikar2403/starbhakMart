let products = document.querySelectorAll("#product");
let productsName = document.querySelectorAll("#product-name");
let price = document.querySelectorAll("#price");
let cardShopping = document.querySelectorAll("#card-shopping");
let bill = document.querySelector(".bill");
let total = document.getElementById("total");
let disc = document.getElementById("discount");
let getTax = document.getElementById("tax");

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
    h2.style.fontWeight = "bold";
    h2.style.fontSize = "16px";

    div.append(h2);

    let pBill = document.createElement("p");
    let numb = 1;
    pBill.innerHTML = numb;
    // pBill.style.padding = "0px,4px";

    h2.after(pBill);

    let minus = document.createElement("span");
    minus.innerHTML = '<i class="fa-solid fa-minus"></i>';

    pBill.before(minus);

    let plus = document.createElement("span");
    plus.innerHTML = '<i class="fa-solid fa-plus"></i>';

    pBill.after(plus);

    let spanNew = document.createElement("span");
    spanNew.textContent = "Rp.";
    spanNew.style.display = "inline-block";
    h2.after(spanNew);

    let h3 = document.createElement("h3");
    h3.innerHTML = price[i].innerText;
    h2.setAttribute("id", "h2bill");
    h3.classList.add("bill-childH3");

    spanNew.append(h3);

    // let divChild = document.querySelector("#bill")
    let trashIcon = document.createElement("span");
    trashIcon.innerHTML = '<i class="fa-solid fa-trash" style="color: #c62a51;"></i>';

    div.append(trashIcon);

    div.style.display = "flex";
    div.style.justifyContent = "space-between";

    trashIcon.addEventListener("click", (e, i) => {
      div.remove();
    });

    plus.addEventListener("click", () => {
      numb += 1;
      pBill.innerHTML = numb;
      console.log(price);

      // var b = parseInt(document.querySelector(".bill-childH3").innerHTML,10);
      var curP = price[i].textContent * parseInt(numb);
      console.log(price[i].textContent);
      h3.innerText = curP;

      // totalAmount()
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

  console.log(document.querySelectorAll(".bill-childH3"));
  h3ol.forEach((v, i) => {
    let tax = 200;
    let discPersen= ((5/100) * parseInt(v.textContent));
    let hasil = ((parseInt(v.textContent) - discPersen) + tax);
    // hasil = (hasil * numb) / numb ;

    jumlah += hasil;
  });

  total.innerHTML = jumlah;
};

// total.innerHTML = totalAmount();

productsName.forEach((e, i) => {
  let nameProduct = ["Nasi Ayam bakar", "Aqua", "Paket Donat salju", "American Pizza", "Japanese Ramen", "Chicken Curry", "Oreo Milkshake"];

  e.innerText = nameProduct[i];
});

price.forEach((e, i) => {
  let prices = [20000, 4000, 6000, 98000, 34000, 48000, 18000, 25000];
  e.innerHTML = prices[i];
});


let print = (e)=>{
  if(e.keycode === 13){
    alert("dbakjhsdbska")
  }
}


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

// pictures.forEach((e,i)=>{
// });

slideEl.forEach((e,i)=>{
  e.style.backgroundImage = `url(${pictures[i].pic})`;
  e.style.objectFit = `cover`;
  e.style.backgroundPosition = `50% 50%`;
  e.style.backgroundRepeat = `no-repeat`;
  e.style.backgroundSize = `100%`;
  console.log(pictures[i].pic);
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

      e.remove()
      total.textContent = ""
    }
  });

}





// products.forEach((e,i)=>{
// let acak = ()=>{
//   let random = Math.random();

//   if(random < 0.20) return i[0];
//   if(random >= 0.20 && random < 0.33) return i[1];
//   if(random >= 0.33 && random <= 0.44) return i[2];
//   if(random > 0.44 && random <= 0.52) return i[3];
//   if(random > 0.52 && random <= 0.68) return i[4];
//   if(random > 0.68 && random <= 0.80) return i[5];
//   if(random > 0.80) return i[6];

// }

// return i.innerText = acak();

// });
