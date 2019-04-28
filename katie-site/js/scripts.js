jQuery( document ).ready(function() {
    if(jQuery("#input")) {
        console.log('character page');
        var img = $('#profile');
        var alt_text = img.attr('alt');
        var text = $('#text');
        if(alt_text == "" || alt_text == undefined) {
            $(img).attr('alt', 'Ileum\'s profile');
            text.text('testing');
        }
        // img.attr('src','../img/ileum.jpg');
        jQuery("#input button").click(function(){
            var a = $(this).data('src');
            if(a == 'ileum') {
                $(img).attr('alt', a + '\'s profile');
                img.attr('src','./img/char/ksilver_ileum.jpg');
                text.text(a + ': New to the reaper world Ileum is ready to reap his first soul. Ileum does not remember who he was before he was a reaper or that he had a life.  Ileum uses the different shoes to change how he looks to be more relatable to the souls he is guiding.');
            } else if (a == 'joon') {
                $(img).attr('alt', a + '\'s profile');
                img.attr('src', './img/char/ksilver_joon.jpg');
                console.log('joon');
                text.text(a + ': Joon was a back up dancer for the group Shine 5.  He idolized one of the singers named Jii, who gave him his shoes  to help him calm his nerves when he was auditioning. When Joon finds out that Jii took his own life Joon spirals out of control and is hit by a car. After being hit he spots Jii as a reaper, only to have Jii run away. He is now helping Ileum, who seems very familiar to Joon.');
            } else if (a == 'deva') {
                $(img).attr('alt', a + '\'s profile');
                img.attr('src', './img/char/ksilver_deva.jpg');
                console.log('deva');
                text.text(a + ' testing');
            } else if (a == 'manager') {
                $(img).attr('alt', a + '\'s profile');
                console.log('manager');
                text.text(a + ' testing');
            } else if (a == 'shine-5') {
                $(img).attr('alt', a + '\'s profile');
                console.log('shine-5');
                text.text(a + ' testing');
            } else if (a == 'bo-ra') {
                $(img).attr('alt', a + '\'s profile');
                console.log('bo-ra');
                text.text(a + ' testing');
            }
            console.log("character clicked");
        });
    }
    if(jQuery("#comic-carousel")) {
        console.log('comic\'s page');
        var requestUrl = "./js/pages-manifest.json";
        var request = new XMLHttpRequest();
        request.open('GET', requestUrl);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
            var pages = request.response;
            for(var i=0; pages.pages.length > i; i++) {
                if(i==0){
                    jQuery("#comic-carousel").append('<div class="carousel-item active"><img class="d-block w-100" src="' + pages.pages[i].src +'" alt="' + pages.pages[i].name + '"><p>Page '+ pages.pages[i].name + '</p></div>');
                } else {
                    jQuery("#comic-carousel").append('<div class="carousel-item"><img class="d-block w-100" src="' + pages.pages[i].src +'" alt="' + pages.pages[i].name + '"><p>Page '+ pages.pages[i].name + '</p></div>');
                }
            }
        }
    }
});