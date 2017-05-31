$(function(){
	// 定义一个变量
	var b=0;

	// 自定义一个自动轮播的函数
	function run(){
		// 让变量自增1

		b++;

		// 条件语句控制变量
		b = (b==3) ? 0 : b ;
		$('#ban .banner .pic').eq(b).fadeIn(300).siblings('.pic').hide();
		$('#ban .banner ul li').eq(b).css({
			'background-color': '#E23C54',
			'color': '#fff'
		}).siblings('li').css({
			'background-color': '#fff',
			'color': '#E23C54'
		});

	}
	// 设置定时器
	var timer = setInterval(run,2000);

	// 给li加鼠标一如事件
	$('#ban .banner ul li').mouseenter(function(){
		// 清理定时器
		clearInterval(timer);
		// 获得当前移入的li的序号
		b = $(this).index();
		// 让b号图片显示，b号li变红
		$('#ban .banner .pic').eq(b).fadeIn(300).siblings('.pic').hide();
		$('#ban .banner ul li').eq(b).css({
			'background-color': '#E23C54',
			'color': '#fff'
		}).siblings('li').css({
			'background-color': '#fff',
			'color': '#E23C54'
		});
	});
	// 加鼠标移除效果
	$('#ban .banner ul li').mouseout(function(){
		timer = setInterval(run,2000);
	});
	// 点击siderbar里边的li之后的效果
	$('#bottom .container .sidebar ul li').mouseenter(function(){
		$(this).css('background','url(images/sidebar_bg.jpg)0px 18px no-repeat').siblings('li').css('background', 'none');
	});
	$('#bottom .container .sidebar ul li').mouseenter(function(){
		$(this).find('a').css('color', '#f12121').parent('li').siblings('li').find('a').css('color', '#800d1b');
	});
	// 点击下边的1234按钮的效果
	$('#bottom .container .content .tab ul li a').click(function(){
		$(this).css({
			'background-color': '#F9873D',
			'color': '#fff'
		}).parent('li').siblings('li').find('a').css({
			'background-color': '#fff',
			'color': '#f6985b'
		});
	});
})