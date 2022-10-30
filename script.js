let gradient = document.querySelectorAll('.gradient');

gradient.forEach(add => {
    let one = add.style.left=`${randomPositionLeft()}px`;
    add.style.right=`${randomPositionRight()}px`;
    add.style.top=`${randomPositionTop()}px`;
    add.style.bottom=`${randomPositionTop()}px`;


    console.log(one);

})

function randomPositionLeft(){
    return Math.floor(Math.random()*1500+1);
}

function randomPositionRight(){
return Math.floor(Math.random()*1500+1);
}

function randomPositionTop(){
    return Math.floor(Math.random()*1500+1);

}

function randomPositionBottom(){
    return Math.floor(Math.random()*1500+1);

}