jQuery( document ).ready(function() {
    if(jQuery("#input")) {
        console.log('character page');
        var img = $('#profile');
        var alt_text = img.attr('alt');
        var text = $('#text');
        if(alt_text == "" || alt_text == undefined) {
            var a = $(this).data('src');
            $(img).attr('alt', a + '\'s profile');
            img.attr('src','./img/char/ksilver_ileum.jpg');
            text.text( 'ILEUM: New to the reaper world Ileum is ready to reap his first soul. Ileum does not remember who he was before he was a reaper or that he had a life.  Ileum uses the different shoes to change how he looks to be more relatable to the souls he is guiding.');
        }
        jQuery("#input button").click(function(){
            var a = $(this).data('src');
            if(a == 'ileum') {
                $(img).attr('alt', a + '\'s profile');
                img.attr('src','./img/char/ksilver_ileum.jpg');
                text.text(a.toUpperCase() + ': New to the reaper world Ileum is ready to reap his first soul. Ileum does not remember who he was before he was a reaper or that he had a life.  Ileum uses the different shoes to change how he looks to be more relatable to the souls he is guiding.');
            } else if (a == 'joon') {
                $(img).attr('alt', a + '\'s profile');
                img.attr('src', './img/char/ksilver_joon.jpg');
                console.log('joon');
                text.text(a.toUpperCase() + ': Joon was a back up dancer for the group Shine 5.  He idolized one of the singers named Jii, who gave him his shoes  to help him calm his nerves when he was auditioning. When Joon finds out that Jii took his own life Joon spirals out of control and is hit by a car. After being hit he spots Jii as a reaper, only to have Jii run away. He is now helping Ileum, who seems very familiar to Joon.');
            } else if (a == 'deva') {
                $(img).attr('alt', a + '\'s profile');
                img.attr('src', './img/char/ksilver_deva.jpg');
                console.log('deva');
                text.text(a + ' Deva is the head-reaper. He is wise and cares for his souls very much. He finds solace in helping them realize they are worth more.');
            } else if (a == 'manager') {
                $(img).attr('alt', a + '\'s profile');
                console.log('manager');
                text.text(a + ' testing');
            } else if (a == 'shine-5') {
                $(img).attr('alt', a + '\'s profile');
                console.log('shine-5');
                text.text(a.toUpperCase() + ': is a k-pop idol group. Notable songs include "Bubbles", "Watson", "Reqind", and "Day Dream". Known for their unique vocals they were able to debut in China and throughout Europe. One of the member Choi Ji-Hoon (known as Ji) passed away in 2015. Since they they have released an albule while other members were drafted into service.');
            } else if (a == 'bo-ra') {
                $(img).attr('alt', a + '\'s profile');
                img.attr('src','./img/char/ksilver_bo-ra.jpg');
                console.log('bo-ra');
                text.text(a.toUpperCase() + ' Bo-ra is an artist under the same label as Ji. She has always looked up to him even though they debuted in the same year. She has a very caring personality and always wants to help which gets her in trouble when trying to help Ji come up with a concept for debuting solo.');
            }
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
    jQuery('.form-btn').click(function(e){
        e.preventDefault();
        console.log('clicked button');
        // grab the inputs
        var name = jQuery('input[name^=fname]')[0].value;
        var subject = jQuery('input[name^=subject]')[0].value;
        var message = jQuery('textarea[name^=text-area]')[0].value;
        var err = jQuery('span.error');
        if(name == ''){
            err.text('Oh no! You need a name!')
        } else if(subject == '') {
            err.text('Oh no! You need a subject');
        } else {
            document.location.href = "mailto:kathrynasilver@gmail.com?subject=" + subject + '&body=' + message;
        }
        console.log(name);
        console.log(subject);
        console.log(message);
    });
});