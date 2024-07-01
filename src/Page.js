const upBtn = document.querySelector("body .up");

const upFunc = () => {
    let scrolled = window.scrollY > 400;
    if(scrolled){
        upBtn.classList.add("show");
    }else{
        upBtn.classList.remove("show");

    }
};
window.addEventListener("scroll" , () =>{
    const nav = document.querySelector(".navbar");

    const scrolled = window.scrollY > 2;
    const menus = document.querySelectorAll(".menu li a");
    const logo = document.querySelector("#span-");
if(scrolled){
    nav.classList.add("scrolled");
    logo.style.color="white";
    menus.forEach( (menu)=>{
        menu.classList.remove("item");
    } )

}else{
    nav.classList.remove("scrolled");
    logo.style.color="#00b4d8";
    menus.forEach( (menu)=>{
        menu.classList.add("item");
    } )
}
upFunc();
})



const menuBtn = document.querySelector(".menu-bar");
const menuu = document.querySelector(".menu");

menuBtn.addEventListener("click" , () =>{
    menuu.classList.toggle("active");
});
//////////////////////////////
const imageList = document.querySelector(".image-list");
const slideButtons = document.querySelectorAll(".reviews .max-width button");
const scrollContainer = document.querySelector(".scroll-container");
const scrollThumb = scrollContainer.querySelector(".scroll-thumb");





const loadFunction = () =>{

    slideButtons.forEach(button =>{
        button.addEventListener("click" ,() =>{
        const direction = button.id === "left"? -1:1;
        const scrollAmount = imageList.clientWidth*direction;
        imageList.scrollBy({
            left:scrollAmount,behavior:"smooth"
        })
        })
    })
}
const buttonHandlers = () =>{
    const maxScrolWidth = imageList.scrollWidth - imageList.clientWidth;

    slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrolWidth ? "none" : "block";
}

scrollThumb.addEventListener("mousedown" , (e) =>{
      const startX = e.clientX;
      const thumbPosition = scrollThumb.offsetLeft;
     

      const moveFunction = (e) =>{
        const maxScrolWidth = imageList.scrollWidth - imageList.clientWidth;

        const deltaX = e.clientX - startX;
        const newThumb = thumbPosition + deltaX;
        const maxThumbPosition = scrollContainer.getBoundingClientRect().width - scrollThumb.offsetWidth;
        const boundPosition = Math.max(0,Math.min(maxThumbPosition,newThumb));
        const imgPosition = (boundPosition / maxThumbPosition) * maxScrolWidth;
        scrollThumb.style.left = `${boundPosition}px`;
        imageList.scrollLeft = imgPosition;
      }
      const moveupFunction = () =>{
        document.removeEventListener("mousemove" , moveFunction);
        document.removeEventListener("mouseup" , moveupFunction);
      }

      document.addEventListener("mousemove" , moveFunction);
      document.addEventListener("mouseup" , moveupFunction);
})
const updateScroll = () => {
    const maxScrolWidth = imageList.scrollWidth - imageList.clientWidth;

    const scrollPosition = imageList.scrollLeft;

    const scrollThumbPosition = (scrollPosition / maxScrolWidth) * (scrollContainer.clientWidth - scrollThumb.offsetWidth);
    
    scrollThumb.style.left = `${scrollThumbPosition}px`;

}

imageList.addEventListener("scroll" , () => {
    buttonHandlers();
    updateScroll();
})


window.addEventListener("load", loadFunction);

// function regular(){
//     console.log(this);
// };

// // const arrow = (a,a,a,a) =>{
// //     console.log(a);
// // }

// regular();
// arrow(2,2,4,5);

// Example of a function that simulates fetching data from a server
// function fetchData(callack) {
//     // Imagine some code here that fetches data asynchronously
//     // For this example, we'll just use a setTimeout to simulate delay
//     setTimeout(function() {
//       const data = "Some data from the server"; // Pretend this is the fetched data
//       callack(data); // Call the callback function and pass the fetched data to it
//     }, 2000); // Simulate a delay of 2 seconds
//   }
//   // Example usage of the fetchData function with a callback
//   console.log("Fetching data...");
//   fetchData(function(data) {
//     console.log("Data received:", data);
//   });
//   console.log("This line executes immediately, even before data is fetched.");
  
// function multiply(a = 2, b = 2) {
//     return a * b;
//   }
  
//   console.log(multiply()); // Output: 6 (b is defaulted to 2)
//   console.log(multiply(3, 4)); // Output: 12 (b is overridden to 4)
  