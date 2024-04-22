var a = document.getElementById('container').clientWidth


console.log(a,'--------------------------')
var b = {
    a: {
        aa: {
            t: this,
            d: ()=> {
                console.log(this)
            },
            c: function() {
                console.log(this)

            }
        }
    }
}

console.log(b.a.aa.d(),11111)
console.log(b.a.aa.c())
console.log(b)

console.log('--------------------------')

//
let arr = [1,2,3,4,5,6,7]
for(let i = 0;i<arr.length;i++){ // 遍历数组
  console.log(arr[i])
  if(i === 3){
    break; // 可跳出循环体！！！
  }
}
console.log('--------------------------')


//任何对象都继承了Object对象，或者其它对象，继承的类的属性是默认不可遍历的，
//for... in循环遍历的时候会跳过，但是这个属性是可以更改为可以遍历的，那么就会造成遍历到不属于自身的属性。
// 结合使用hasOwnProperty方法，在循环内部判断一下，某个属性是否为对象自身的属性。否则就可以产生遍历失真的情况。
function A() {
    this.a = 1;
}
A.prototype.b = 2
var obj = new A();
for(let key in obj){ // 遍历对象或者数组，基本不用数组，对于数组来说key就是index！！！！！break 也可以跳出循环体
    console.log(obj[key],111)
    if(obj.hasOwnProperty(key)){
        console.log(obj[key])
    }
}

for(let key in arr){ // 遍历对象！！！！！break 也可以跳出循环体
    console.log(key,arr[key],'--')
}
console.log('--------------------------')

// 遍历数组！！！
// 不可中断
// 把原数组的所有值放入函数中执行，生成新的数组！！！！
let arr2 = [1,2,3,4,5]
let arr3 = arr2.map((value,index,arr2)=>{// value代表值，index代表下标、arr2为原数组
    // console.log(n,a,b,'==') // [2,3,4,5,6]
    return value+1
})
console.log(arr3) // [2,3,4,5,6]
console.log(arr2) // [1,2,3,4,5]
console.log('--------------------------')


// 1、forEach的使用方法和map使用方法差不多,
// 2、不可中断
// 3、forEach方法不返回值不一定能改变原数组，
//   3.1基本类型不可改变，引用类型能改变，因为操作的时候是改变真实值，而访问的时候是使用引用值，
//   3.2正因为引用值没有改变，所以才能访问到改变了的真实值！！！！
let arrObj = [{
    id: 1,
    name: 'xiaohua'
},{
    id:2,
    name: 'xiaomin'
},{
    id:3,
    name: 'xiaobai'
}]
arrObj.forEach((item,index,arr)=>{
    item.index = index;
    console.log(item.name) // xiaohua xiaomin xiaobai
})
console.log(arrObj)
console.log('--------------------------')

arr.forEach((item,index,arr)=>{
    item = item + 1
    console.log(item) // xiaohua xiaomin xiaobai
})
console.log(arr)
console.log('--------------------------')

// filter方法用于过滤数组成员，满足条件的成员组成一个新数组返回。新数组！！！！
// 它的参数是一个函数，所有数组成员依次执行该函数，返回结果为true的成员组成一个新数组返回。
// 该方法不会改变原数组。
// let arrObj = [{
//     id: 1,
//     name: 'xiaohua'
// },{
//     id:2,
//     name: 'xiaomin'
// },{
//     id:3,
//     name: 'xiaobai'
// }]
// let arr2 = arrObj.filter((item,index,arr)=>{
//     return (item.name === 'xiaohua')
// })
// console.log(arr2)  // [{id:1,name:'xiaohua}]
