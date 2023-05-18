$(function(){
  // 変数に要素を入れる
  var open = $('.c-modal__open'),
    close = $('.c-modal__close'),
    container = $('.c-modal__container');

  //開くボタンをクリックしたらモーダルを表示する
  open.on('click',function(){
    container.addClass('active');
    return false;
  });

  //閉じるボタンをクリックしたらモーダルを閉じる
  close.on('click',function(){
    container.removeClass('active');
  });

  //モーダルの外側をクリックしたらモーダルを閉じる
  $(document).on('click',function(e) {
    if(!$(e.target).closest('.c-modal__body').length) {
      container.removeClass('active');
    }
  });
});

// スムーズスクロール
$(function () {
  $('a[href*="#"]').click(function () {
    const speed = 400;
    const target = $(this.hash === '#' || '' ? 'html' : this.hash)
    if (!target.length) return;
    const targetPos = target.offset().top;
    $('html, body').animate({ scrollTop: targetPos }, speed, 'swing');
    return false;
  });
});

// ランキングタブ
	// タブに対してクリックイベントを適用
	const tabs = document.getElementsByClassName('p-tab');
	for(let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', tabSwitch, false);
	}
	// タブをクリックすると実行する関数
	function tabSwitch(){
		// タブのclassの値を変更
		document.getElementsByClassName('active')[0].classList.remove('active');
		this.classList.add('active');
		// コンテンツのclassの値を変更
		document.getElementsByClassName('show')[0].classList.remove('show');
		const arrayTabs = Array.prototype.slice.call(tabs);
		const index = arrayTabs.indexOf(this);
		document.getElementsByClassName('p-panel')[index].classList.add('show');
	};
  // フェードインスクロール時間差 ナンバー売上
  $(function(){
    $(window).scroll(function (){
      $('.fadeIn-a').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 140){
          $(function(){
            $('.fadeIn-a').each(function(i){
              $(this).delay(i * 200).queue(function(){
                $(this).addClass('in');
              });
            });
          });
        }
      });
    });
  });
  // フェードインスクロール時間差 ナンバー組数
  $(function(){
    $('.p-tab').click(function (){
      $('.fadeIn-b').each(function(){
        $('.fadeIn-b').each(function(i){
          $(this).delay(i * 200).queue(function(){
            $(this).addClass('in');
          });
        });
      })
    });
  });
  // フェードインスクロール　システム
  // system
  $(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollAnime').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 100){
                $(this).addClass("fadeInDown");
              }else{
                $(this).removeClass('fadeInDown');
              }
        });
    });
  });
  // 水平スクロール
    $('.p-newsContents__nav').slick({
      infinite: true,
      fade: true,
      arrows: true,
      prevArrow: '<div class="slick-prev"></div>',
      nextArrow: '<div class="slick-next"></div>',
    });

    $('.p-newsContents__item').slick({
      asNavFor:".p-newsContents__nav",
      infinite: true,
      slidesToShow: 6,
      focusOnSelect: true,
    });
    $('.p-newsContents__nav').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      var index = nextSlide;
      $(".p-newsContents__item .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
    });

