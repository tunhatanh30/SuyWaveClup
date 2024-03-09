var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector('.prev')
var nextBtn = document.querySelector('.next')

var currentIndex = 0;
function updateImageByIndex(index) {
    //remove acitve class
    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active')
    })

    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}

listImg.forEach((imgElement, index) => {

    imgElement.addEventListener('click', e => {
        imgFeature.style.opacity = '0'
        setTimeout(() => {
            updateImageByIndex(index)
            imgFeature.style.opacity = '1'
        }, 400);
    })
})

/*-----------------------------------------------------------*/
var clickbtn = document.getElementsByClassName('nut-hiensanpham')[0];
var clickcc = document.getElementsByClassName('o-sanpham')[0];
var bl = false
clickbtn.addEventListener('click', function () {
    console.log('a');
    if (!bl) {
        clickcc.style.display = 'block';
        bl == true;
    } else {
        clickcc.style.display = 'none';
        bl = false;
    }
})