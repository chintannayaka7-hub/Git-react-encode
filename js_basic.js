// console.log("Hello, encode");

// console,log(" the namee " , namee , "and" , age , )
// console.log(`my namee is ${namee} and age is ${age}`)

// let newStr = `my namee is ${namee} and age is ${age}`
// console.log("newSter : " , newStr) 

 let helllo = function(){

    console.log("hello");
 }
 console.log(helllo())
let obj = {
    namee : "chintan",
    surnamee : "nayaka",
    fun : () => {
        console.log("kemcho")
    }
}
let obj1 = {
    namee : "Black",
    surnamee : "clover"

}
let arr = [obj ,obj1]
console.log(arr[0].namee)
// obj.fun()

 let {namee} = obj1
 console.log(namee)