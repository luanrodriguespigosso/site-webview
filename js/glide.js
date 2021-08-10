/* Resize Glide start */
var width = screen.width;

if (width >= 1150) {
    const config = {
        type: 'carousel',
        perView: 3,
        autoplay: 2500
    }
    new Glide('.glide', config).mount()
}else if(width >= 910 && width < 1150){
    const config = {
        type: 'carousel',
        perView: 2,
        autoplay: 2500
    }
    new Glide('.glide', config).mount()
}else if(width < 910){
    const config = {
        type: 'carousel',
        perView: 1,
        autoplay: 2500
    }
    new Glide('.glide', config).mount()
}


/* Resize Glide end */
