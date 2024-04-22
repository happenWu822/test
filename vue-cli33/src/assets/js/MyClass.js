// 原型链继承
// function parent(){
//     this.name = "parent";
// }
// parent.prototype.say = function() {
//     console.log("my name is " + this.name);
// }
// function Children() {
//     this.name = 'children'
// }
// Children.prototype = new parent();
// var child = new Children()
// console.log(child.name)
// child.say();
// new parent().say()
// parent.prototype.say = function() {
//     console.log("change")
// }
// parent.prototype.name = "asd"
// child.say();
// console.log(child.name)
// new parent().say()
// var child2 = new Children()
// console.log(child2.name)
// child2.say();
// new parent().say()

// es6class继承
// class Father {
//     constructor(option) {
//         this.name = option.name;
//         this.asd = 1;
//     }
//     say() {
//         console.log(this.name)
//     }
// }

// class Son extends Father {
//     constructor(option) {
//         super(option);
//     }
// }

// var son = new Son({name: 'happen'})
// console.log(son.name);
// son.say();
// Father.prototype.say = function() {
//     console.log(this.asd);
// }
// console.log(son.name);
// son.say();

// 组合式继承
function parent(name) {
console.log(name);
this.name = name;
}
parent.prototype.say = function() {
    console.log('1');
}
function Child(name) {
    parent.call(this, name);
    this.age = 100;
}
Child.prototype = new parent('2');

var chi = new Child('Child');
console.log(chi);