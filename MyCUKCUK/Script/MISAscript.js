//Thông báo nhập thiếu thông tin

$('#login-buttonID').click(function () {
    $('.status-list').empty();
    var $inputChecked = $('[requiredInput="true"]');
    $inputChecked.each(function () {
        var inputValue = $(this).val().trim();
        var outputStatus = '<li>' + $(this).attr('inputInfo') + ' không được để trống</li>';
        if (inputValue.length === 0) {
            $('.status-list').append(outputStatus);
        }
    });
});

//Kiểm tra thông tin yêu cầu nhập

$('[requiredInput="true"]').blur(function () {
        var inputValue = $(this).val().trim();
        if (inputValue.length === 0) {
            $(this).addClass('input-warning');
        }
        else {
            $(this).removeClass('input-warning');
        }
});