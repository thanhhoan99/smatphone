// var giohang = new Array();

// function themvaogiohang(x) {
//     var boxsp = x.parentElement.children;
//     var hinh = boxsp[0].children[0].src;
//     var gia = boxsp[1].children[0].innerText;
//     var tensp = boxsp[2].innerText;
//     var soluong = boxsp[3].value;
//     var sp = new Array(hinh, gia, tensp, soluong);

//     giohang.push(sp);

//     console.log(giohang);
//     showcountsp();

// }

// function showcountsp() {
//     document.getElementById("countsp").innerHTML = giohang.length;
// }


var giohang = new Array();

function themvaogiohang(x) {
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    var gia = boxsp[1].children[0].innerText;
    var tensp = boxsp[2].innerText;
    var soluong = boxsp[3].value;
    var sp = new Array(hinh, gia, tensp, soluong);

    giohang.push(sp);

    // console.log(giohang);
    showcountsp();

    sessionStorage.setItem("giohang",JSON.stringify(giohang));
}

function showcountsp() {
    document.getElementById("countsp").innerHTML = giohang.length;
}

function showmycart() {
  var ttgh= "";
  var tong=0;
  for (let i = 0; i < giohang.length; i++) {
    var tt =parseFloat(giohang[i][1]) * parseFloat(giohang[i][3]);
    tong +=tt;
    ttgh+= '<tr>' +
    '<td>' +(i+1) +'</td>' +
    '<td><img src="'+ giohang[i][0]+'" alt=""></td>'+
    '<td>'+giohang[i][2]+'</td>' +
    '<td>'+giohang[i][1]+'</td>' +
    '<td>'+giohang[i][3]+'</td>' +
    '<td>' +
        '<div>'+tt+'</div>' +
    '</td>'+
    '</tr>';
  }
    ttgh+= '<tr>'+
   ' <th colspan="5">Sum</th>'+
    '<th>' +
      '<div>'+tong    +'</div>' +
    '</th>' +
    '</tr> ';
document.getElementById("mycart").innerHTML =ttgh;

  }



        function showcart()
        {
          var x=  document.getElementById("showcart")
          if( x.style.display=="block"  )
          {
              x.style.display ="none";
          }else{
              x.style.display="block";
              showmycart();

            }

        }



        function showgiohang_thanhtoan()
        {
          var gh=sessionStorage.getItem("giohang");
          var giohang= JSON.parse(gh);

          var ttgh= "";
          var tong=0;
          for (let i = 0; i < giohang.length; i++) {
            var tt =parseFloat(giohang[i][1]) * parseFloat(giohang[i][3]);
            tong +=tt;
            ttgh+= '<tr>' +
            '<td>' +(i+1) +'</td>' +
            '<td><img src="'+ giohang[i][0]+'" alt=""></td>'+
            '<td>'+giohang[i][2]+'</td>' +
            '<td>'+giohang[i][1]+'</td>' +
            '<td>'+giohang[i][3]+'</td>' +
            '<td>' +
                '<div>'+tt+'</div>' +
            '</td>'+
            '</tr>';
          }
            ttgh+= '<tr>'+
           ' <th colspan="5">Sum</th>'+
            '<th>' +
              '<div> '+tong+'</div>' +
            '</th>' +
            '</tr> ';
        document.getElementById("mycart").innerHTML =ttgh;


        }

        function dongydathang()
        {
          var ttnh= document.getElementById("thongtinnhanhang").children;
          var hoten=ttnh[0].children[1].children[0].value;
          var diachi=ttnh[1].children[1].children[0].value;
          var dt=ttnh[2].children[1].children[0].value;
          var email=ttnh[3].children[1].children[0].value;


          var nguoinhan=new Array(hoten,diachi,dt,email);

          var hoten = document.getElementById("hoten").value;
          var diachi = document.getElementById("diachi").value;
          var dt=document.getElementById("dt").value;
          var email=document.getElementById("email").value;

           if( hoten== "") {
            alert("Please enter a name!");
            return false;
                 }
              if(diachi == "") {
         alert("Please enter an address!");
          return false;
            }

            if(dt == "") {
              alert("Please enter SDT!");
               return false;
                 }
            else if(isNaN(dt)==true){
                alert("Invalid SDT");

                return false;
              }

            re=/\w+@\w+\.\w+/;
            if (email==""){
              alert("You have not entered email") ;

              return false
            }
            else
              if(re.test(email)==false){
                alert("Invalid email format!");

                return false
              }



          console.log(nguoinhan);
          sessionStorage.setItem("nguoinhan",JSON.stringify(nguoinhan));

          //chuyển đến trang
          window.location.assign("sanpham/donhang.html");
        }

        function showthongtinnguoinhan()

        {

          var nguoinhan= sessionStorage.getItem("nguoinhan");
          var thongtin=JSON.parse(nguoinhan);
          var tt='<tr>'+
          '<td ">Name</td>'+
         ' <td>'+thongtin[0] +'</td>'+
         ' </tr>'+
          '<tr>'+
          '<td>Address</td>'+
         ' <td>'+thongtin[1] +'</td>'+
         '</tr>'+
         '<tr>'+
          '<td>Phone</td>'+
          ' <td>'+thongtin[2] +'</td>'+
         '</tr>'+
         '<tr>'+
          '<td>Email</td>'+
          '<td>'+thongtin[3] +'</td>'+
          '</tr> ';

          document.getElementById("thongtinnhanhang").innerHTML =tt;
        }


