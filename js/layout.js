const ui ={
    overlay(data) {
        let html =    `
            <div class="overlay"></div>
        `
        $('body').append(html);
    },
}


function show_over(atag, disptype, tagName)
{
	if(!disptype) {
		disptype = 'block';
	}
	if(!tagName) {
		tagName = 'IMG';
	}
	var subs = atag.getElementsByTagName(tagName);
	if(subs.length < 2) {
		return;
	}
	if(atag.name) {
		hidden_name(atag.name, disptype, tagName);
	}
	subs[0].style.display = 'none';
	subs[1].style.display = disptype;
}

function hidden_name(atag_name, disptype, tagName)
{
	if(!disptype) {
		disptype = 'block';
	}
	if(!tagName) {
		tagName = 'IMG';
	}
	var i, rsubs, hdn = document.getElementsByName(atag_name);
	for(i = 0; i < hdn.length; i ++) {
		rsubs = hdn[i].getElementsByTagName(tagName);
		if(rsubs.length < 2) {
			continue;
		}
		rsubs[0].style.display = disptype;
		rsubs[1].style.display = 'none';
	}
}

function show_out(atag, disptype, tagName)
{
	if(!disptype) {
		disptype = 'block';
	}
	if(!tagName) {
		tagName = 'IMG';
	}
	var subs = atag.getElementsByTagName(tagName);
	if(subs.length < 2) {
		return;
	}
	subs[0].style.display = disptype;
	subs[1].style.display = 'none';
}

function show_toggle(atag, disptype, tagName)
{
	if(!disptype) {
		disptype = 'block';
	}
	if(atag.tagName != 'A') {
		if(atag.style.display == 'none') {
			atag.style.display = disptype;
		} else {
			atag.style.display = 'none';
		}
		return;
	}
	if(!tagName) {
		tagName = 'IMG';
	}
	if(!disptype) {
		disptype = 'block';
	}
	var subs = atag.getElementsByTagName(tagName);
	if(subs.length < 2) {
		return;
	}
	if(subs[0].style.display == 'none') {
		subs[0].style.display = disptype;
		subs[1].style.display = 'none';
	} else {
		subs[0].style.display = 'none';
		subs[1].style.display = disptype;
	}
}

function show_layer(tgt, disptype)
{
	if(!disptype) {
		disptype = 'block';
	}
	var vsb = document.getElementById(tgt);
	var pattern = /^([A-Za-z_]+)[0-9]*$/;
	pattern.test(tgt);
	var hdn, i = 1;
	while((hdn = document.getElementById(RegExp.$1 + i)) != null) {
		hdn.style.display = 'none';
		i ++;
	}
	if(vsb != null) {
		vsb.style.display = disptype;
	}
}

function show_class(tgt, orig, targ)
{
	var vsb = document.getElementById(tgt);
	var pattern = /^([A-Za-z_]+)[0-9]*$/;
	pattern.test(tgt);
	var hdn, i = 1;
	while((hdn = document.getElementById(RegExp.$1 + i)) != null) {
		hdn.className = orig;
		i ++;
	}
	if(vsb != null) {
		vsb.className = targ;
	}
}

function layer_onoff_1(){ 
document.getElementById("Layer_bg").style.display='block'; 
document.getElementById("layers_1").style.display='block';
}

function layer_onoff_2(){ 
	document.getElementById("Layer_bg").style.display='block'; 
	document.getElementById("layers_2").style.display='block';
}


$(document).ready(function(){
    $('#menu-toggle').click(function(){
		$('.side-nav').addClass('active')
		$('.side-nav .menu-items').addClass('show')
		$('.side-nav .user-container-nav').removeClass('show')
		ui.overlay()
    })
    $('#user-toggle').click(function(){
		$('.side-nav').addClass('active')
		$('.side-nav .user-container-nav').addClass('show')
		$('.side-nav .menu-items').removeClass('show')
        ui.overlay()
    })
    $(document).on('click','.overlay',function(){
        $(this).remove()
        $('.side-nav').removeClass('active')
    })

	$(window).scroll(function () {
        100 < $(this).scrollTop() ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
      
        if ($(window).width() < 1280) {
            if ($(this).scrollTop() > 100) {
                $('.new-logo').css('width', '145px');
            } else {
                $('.new-logo').css('width', '160px');
            }
        } else {
            if ($(this).scrollTop() > 100) {
                $('.new-logo').css('width', '210px');
            } else {
                $('.new-logo').css('width', '240');
            }
        }
    }),
    $(".scroll-top").on("click", function () {
        return (
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                600
            ),
            !1
        );
    }),
    $(".scroll-top").on("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

	$(function(){
		if(!flux.browser.supportsTransitions)
			alert("Flux Slider requires a browser that supports CSS3 transitions");
			
		window.f = new flux.slider('#slider', {
			pagination: false,
			controls: false,
			transitions: ['explode', 'bars3d', 'tiles3d', 'bars3d', 'explode'],				
			autoplay: true,
		});		
	});

	$('.main-selection .toggle').click(function(){
		let elData = $(this).data('val')

		if(elData === 'casino'){
			$(this).addClass('active')
			$(this).siblings("a").removeClass("active")
			$('.card-wraps .slot-cards, .all-game-wraps .slot-cards').addClass('hide')
			$('.card-wraps .casino-cards, .all-game-wraps .casino-cards').removeClass('hide')
		}
		if(elData === 'slot'){
			$(this).addClass('active')
			$(this).siblings("a").removeClass("active")
			$('.card-wraps .casino-cards, .all-game-wraps .casino-cards').addClass('hide')
			$('.card-wraps .slot-cards, .all-game-wraps .slot-cards').removeClass('hide')
		}
	})
})
