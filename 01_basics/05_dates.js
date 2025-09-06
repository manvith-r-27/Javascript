let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())

let myCreatedDate = new Date(2025,2,27)
console.log(myCreatedDate.toDateString())

let mytimeStamp = Date.now();
console.log(mytimeStamp);
console.log(myCreatedDate.getTime())

//to make our own customization

myCreatedDate.toLocaleDateString('defaut',{
    weekday:"long",
    
});
console.log(myCreatedDate)