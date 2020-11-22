const button = document.querySelector('#btn')
const input = document.querySelector('#inp')
button.addEventListener('click',addMoney)

var x = 10 
function addMoney(){
    input.value = x
    x = x + 10
}

/////////// last part ///////////

let sneakers = document.getElementById('sneakers');
let watch = document.getElementById('watch');
let watch2 = document.getElementById('watch2');
let redsneakers = document.getElementById('redsneakers');
let redsneakers2 = document.getElementById('redsneakers2');
let trousers = document.getElementById('trousers');
let buy = document.getElementById('buy');
let buy2 = document.getElementById('buy2');

sneakers.addEventListener('mouseover', ()=>{
    document.getElementById('buy').classList.toggle('active')
})
watch.addEventListener('mouseover', ()=>{
    document.getElementById('buy2').classList.toggle('active')

})
watch2.addEventListener('mouseover', ()=>{
    document.getElementById('buy3').classList.toggle('active')

})
redsneakers.addEventListener('mouseover', ()=>{
    document.getElementById('buy4').classList.toggle('active')

})
redsneakers2.addEventListener('mouseover', ()=>{
    document.getElementById('buy5').classList.toggle('active')

})
trousers.addEventListener('mouseover', ()=>{
    document.getElementById('buy6').classList.toggle('active')

})

buy.addEventListener('click', ()=>{
    check()
})

// append elements from the html for first product
let col = document.querySelector('.col-1')

function check(){
    sneakers.value = 17
    if(input.value >= sneakers.value){
      let x = (input.value - sneakers.value)  
      console.log(x)
      input.value = x
    }
    else{
        let warningSneakers = document.createElement('div')
        warningSneakers.classList = "sneakerswarning"
        col.appendChild(warningSneakers)
       var timeLeft = 2;
       setInterval(function(){
       if(timeLeft <=0){
        warningSneakers.remove()
       return false
       }
       timeLeft -=1
       console.log(timeLeft)
       },150)
    }
}
// append elements from the html for second product

buy2.addEventListener('click',()=>{
    check2()
})
function check2(){
    watch.value = 35
    if(input.value >= watch.value){
      let x = (input.value - watch.value)  
      console.log(x)
      input.value = x
    }
    else{
        let warningWatch = document.createElement('div')
        warningWatch.classList = "warningWatch"
        col.appendChild(warningWatch)
       var timeLeft = 2;
       setInterval(function(){
       if(timeLeft <=0){
        warningWatch.remove()
       return false
       }
       timeLeft -=1
       console.log(timeLeft)
       },150)
    }
}

