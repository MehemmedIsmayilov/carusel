let prew = document.querySelector(".prew");
let next = document.querySelector(".next");
let img = document.querySelector("img");

let index = 0;
let arr = ["img1.jpg", "img2.jpg", "img3.jpg"];

next.addEventListener("click", () => {
  img.setAttribute("src", `./images/${arr[index]}`);

  if (index == arr.length - 1) {
    index = 0;
  } else {
    index++;
  }
});

prew.addEventListener("click",()=>{
    img.setAttribute("src",`./images/${arr[index]}`)

    if(index==0){
        index=arr.length-1;
    }
    else{
        index--;
    }
})
