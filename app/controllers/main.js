$(document).ready(function() {

    var danhSachNguoiDung = [];
    var nguoiDungServices = new NguoiDungServices();
    var ajaxDanhSachNguoiDung = nguoiDungServices.layThongTinNguoiDung();

    ajaxDanhSachNguoiDung
        .done(function(result) {
            // console.log(result);
            danhSachNguoiDung = result;
            console.log(danhSachNguoiDung);
            // luu vao local stronge
            HienThi(danhSachNguoiDung);
        })
        .fail(function(err) {
            console.log(err)
        });
    // danhSachNguoiDung.map(function(nguoiDungServices) {
    //     content += `
    //         <tr>
    //         <td>${nguoiDungServices.maND}</td>
    //         <td>${nguoiDungServices.MatKhau}</td>
    //         <td>${nguoiDungServices.HoTen}</td>        
    //         <td>${nguoiDungServices.email}</td>
    //         <td>${nguoiDungServices.sdt}</td>

    //         `
    // })
    function HienThi(mangHienThi) {
        var tableDanhSach = $("#tblDanhSachNguoiDung");
        var content = "";
        mangHienThi.map(function(nguoiDungServices, index) {
            content += `
                    <tr>
                    <td>${index+1}</td>
                    <td>${nguoiDungServices.TaiKhoan}</td>
                    <td>${nguoiDungServices.MatKhau}</td>        
                    <td>${nguoiDungServices.HoTen}</td>
                    <td>${nguoiDungServices.Email}</td>
                    <td>${nguoiDungServices.SoDT}</td>
                    <td>${nguoiDungServices.MaLoaiNguoiDung}</td>
                    <td><button class="btn btn-danger btnXoaNguoiDung" data-id="${nguoiDungServices.TaiKhoan}">Xoá</button></td>
                    `
        })

        tableDanhSach.html(content)
    }

    $("#btnThemNguoiDung").click(function() {
        $("#modal-title").html("Thêm người dùng mới");
        var btn = `
    <button class="btn btn-sucess" id="btnThem">Thêm người dùng</button>
    `;
        $("#modal-footer").html(btn);
    })
    $("body").delegate("#btnThem", "click", function() {
        // console.log("run");
        // lay thong tin
        var taiKhoan = $("#TaiKhoan").val();
        var matKhau = $("#MatKhau").val();
        var hoTen = $("#HoTen").val();
        var email = $("#Email").val();
        var sdt = $("#SoDienThoai").val();
        var maloai = $("#maLoaiNguoiDung").val();

        // Tao doi tuong
        var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, sdt, maloai);
        console.log(nguoiDung);
        // them vao database
        nguoiDungServices.themNguoiDung(nguoiDung)
            .done(function(result) {
                console.log(result);
                location.reload();
            })
            .fail(function(err) {
                console.log(err);
            })
    })
    $("body").delegate(".btnXoaNguoiDung", "click", function() {
        var taiKhoan = $(this).data("id");
        console.log(taiKhoan);
        nguoiDungServices.xoaNguoiDung(taiKhoan)
            .done(function(result) {
                console.log(result);
                location.reload();
            })
            .fail(function(err) {
                console.log(err);
            })
    })
})