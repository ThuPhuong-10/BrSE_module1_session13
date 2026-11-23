// khai báo mảng số nguyên có sẵn các phần tử từ 10 đến 20 phần tử,
// thực hiện nhập vào một số nguyên để kiểm tra (k), 
// thực hiện đếm số lần xuất hiện của k trong mảng. và hiển thị ra màn hình

let arr = [];
let length = Math.floor(Math.random() * 10) + 10;
for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
}
console.log(arr);

let input = +prompt('Nhập số cần kiểm tra');
let count = 0;
for (let number of arr) {
    if (number === input) {
        count++;
    }
}
console.log(`Số lần xuất hiện của ${input} là ${count} lần`);
