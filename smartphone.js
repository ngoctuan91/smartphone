//chon mau sac
function chonmau(){
	var maubac = document.getElementById('maubac').checked;
	var mauvang = document.getElementById('mauvang').checked;
	var maudo = document.getElementById('maudo').checked;
	var mauxam = document.getElementById('mauxam').checked;
	if (maubac ==true) {
		$(".col-price h3").html("<b>15,190,000 VNĐ</b> <span>(Màu bạc)</span>");
		$("#mauanh").attr("src", "img/iphone8.png");
	}

	if (mauvang ==true) {
		$(".col-price h3").html("<b>15,490,000 VNĐ</b> <span>(Màu vàng)</span>");
		$("#mauanh").attr("src", "img/iphone8-plus-gold.png");
	}
	if (maudo ==true) {
		$(".col-price h3").html("<b>15,690,000 VNĐ</b> <span>(Màu đỏ)</span>");
		$("#mauanh").attr("src", "img/iphone8-plus-red.png");
	}
	if (mauxam ==true) {
		$(".col-price h3").html("<b>15,190,000 VNĐ</b> <span>(Màu xám)</span>");
		$("#mauanh").attr("src", "img/iphone8-plus-space-gray.png");
	}
}
//tooltip dcare
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
// chon goi bao hanh
function select_care(){
	var care_val = $("#select-care").val();
	if (care_val == "careplus") {
		$("#care-plus").css("visibility", "visible");
		$("#care-s").css("visibility", "hidden");
	}
	if (care_val == "cares"){
		$("#care-plus").css("visibility", "hidden");
		$("#care-s").css("visibility", "visible");
	}
}

// news slide - tin lien quan
$('.owl-carousel').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
// hidden btn doc them
$(".btn-docthem").click(function(){
	$(this).css("display", "none");
})