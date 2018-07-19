//打开call.html网页来进行查看call.js的运行效果
//主要介绍call、apply、bind的区别，都是改变this的指向，从而扩大函数作用域，用法function.call(object)，同
var name = '小王',age = 17;
var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function(){
        console.log(this.name + '年龄' + this.age);
        return true;
    },
    myFun2: function(fm, ft) {
        console.log('来自' + fm + ',去往' + ft);
        return true;
    }
}

console.log(obj.objAge); //17
console.log(obj.myFun);  //function myFun


var db = {
    name:'马德',
    age:99
}
console.log(obj.myFun);
console.log(obj.myFun.call(db)); //马德年龄99
console.log(obj.myFun.apply(db));  //马德年龄99
console.log(obj.myFun.bind(db)());  //马德年龄99

//bind返回的是一个函数，必须加()然后调用它


console.log(obj.myFun2.call(db,'天津','上海'));
console.log(obj.myFun2.apply(db,['天津','上海']));  //apply的参数方式是传入一个数组
console.log(obj.myFun2.bind(db,'天津','上海')());  //bind的传参方式跟call一样，参数分开

