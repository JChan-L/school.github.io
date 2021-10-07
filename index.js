$(function () {
	let i = 1;
	setInterval(function () {
		if (i) {
			$('#img2').attr('src', './img/3.png');
			i = 0;
		} else {
			$('#img2').attr('src', './img/2.png')
			i = 1
		}
	}, 600);

	setInterval(function () {
		let myDate = new Date;
		let mon = myDate.getMonth() + 1;
		let date = myDate.getDate().toString().padStart(2, '0');
		let hours = myDate.getHours();
		let minute = myDate.getMinutes().toString().padStart(2, '0');
		$('.myday').html(mon + '月' + date + '日')
		$('.mytime').html(hours + ':' + minute)
	}, 1000)
}
)