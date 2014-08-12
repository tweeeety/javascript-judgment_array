(function(){
/****************
 sample01
****************/
console.log("----sample01");
/*
function isArray(o){
  return o != null && typeof o === "object" && 'pop' in o && 'join' in o;
}

var a = {};
var b = [];
var c = 1;
var d = "string";
var e = false;
var f = undefined;
var g = null;

console.log(isArray(a)); // 結果-> false
console.log(isArray(b)); // 結果-> true
console.log(isArray(c)); // 結果-> false
console.log(isArray(d)); // 結果-> false
console.log(isArray(e)); // 結果-> false
console.log(isArray(f)); // 結果-> false
console.log(isArray(g)); // 結果-> false
*/

/****************
 sample02
****************/
console.log("----sample02");

function callToString(o){
  return Object.prototype.toString.call(o);
}

function isArray(o){
  return Object.prototype.toString.call(o) === '[object Array]';
}

var a = {};
var b = [];
var c = 1;
var d = "string";
var e = false;
var f = undefined;
var g = null;

// toStringの結果も表示してみる
console.log(callToString(a)); // 結果-> [object Object] 
console.log(callToString(b)); // 結果-> [object Array] 
console.log(callToString(c)); // 結果-> [object Number] 
console.log(callToString(d)); // 結果-> [object String] 
console.log(callToString(e)); // 結果-> [object Boolean] 
console.log(callToString(f)); // 結果-> [object Undefined] 
console.log(callToString(g)); // 結果-> [object Null] 

// 判定
console.log(isArray(a)); // 結果-> false
console.log(isArray(b)); // 結果-> true
console.log(isArray(c)); // 結果-> false
console.log(isArray(d)); // 結果-> false
console.log(isArray(e)); // 結果-> false
console.log(isArray(f)); // 結果-> false
console.log(isArray(g)); // 結果-> false


/****************
 sample03
****************/
console.log("----sample03");

function callGetPrototypeOf(o){
  return ( o != null && typeof o === 'object') ? Object.getPrototypeOf( o ) : 'non-object';
}

function isArray(o){
  return ( o != null && typeof o === 'object') ? Object.getPrototypeOf(o) === Array.prototype : false;
}

var a = {};
var b = [];
var c = 1;
var d = "string";
var e = false;
var f = undefined;
var g = null;

// とりあえずgetPrototypeOfの値を出力してみる
console.log(callGetPrototypeOf(a)); // 結果-> Object {} 
console.log(callGetPrototypeOf(b)); // 結果-> []
console.log(callGetPrototypeOf(c)); // 結果-> 'non-object'
console.log(callGetPrototypeOf(d)); // 結果-> 'non-object'
console.log(callGetPrototypeOf(e)); // 結果-> 'non-object'
console.log(callGetPrototypeOf(f)); // 結果-> 'non-object'
console.log(callGetPrototypeOf(g)); // 結果-> 'non-object'

// 判定
console.log(isArray(a)); // 結果-> false
console.log(isArray(b)); // 結果-> true
console.log(isArray(c)); // 結果-> false
console.log(isArray(d)); // 結果-> false
console.log(isArray(e)); // 結果-> false
console.log(isArray(f)); // 結果-> false
console.log(isArray(g)); // 結果-> false

/****************
 sample04
****************/
console.log("----sample04");

function isArray(o){
  return o instanceof Array;
}
var a = {};
var b = [];
var c = 1;
var d = "string";
var e = false;
var f = undefined;
var g = null;

console.log(isArray(a)); // 結果-> false
console.log(isArray(b)); // 結果-> true
console.log(isArray(c)); // 結果-> false
console.log(isArray(d)); // 結果-> false
console.log(isArray(e)); // 結果-> false
console.log(isArray(f)); // 結果-> false
console.log(isArray(g)); // 結果-> false

/****************
 sample05
****************/
console.log("----sample05");

/* 
 * iframe内のarr instanceof Array 
 */
// iframeを作成
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);

// iframe内のプリミティブArray
var OtherArray = window.frames[0].Array;

// iframe内のプリミティブArrayからarrを作成
var arr = new OtherArray(1,2,3); // [1,2,3]  

// 結果
console.log( arr instanceof Array ); // 結果-> false

/* 
 * arr instanceof iframe内のArray 
 */
// 通常通りの配列
var arr2 = [1,2,3];

// 結果
console.log( arr2 instanceof window.frames[0].Array);

})();


