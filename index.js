const images = document.querySelectorAll('.slider')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
let current = 0
images.forEach((image, index) => {
    image.style.left = `${index * 100}%`
})

function slide(){
    if(current > images.length -1 ){
        current = 0
    }
    if(current < 0){
        current = 0
    }
    console.log("best")
    images.forEach((slide) => {
        slide.style.transform = `translateX(-${current * 100}%)`
    })
}

setInterval(() => {
    current += 1
    slide()
}, 3000);

next.addEventListener(('click'), () => {
    
    if(current < images.length){
        current = current + 1
        slide()
    }
})

prev.addEventListener(('click'), () => {
    if(current > 0){
        current = current - 1
        slide()
    }
})