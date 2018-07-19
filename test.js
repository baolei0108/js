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

var data = [
    {
        id: 1,
        name: 'luoxue',
        age: 25
    },
    {
        id: 2,
        name: 'kk',
        age: 22
    },
    {
        id: 3,
        name: 'qiuxia',
        age: 22
    }
];

console.log(JSON.stringify(data)); //转换成字符串
console.log(JSON.parse(JSON.stringify(data)));  //转换成对象
var myData = JSON.parse(JSON.stringify(data)); // 我家的
var yourData = JSON.parse(JSON.stringify(data)); // 你家的
yourData[0].name = 'kk-z'; // 你名字带走
myData[0].name = 'my-name';
console.log(yourData[0].name);
console.log(myData[0].name);
console.log(data[0].name); // luoxue
