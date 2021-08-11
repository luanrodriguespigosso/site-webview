/* Resize Glide start */
const config = {
    type: 'carousel',
    perView: 3,
    autoplay: 2500,
    breakpoints: {
        1150: {
            perView: 2
        },
        910: {
            perView: 1
        }
    }
}   
new Glide('.glide', config).mount()
/* Resize Glide end */
