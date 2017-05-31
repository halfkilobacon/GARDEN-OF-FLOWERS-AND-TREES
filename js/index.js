$(function(){
	//公司介绍的轮播图效果
	// 定义一个变量

	var b=0;

	// 自定义一个自动轮播的函数
	function run(){
		// 让变量自增1

		b++;

		// 条件语句控制变量
		b = (b==3) ? 0 : b ;
		$('#bottom .container .company .content .pic img').eq(b).fadeIn(300).siblings('img').hide();
		$('#bottom .container .company .content .pic ul li').eq(b).css('background','#51B1F5').siblings('li').css('background', '#FD93BA');

	}
	// 设置定时器
	var timer = setInterval(run,2000);

	// 给li加鼠标一如事件
	$('#bottom .container .company .content .pic ul li').mouseenter(function(){
		// 清理定时器
		clearInterval(timer);
		// 获得当前移入的li的序号
		b = $(this).index();
		// 让b号图片显示，b号li变红
		$('#bottom .container .company .content .pic img').eq(b).fadeIn(300).siblings('img').hide();
		$('#bottom .container .company .content .pic ul li').eq(b).css('background', '#51B1F5').siblings('li').css('background', '#FD93BA');
	});
	// 加鼠标移除效果
	$('#bottom .container .company .content .pic ul li').mouseout(function(){
		timer = setInterval(run,2000);
	});
	///////////////////////////////////////////////////////
	
})