let image1 = document.querySelector('#image-1');
let image2 = document.querySelector('#image-2');
let image3 = document.querySelector('#image-3');
let image4 = document.querySelector('#image-4');
let image5 = document.querySelector('#image-5');
let image6 = document.querySelector('#image-6');
let image7 = document.querySelector('#image-7');
let image8 = document.querySelector('#image-8');
let target = document.getElementById('target');
let mumu = "Esther";

function test(msg){
    console.log(msg)
}

function showPic(variable){
    target.classList.toggle('preview');
    target.classList.remove('preview');
    //test();
    let srcImg = document.querySelector(variable);
    const src = srcImg.getAttribute('src');
    //console.log(src);
    let imageSource = '<img src="' + `${src}` + '" width="100%" height="20%">';
    //console.log(imageSource);
    target.innerHTML = `${imageSource}`;
    target.style.position = 'fixed';
    target.style.height = '150rem';
    target.style.width = '80rem';
    target.style.margin = '1rem';
}

image1.addEventListener('click', () =>{
    showPic('#image-1 img');
});

image2.addEventListener('click', () =>{
    showPic('#image-2 img');
});

image3.addEventListener('click', () =>{
    showPic('#image-3 img');
    let username = prompt(`What is your name`);
    console.log(username);
});

image4.addEventListener('click', () =>{
    showPic('#image-4 img');
});

image5.addEventListener('click', () =>{
    showPic('#image-5 img');
});

image6.addEventListener('click', () =>{
    showPic('#image-6 img');
});

image7.addEventListener('click', () =>{
    showPic('#image-7 img');
    console.log(mumu);
    
});

image8.addEventListener('click', () =>{
    showPic('#image-8 img');
});
