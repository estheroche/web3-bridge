const images = document.querySelectorAll('.slider')
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
    images.forEach((slide) => {
        slide.style.transform = `translateX(-${current * 100}%)`
    })
}

setInterval(() => {
    current += 1
    slide()
}, 3000);