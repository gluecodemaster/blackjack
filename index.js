let firstcard = 10
let secondcard = 5
let cards  = [firstcard,secondcard]
let sum = firstcard + secondcard
let hasblackjack = false
let isalive = true
let message =""
let messagel = document.getElementById("mes")
let sumel = document.getElementById("summ")
let cardsel = document.getElementById("card")
function start(){
    render()

}
function render(){


 cardsel.textContent = "cards:" + " "
 for(let i = 0; i<cards.length;i++){

    cardsel.textContent += cards[i] + " "
 }
 if (sum <= 20){

message = "do you want another card"

 }
 else if (sum === 21){
 hasblackjack = true
 message = "you got blackjack"
 }else{
    message = "you lost moron"
   isalive = false

 }
 messagel.textContent = message
 document.getElementById("summ").innerText = "Sum :"  + sum





}
function neww(){
let card3 = 7
sum += card3
cards.push(card3)
console.log(cards)
render()





}
//gamer
