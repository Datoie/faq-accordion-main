const minimize = document.getElementsByClassName('img-container')
const text = document.getElementsByClassName('minimize')
const btn = document.getElementsByClassName('plus-icon')
const minusBtn = document.getElementsByClassName('minus-icon')

for(let i = 0 ; i < minimize.length ; i++){
    let count = 0
    let clicked = true
    minimize[i].addEventListener('click', function (){
        count ++
        if (clicked == true){
            text[i].style.display = "block"
            minusBtn[i].style.display = 'block'
            btn[i].style.display = 'none'
            // console.log(count)
        }else{
            text[i].style.display = "none"
            minusBtn[i].style.display = 'none'
            btn[i].style.display = 'block'  
        }
        if (count == 1){
            clicked = !clicked
            count = 0
        }
        console.log(count)
    })
}