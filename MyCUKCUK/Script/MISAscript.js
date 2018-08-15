$(".password-status").hide();
$(".username-status").hide();
$("#lang-selector").val("vietnamese");

$("#lang-selector").change(function () {
    if ($("#lang-selector").val() === "english") {
        $("#login-title").text("login cukcuk.vn");
        $("#login-buttonID").val("LOGIN");
    }
    else if ($("#lang-selector").val() === "vietnamese") {
        $("#login-title").text("đăng nhập cukcuk.vn");
        $("#login-buttonID").val("ĐĂNG NHẬP");
    }
    else {
        $("#login-title").text("einloggen cukcuk.vn");
        $("#login-buttonID").val("EINLOGGEN");
    }
})

$("#login-buttonID").click(function () {
    $(".password-status").hide();
    $(".username-status").hide();

    var username = $("#username-input").val();
    var password = $("#password-input").val();

    if (username.trim() === "") {
        $(".username-status").show().text("Bạn phải nhập tên đăng nhập");
    }
    if (password.trim() === "") {
        $(".password-status").show().text("Bạn phải nhập mật khẩu");
    }
    if (username.trim() !== "" && password.trim() !== "") {
        if (username.trim() === "admin") {
            if (password.trim() === "12345678") {
                $(".username-status").show().text("Đăng nhập thành công!");
            }
            else {
                $(".username-status").show().text("Mật khẩu sai");
            }
        }
        else {
            $(".username-status").show().text("Tên đăng nhập không tồn tại trong hệ thống!");
        }
    }
})