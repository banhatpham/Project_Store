var pi = 3.4;
console.log(pi.toFixed());
var g = 'Mr Dev';
console.log(g);
console.log(g.length);

// lam việc mảng Array
var Ad = 10;
var B = 'FE';
var C = 'ASP';
var Ab = [
    'PHP',
    'FE',
    'ASP-net',
];
// console.log(A.length)
// var A = new Array('PHP','FE','ASP','abc');
// console.log(Array.isArray(A));
// console.log(new Array(A));


//truy xuất mảng
// console.log(A[2]);
// Những phương thức dùng Array
// 1. to String
console.log(Ab.toString());
// 2/JOIN
console.log(Ab.join(' - '));
// 3 POP XÓA CÁC PHẦN TỬ cuối mảng và trả lại các phần tử mà nó xoá
console.log(Ab.pop());
//push thêm 1 hoặc nhiều phần tử và cuối mảng  và trả về độ dài của mảng
console.log(Ab.push('Java'));

//shift xóa phần tử ở đầu mảng và trả về phần tử ở đầu mảng
console.log(Ab.shift ());
// unshift giống push nhưng khác thêm 1 hoặc nhiều phần tử vào đầu mảng

console.log(Ab.unshift('NHAT','DEV'));
//SPLICING CÓ THỂ CẮT CHÈN MỚI CÁC PHẦN TỬ VÀO MẢNG

// console.log(Ab.splice());
console.log(Ab.splice(1,0,'ABC','QE',567));

console.log(Ab);

//CONCAT nối cacs array
var NHAT = ['Name','age','FE','TTS']
// var Dev = ['FE','TTS']
// console.log(Dev.concat(NHAT))
//slicing cắt 1 phần tử hoặc toàn bộ
console.log(NHAT.slice(1,2))


// cho dãy số 2-20 
var cd = [2,3,4,5,6,7,8,9,10]
// 1.lấy một phần tử bất kỳ trong mảng
console.log(typeof cd.toString(10))
var convert = 10;
console.log(typeof convert.toString());
// 2.lấy phần tử từ vị trí 4-8
console.log(cd.slice(4,8))
// 3.thêm phần tử 'abc' vào đầu mảng
console.log(cd.unshift('cat'))
console.log(cd)
// 4.cho mảng B CÓ GIÁ TRỊ TỪ A -F VÀ nối với mảng đã tạo từu trước
var ef = [ 'a','b','c','d']
console.log(ef.concat(cd))
// 5.chèn 'nhat' vào giữa mảng
console.log(cd.splice(6,0,'Nhat'))
console.log(cd)

//hàm 
//khối hàm 
// alert('say hello mr dev')
// function nhat(){ ///đinh nghĩa khối hàm
//     alert('say hello mr dev');
// }
// nhat();
// function showlog(firtsName,LastName){
//        console.log(firtsName,LastName)
//        function showlog2(){
//         console.log( arguments)
//         }
//         showlog2('18 tuổi','1999') //truyền bất kỳ thàm só kiểu dữ liệu gì vào cũng đượcs
        
// }
// showlog('Phạm','Nhật');


// function showlog(){
//         var myinfo = '';
//         for(var param of arguments){
//                 myinfo += `${param} - `
//         }
//         console.log(myinfo);
// }
// showlog('Nhật','18 tuổi','Sinh Năm 1999');
// confirm('ok')
// var isConfirm = confirm('ok lần 2');
// console.log(isConfirm)
// function cong(a,b){
//         return a + b ; 
//         confirm('ok')
//         var isConfirm = confirm('ok lần 2');
// }
// var ketqua = cong(5,10);
// console.log(ketqua)
// cho giá trị client và admin sau đó xuất giá trị tương ứng với admin tên là 
//Mr Dev với số tuổi 30 còn Client Nguyễn Văn A tuổi 20
// tính tổng số tuổi hai người
// function info(){
//     var userinfo = '';
//     for(var param of arguments){
//         userinfo += `${param} - `
//     }
//          console.log(userinfo)
//     function sumAge(a,b){
//         return a + b;
//     }
//     var result = sumAge(30,20)
//     console.log(result)
// }
// info('Mr Dev',30,'Nguyen A',20)

//tẠO GIỎ HÀNG VỚI SẢN PHẨM CÓ 1 ÁO THUN (45K) 1 QUẦN JEAN (55K)
//VÀ THÔNG TIN CỦA KHÁCH HÀNG LÀ NGUYỄN THỊ ANH GIÁ TIỀN TANH TOÁN TOTAL AMOUNT 100K
function shoppingCart(){
    var userinfo = '';
    for(var param of arguments){
        userinfo +=`${param} - `
    }
    console.log(userinfo)
    console.log(typeof userinfo)
    function sumPrice(ao,quan){
        return ao + quan;
    }
    var price = sumPrice(45,55)
    console.log(price)
}
shoppingCart('Nguyen Thi Anh', 'Ao thun 45K','Quan Jeans 55k')

//CÁC LOẠI HÀM GÌ 
//1.DECLARATION FUNTCION
function showlogN(){
   console.log('DECLARATION FUNCTION')
}
showlogN()
// setTimeout(Function(){

// });
// var Object = {
//     myfunction : function(){}
// }
//2.Expression funtion
var showlogN= function(){
    console.log('Expression FUNCTION')
}
showlogN()

//tao đối tượng dữ liệu value cho 1 function
var userinfo = {
    Name : 'Nhật', //thuộc tính /property
    age : '18+',
    DayofB : '1999',
    getGioitinh : function(){ ////phương thức /method
        return this.getGioitinh;
    }
}
console.log(userinfo.getGioitinh());

//Xây dựng cấu trúc đối tượng  (object contruction)
function UserName(firtsName,LastName,Gioitinh){
    this.firtsName = firtsName;
    this.LastName = LastName;
    this.Gioitinh = Gioitinh;
    this.FullName = function(){
        return `${this.firtsName} ${this.LastName} `;
    }
}

var Useradmin = new UserName('Mr','Dev','Nam');
var UserClient = new UserName('Mr','Nhật','Gay');
Useradmin.avatar = 'avatar';
UserClient.Comment = 'Khách hàng có thẻ comments';

console.log(Useradmin.abc);
console.log(Useradmin);
console.log(UserClient);
console.log(Useradmin.FullName());
console.log(UserClient.FullName());
// propertype hàm tạo ra dữ liệu bên ngoài 
// Useradmin.prototype.abc = 'Giám Đốc';
// 