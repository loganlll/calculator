let display = document.querySelector('.calculator__display__number')
let one = document.querySelector('.one')
let add = document.querySelector('.add')
let equals = document.querySelector('#equals')

display.textContent = 0
let addActivated = false;
let startingNumber = 0
let addTotal = 0
let clickedNumber = 0;


let calculator = document.querySelector('.calculator__pad__container')



calculator.addEventListener('click', function (e) {


     



    if (e.target.dataset.value !== undefined) {
        clickedNumber = Number(e.target.dataset.value) 
        numberClicked(e.target.textContent)
    }

    if (e.target.className === 'add') {
        addFunction()
        console.log('wow')
    }

    if (e.target.id === 'equals') {
        equalFunction()
        console.log('wow')
    }

    if (e.target.className === 'on') {
        display.textContent = 0
        addActivated = false;
        startingNumber = 0
        addTotal = 0
    }



    
    


})

let numberClicked = function (number) {

    if (display.textContent !== '' && display.textContent != '0' ) {
        display.innerHTML += number
    }

    if (display.textContent === '0') {
        display.innerHTML = number
    }

    // if (addActivated) {
    //     numberToAdd = Number(display.textContent)
    //     addTotal = startingNumber + numberToAdd
    // }

    if (addActivated) {
        

        if (addTotal === 0) {
            numberToAdd = clickedNumber
        } else if (addTotal !== 0) {
            numberToAdd = String(numberToAdd)  + clickedNumber
            console.log(numberToAdd)
        }

        addTotal = startingNumber + Number(numberToAdd) 
    }


}

let addFunction = function () {


    startingNumber = Number(display.textContent) 
    display.textContent = display.textContent + '+';
    let numberToAdd = 0
    addTotal = 0
    addActivated = true;

}

let equalFunction = function () {
    if (addActivated && addTotal !== '') {
        display.innerHTML = addTotal
        addActivated = false;
        console.log('check')
    }
}




// document.querySelector('body').addEventListener('click', function (e) {
//     console.log(e.target)
// }
// )

// add.addEventListener('click', function () {

// })

// equals.addEventListener('click', function () {

// })



