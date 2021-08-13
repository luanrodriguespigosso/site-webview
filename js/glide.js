/* Resize Glide start */
const config = {
    type: 'carousel',
    perView: 3,
    autoplay: 3500,
    breakpoints: {
        1150: {
            type: 'carousel',
            autoplay: 3500,
            perView: 2
        },
        910: {
            type: 'carousel',
            autoplay: 3500,
            perView: 1
        }
    }
}
new Glide('.glide', config).mount()
/* Resize Glide end */
