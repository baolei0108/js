//var data = new Date();

//console.log('11');
//console.log(data);


//console.log(new Date(new Date().getTime() - 1 * 60 * 60 * 1000));

// var str = "2018-07-18 13:17:48.558";
// var newdate = new Date(str);
//console.log(newdate);

//console.log(new Date(new Date(str).getTime() + 1 * 60 * 60 * 1000));

//console.log(new Date(newdate.setHours(newdate.getHours() - 1)));

// for (var i = 0; i <= 5; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i);
//         }, 1000);
//     })(i);

// }
 
//console.log(i);//最先执行


// for(var i=1;i<=5;i++) {
//     var doc = document.createElement('button');
//     doc.innerHTML=i;

//     doc.onclick = function(x) {
//         return function(){
//             console.log(x);
//         }

//     }(i);

//     document.body.appendChild(doc);
// }

// var data = [
//     {
//         id: 1,
//         name: 'luoxue',
//         age: 25
//     },
//     {
//         id: 2,
//         name: 'kk',
//         age: 22
//     },
//     {
//         id: 3,
//         name: 'qiuxia',
//         age: 22
//     }
// ];

// console.log(JSON.stringify(data)); //转换成字符串
// console.log(JSON.parse(JSON.stringify(data)));  //转换成对象
// var myData = JSON.parse(JSON.stringify(data)); // 我家的
// var yourData = JSON.parse(JSON.stringify(data)); // 你家的
// yourData[0].name = 'kk-z'; // 你名字带走
// myData[0].name = 'my-name';
// console.log(yourData[0].name);
// console.log(myData[0].name);
// console.log(data[0].name); // luoxue


// console.log(a);  //undefined

// var a = 'qianwen';
// console.log(a);  //qianwen
  
// function fn() {
//     console.log(a);//undefined

//     var a = '美女';
//     console.log(a); //美女
// }

// fn();



// console.log(a);
// fn();
// fun2();

// var a = 'aaa';
// function fn() {
//     console.log('this is fn');
// }

// var fun2 = function() {
//     console.log('this is fn2');
// }

// console.log(a);
// fn();

//等同于
// var a;
// function fn() {
//     console.log('this is fn');
// }
// console.log(a);
// fn();
// a = 'aaa';
// console.log(a);
// fn();


// {
//     var a = 1;
//     console.log(a); // 1
// }
// console.log(a); // 1

// (function A() {
//     var b = 2;
//     console.log(b); // 2
// })();

// function A() {
//     var b = 2;

// }
//  console.log(b); // 报错，

// var a;
// const a;
// console.log(a);



// function a() {
//     var i=0;
//     function b() {
//         console.log(++i);
//         console.log(this.i);
//     }

//     return b;
// }
// var c=a();
// c();
// c();
// c();



var name = 'Tony';
var tpl = {
    name: 'Lily',
    student1:function() {
        var student2 = function() {
            console.log(this.name);
        }

        //return student2();  //Tony
        return student2.call(tpl);  //Lily

    }
}

tpl.student1(); 