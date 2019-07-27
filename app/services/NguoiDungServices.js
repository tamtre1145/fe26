function NguoiDungServices() {
    this.layThongTinNguoiDung = function() {
            return $.ajax({
                    url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
                    type: "GET"
                })
                // .done(function(result) {
                //     console.log(result);
                //     return result;
                // })
                // .fail(function(err) {
                //     console.log(err)
                // });

        }
        // them nguoi dung
    this.themNguoiDung = function(nguoiDungMoi) {
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST",
            data: nguoiDungMoi,
        })
    }
    this.xoaNguoiDung = function(id) {
        return $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${id}`,
            type: "DELETE",

        })
    }
}