/**
 * const,letなどの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書きが可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // constは上書き不可
// val3 = "const変数を上書き";

// // constは再宣言不可能
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "しょう",
//   age: 27
// };
// console.log(val4);
// val4.name = "sho";
// val4.address = "hyogo";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);



/**
 * テンプレート文字列 ``
 */
// const name = "しょう";
// const age = 27;

// // 「私の名前はしょうです。年齢は27歳です。」
// // 従来の方法
// // const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// // console.log(message1);
// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);



/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// }
// console.log(func1("func1です"));

// アロー関数
// const func2 = str => str
// console.log(func2("func2です"));

// 2つの引数を受け取って、それを足し算して返す関数
// const addition = (num1, num2) => {
//   return num1 + num2;
// }
// const addition = (num1, num2) => num1 + num2;
// オブジェクトを返したい時は()でくくる
// const addition = (num1, num2) => ({
//   hoge: num1,
//   huga: num2,
// });
// console.log(addition(100,20));



/**
 * 分割代入
 */
// const myProfile = {
//   name: "しょう",
//   age: 27,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["しょう", 27];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const myProfile = ["しょう", 27];
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);



/**
 * デフォルト値（引数, 分割代入）
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("しょう");

// const myProfile = {
//   age: 27
// };
// const { age, name = "ゲスト" } = myProfile;
// console.log(age);
// console.log(name);



/**
 * オブジェクトの省略記法
 */
// const name = "しょう";
// const age = 27;

// const myProfile = { name, age };
// console.log(myProfile);



/**
 * スプレッド構文 ...
 */

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// 全く新しい配列を生成
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5]
// console.log(arr7);

// const arr8 = [...arr4];
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);



/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["松尾", "三好", "松原"];

// 従来のループ処理
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// mapを使った方法 （①ループ処理）
// nameArr.map((name) => {
//   console.log(name);
// })
// 省略
// nameArr.map(name => console.log(name));

// mapを使った方法 （②配列に処理を加えて新しい配列を生成）
// const hello = nameArr.map((name) => {
//   return `こんにちは${name}さん`;
// })
// console.log(hello);

// filterを使った方法（ループ処理しながら条件に合うものを抽出）
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const nameArr = ["松尾", "三好", "松原"];

// 従来のループ処理
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }
// nameArr.map((name, index) => console.log(`${index + 1}番目は${nameArr[index]}です`));


// 松原以外の名前には「さん」をつけて表示する
// const newArr = nameArr.map((name) => {
//   if (name !== "松原") {
//     return `${name}さん`;
//   } else {
//     return name;
//   }
// })
// console.log(newArr);



/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 2 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// }
// console.log(checkSum(40,500));



/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// truthy, falsyについて
// const val = "";
// if (val) {
//   console.log('truthy');
// } else {
//   console.log('falsy');
// }
// const isTruthy = val ? "truthy" : "falsy";
// console.log(isTruthy);

// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がtruthyの時、その時点で返却する
// const num = 'aaa';
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がfalsyの時、その時点で返却する
// const num2 = "aaa";
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
