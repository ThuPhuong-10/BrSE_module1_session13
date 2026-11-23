// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let input = +prompt("Nhập số cần kiểm tra");
// let hasNumber = false;

// for (let i = 0; i < arr.length; i++) {
// if (arr[i] === input) {
//     hasNumber=true;
// }
// }
// if (hasNumber) {
//     alert('Bingo!');
// } else {
//     alert('Chúc bạn may mắn lần sau!');
// }

let arr=[1, 2, 3, 4, 5, 6];
let input=+prompt('nhập số cần kiểm tra');

if (arr.includes(input)) {
    alert('Bingo!');
} else {
    alert('Sai rồi!');
}