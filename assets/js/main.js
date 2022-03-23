$(document).ready(function () {
	$(".special-products").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		rtl: true,
		centerMode: true,
		arrows: false,

		responsive: [
			{
				breakpoint: 1401,
				settings: { centerPadding: "40px" },
			},
			{
				breakpoint: 1325,
				settings: { centerPadding: "20px" },
			},
			{
				breakpoint: 1325,
				settings: { slidesToShow: 2 },
			},
			{
				breakpoint: 972,
				settings: { slidesToShow: 1 },
			},
			{
				breakpoint: 500,
				settings: { slidesToShow: 1, centerMode: false },
			},
		],
	});
});
