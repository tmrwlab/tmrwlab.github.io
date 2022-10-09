//▽ページ（DOM）スタンバイのイベントハンドラを設置する。
$(document).ready(function(e) {
	//△ページの準備が完了したらば、
	//▽ナビのクリックイベントハンドラを設置する。
	$('nav a').on('click', function(){
		//▲クリックイベントが起きたらば、
		
		var target = $(this).attr('href');
		//△スクロール先のid文字列を調べて、
		//▽そこがページ内で、Ｙ座標（px数）かを特定する
		var goTo;
		if(target=="#"){
			goTo = 0;
		}else{
			goTo = $(target).offset().top;
		}
		
		//▼ページを「1.5秒かけて、イージングしながら」スクロールさせる
		$('html,body').animate({'scrollTop':goTo},{'duration':1500,'easing':'easeInOutQuart'});
		
		//▽以後の<a>のアクションは停止させる
		return false;
	});
});