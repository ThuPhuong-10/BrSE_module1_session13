//nhập dãy số bất kỳ, chuyển dữ liệu từ string -> array, duyệt array, xuất ra số lớn nhất
let arr = prompt('Nhập dãy số bất kỳ').split('');
let max = Number(arr[0]);
for (let item of arr) {
    if (max < Number(item)) { 
        max = Number(item);
    }
}
alert(`Giá trị lớn nhất trong dãy là: ${max}`);
