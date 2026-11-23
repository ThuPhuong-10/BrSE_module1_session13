// khai báo mảng số nguyên 10 đến 20 phần tử ngẫu nhiên, thực hiện:
// Tính tổng các số lẻ và hiển thị ra màn hình bằng alert()
// Tính tổng các số chẵn và hiển thị ra màn hình alert()

let arr = [];
let length = Math.floor(Math.random() * 11) + 10;
for (let i = 1; i < length; i++) {
  arr.push(Math.floor(Math.random() * 10) + 1);
}
console.log(arr);


let total1 = 0;
let total2 = 0;
let newArr1 = [];
let newArr2 = [];
for (let i = 0; i < arr.length; i++) {   //có thể dùng for (let number of arr)
    if (arr[i] % 2 !== 0) {
        total1 += arr[i];
        newArr1.push(arr[i]);
    } else {
        total2 += arr[i];
        newArr2.push(arr[i]);
    }
}
console.log('Các số lẻ có trong mảng là: ', newArr1);
console.log(`Tổng các số lẻ trong mảng = ${total1}`);

console.log('Các số chẵn có trong mảng là: ', newArr2);
console.log(`Tổng các số chẵn trong mảng = ${total2}`);
