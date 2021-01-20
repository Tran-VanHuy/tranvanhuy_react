let str = 'Nguyễn An Huy Hoàng';

let array = str.split(' '); // chuyển chuối thành mảng

let obj = {

    Ho: array[0],
    TenDem: array.splice(1, array.length - 2).join(' '), 
    Ten: array.pop()
}

console.log(obj);

