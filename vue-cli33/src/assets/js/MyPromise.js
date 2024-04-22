// // class MyPromise {
// //     #state = 'pending';
// //     constructor(fun) {
// //         this.
// //     }
// // }

// // const { reject } = require("core-js/fn/promise");

// // const { resolve, reject } = require("core-js/fn/promise");
var asd = true;
var a = new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log(111);
        if (asd) {
            resolve({a:1})
        } else {
            reject({b:2})
        }
    }, 5000)
})
a.then(function(obj) {
    console.log(obj,0);
    return obj
},function(err){
    console.log(err,1);
    // console.log(agg,1);
    // return new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //         if (asd) {
    //             resolve();
    //         } else {
    //             reject({aa:1});
    //         }
    //     },1000)
    // })
}).then(function(obj1) {
    console.log(obj1,11);
},function(err1) {
    console.log(err1,100);
}).catch(function(err) {
    console.log(err,333);
})
// function p1(){
//     var promise1 = new Promise(function(resolve,reject){
//         console.log("p1的第一条输出语句");
//         console.log("p1的第二条输出语句");
//         resolve("p1完成");
//     })
//     return promise1;
// }
 
// function p2(){
//     var promise2 = new Promise(function(resolve,reject){
//         console.log("p2的第一条输出语句");
//         setTimeout(()=>{console.log("p2的第二条输出语句");resolve("p2完成")},2000);
 
//     })
//     return promise2;
// }
 
// function p3(){
//     var promise3 = new Promise(function(resolve,reject){
//         console.log("p3的第一条输出语句");
//         console.log("p3的第二条输出语句");
//         resolve("p3完成")
//     });
//     return  promise3;
// }
 
// Promise.race([p1(),p3(),p2()]).then(function(data){
//     console.log(data);
// },function(err) {
//     console.log(err);
// })