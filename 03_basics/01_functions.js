// Introduction to Functions

function loginUsermessage(username){
    if(!username){
        return "Invalid username"
    }
    return `${username} logged in`
}
// console.log(loginUsermessage());

//If there are multiple parameters we can use ...

function addShoppingcart(...num1){
    return num1
}
// console.log(addShoppingcart(1,2,34,50))
