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
                text.text(a + ' testing');
            } else if (a == 'joon') {
                $(img).attr('alt', a + '\'s profile');
                img.attr('src', './img/char/ksilver_joon.jpg');
                console.log('joon');
                text.text(a + ' testing');
            } else if (a == 'deva') {
                $(img).attr('alt', a + '\'s profile');
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
});