//back to top
$(window).scroll(function(){
		if($(window).scrollTop() >300){
			$("#back-to-top").css("display", "block")
		} else{
			$("#back-to-top").css("display", "none")
		}

})
$("#back-to-top").click(function(){
	$("html, body").animate({scrollTop: 0}, 500)
})

 /*<!-- vi tri (mobile only) -->*/
function addLocal(){
	var select_local = $("#thanhpho").val();
	var diachi = {
		hanoi: "<option value=''> 123 Thái thịnh - Đống Đa</option> <option value=''>234 Xuân Thủy - Cầu Giấy</option> <option value=''>432 Nguyễn Trãi - Thanh Xuân</option> <option value=''> 222 Xã Đàn - Đống Đa</option> <option value=''>Nguyễn Văn Cừ - Long Biên</option>",
		hochiminh: "<option value=''> 111 Hoàng Diệu - Quận 4</option> <option value=''> 456 Quang Trung - Gò Vấp</option> <option value=''> 987 Hoàng Văn thụ - Tân Bình</option>",
		danang: "<option value=''>666 Hàm nghi - Thanh Khê</option> <option value=''> 678 Duy Tân - Hải Châu</option>",
		cantho: "<option value=''> 111 Xuân Khánh - Ninh Kiều</option>",
		haiphong: "<option value=''>222 Điện biên phủ - Ngô Quyền</option>",
	};
	$("#diachi").html("");
	switch(select_local){
		case "hn":
			$("#diachi").append(diachi.hanoi);
			break;
		case "hcm":
			$("#diachi").append(diachi.hochiminh);
			break;
		case "dn":
			$("#diachi").append(diachi.danang);
			break;
		case "cth":
			$("#diachi").append(diachi.cantho);
			break;
		case "hp":
			$("#diachi").append(diachi.haiphong);
			break;
	}
}
addLocal();