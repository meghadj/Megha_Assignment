// Methods in array

//Array.fill()

let arr1=Array(8).fill("A")
console.log(arr1)

let arr2=[1,2,3,4].fill("B")
console.log(arr2)


//concat()

let new_array= arr1.concat(arr2)
console.log(new_array)

//indexOf()==> search

let FrontEnd=["HTML","CSS","JAVASCRIPT","NODEJS","REACTJS"]
let str="Maven"

console.log(FrontEnd.indexOf('JAVASCRIPT'))

//includes()==> search

console.log(FrontEnd.includes('REACTJS'))

//isArray()==> check whether it is array or not

console.log(Array.isArray(str))
console.log(Array.isArray(FrontEnd))

//toString()==> to convert array to string

console.log(FrontEnd.toString())

console.log(FrontEnd.join('/'))

//Methods to add elements to existing array

FrontEnd[FrontEnd.length]="VueJS" //at the end
console.log(FrontEnd)

FrontEnd[5]='JQuery' // at the particular index
console.log(FrontEnd) 

FrontEnd.push('VenilaJS')  //at the end
console.log(FrontEnd)

FrontEnd.unshift('Bootstrap') //at the begining
console.log(FrontEnd)











