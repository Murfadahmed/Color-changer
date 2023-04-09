// const coloR = []
let buttonChanger = document.querySelector('.Btn');

let headingChanged = document.querySelector('.hex');

let backGround = document.querySelector('.box');

let sipmle = document.querySelector('#simple')

let hex = document.querySelector('#hex')


hex.addEventListener('click', () => {

    // backGround.style.backgroundColor = Colors
    buttonChanger.addEventListener('click', () => {
        let colorR = '#';
        // let random = Math.random(Math.ceil()).toString(14).slice(2,8) ;
        // colorR += random;
        colorR += Math.random(Math.ceil()).toString(14).slice(2, 8);
        // console.log(colorR);
        backGround.style.backgroundColor = colorR
        headingChanged.textContent = colorR
    });
})
let Colors = ["red", "green", "blue", "indigo", "violet", "aquamarine", "blueviolet", "hotpink", "indianred", "lightslategrey","burlywood"]

sipmle.addEventListener('click', () => {
    buttonChanger.addEventListener('click', () => {

        let Random = (Math.ceil(Math.random() * Colors.length) -1)
//         console.log(Random)
        backGround.style.backgroundColor = Colors[Random]
        headingChanged.textContent = Colors[Random]

    })
})
