jQuery( document ).ready(function() {
  $.getJSON('/arrays.json', function(data) {
    console.log(data);
    $('#search_table').DataTable( {
      data: data.data,
      columns: [
        { data: '',
        "render": function(data, type, row, meta) {
          return "<button>Click</button>";
        }
        },
        { data: 'artist' },
        { data: 'title' },
        { data: 'album' },
        { data: 'tuning' },
        { data: 'member' },
        { data: 'updated' },
        { data: 'downloadAmount'},
        { data: 'parts',
          "render": function(data, type, row, meta){
            return renderPartsTable(data);
          }
        },
        { data: 'dynamicD' },
        { data: 'platforms',
          "render": function(data, type, row, meta){

            return renderPlatformsTable(data);
          }
       }
      ] 
    });
  });
	
    addOpenContextListeners();
    jQuery('.open-context').popover({
        trigger : 'click',
        placement : 'top',
        html: true,
        content : '<div title="Add to Collection without downloading"> <a class="context-add"><i class="fas fa-plus-circle"></i> Add to Collection</a> </div> <div title="Download without adding to Collection"> <a class="context-dl"><i class="fas fa-download" title="Download only. Don\'t add to Collection"></i> Download only</a> </div> <div title="Save this song to your Saved list"> <a class="context-save save-add"><i class="fas fa-floppy-o"></i> Save for later</a> </div> <div title="Highlight this artist\'s songs"> <a class="context-pa pa-add" artist="Papa Roach"><i class="fas fa-star"></i> Add to Preferred Artists</a> </div>',
        template: '<div class="popover"><div class="arrow"></div>'+
                  '<h3 class="popover-title"></h3><div class="popover-content">'+
                  '</div><div class="popover-footer"><button type="button" class="btn btn-primary popover-submit">'+
                  '<i class="icon-ok icon-white"></i></button>&nbsp;'+
                  '<button type="button" class="btn btn-default popover-cancel">'+
                  '<i class="icon-remove"></i></button></div></div>'
    });
    jQuery('.dropdown-toggle').on('click', function() {
      jQuery('.dropdown-item').animateCss('bounceInRight');
      jQuery('.dropdown-menu').animateCss('fadeInUp');
    });
    jQuery(".dropdown-item").hover(function(){
      jQuery(this).animateCss('pulse');
    }, function(){
      //On Mouse Leave
    });

    jQuery('.open-context').on('click', function(){
      console.log("yer");
    });
    console.log('yerrr');

});

jQuery.fn.extend({
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
      jQuery(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

function addOpenContextListeners(){
	jQuery('.open-context').off().click(function(){
		jQuery(this).parent().next().fadeToggle(animation_speed);
		jQuery('#toggle-mask').show();
	});
}

function renderPartsTable(data){
  var out = "";
  if(data.lead){
    out += "<span class=\"fa-stack\"><i class=\"fas fa-circle fa-lg lead\"></i><strong class=\"fa-stack-1x fa-stack-text\">L</strong></span>";
  } else {
    out += "<span class=\"fa-stack table-inactive\"><i class=\"fas fa-circle fa-lg lead\"></i><strong class=\"fa-stack-1x fa-stack-text\">L</strong></span>";
  }
  if(data.rythm){
    out += "<span class=\"fa-stack\"><i class=\"fas fa-circle fa-lg rhythm\"></i><strong class=\"fa-stack-1x fa-stack-text\">R</strong></span>";
  } else {
    out += "<span class=\"fa-stack table-inactive\"><i class=\"fas fa-circle fa-lg rhythm\"></i><strong class=\"fa-stack-1x fa-stack-text\">R</strong></span>";
  }
  if(data.bass){
    out += "<span class=\"fa-stack\"><i class=\"fas fa-circle fa-lg bass\"></i><strong class=\"fa-stack-1x fa-stack-text\">B</strong></span>";
  } else {
    out += "<span class=\"fa-stack table-inactive\"><i class=\"fas fa-circle fa-lg bass\"></i><strong class=\"fa-stack-1x fa-stack-text\">B</strong></span>";
  }
  if(data.voice){
    out += "<span class=\"fa-stack\"><i class=\"fas fa-microphone\"></i></span>";
  } else {
    out += "<span class=\"fa-stack table-inactive\"><i class=\"fas fa-microphone\"></i></span>";
  }
  return out;
}

function renderPlatformsTable(data){
  var out = "";
  if(data.win){
    out += "<span class=\"fa-stack\"><i class=\"fab fa-windows\"></i></span>";
  } else {
    out += "<span class=\"fa-stack inactive\"><i class=\"fab fa-windows\"></i></span>";
  }

  if(data.mac){
    out += "<span class=\"fa-stack\"><i class=\"fab fa-apple\"></i></span>";
  } else {
    out += "<span class=\"fa-stack inactive\"><i class=\"fab fa-apple\"></i></span>";
  }

  if(data.xbox){
    out += "<span class=\"fa-stack\"><i class=\"fab fa-xbox\"></i></span>";
  } else {
    out += "<span class=\"fa-stack inactive\"><i class=\"fab fa-xbox\"></i></span>";
  }

  if(data.ps){
    out += "<span class=\"fa-stack\"><i class=\"fab fa-playstation\"></i></span>"
  } else {
    out += "<span class=\"fa-stack inactive\"><i class=\"fab fa-playstation\"></i></span>"
  }
}