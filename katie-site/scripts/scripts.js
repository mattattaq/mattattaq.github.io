jQuery(document).ready(function(){if(jQuery("#input")){console.log("character page");var a=$("#profile"),e=a.attr("alt"),o=$("#text");if(""==e||null==e){var t=$(this).data("src");$(a).attr("alt",t+"'s profile"),a.attr("src","./img/char/ksilver_ileum.jpg"),o.text("ILEUM: New to the reaper world Ileum is ready to reap his first soul. Ileum does not remember who he was before he was a reaper or that he had a life.  Ileum uses the different shoes to change how he looks to be more relatable to the souls he is guiding.")}jQuery("#input button").click(function(){var e=$(this).data("src");"ileum"==e?($(a).attr("alt",e+"'s profile"),a.attr("src","./img/char/ksilver_ileum.jpg"),o.text(e.toUpperCase()+": New to the reaper world Ileum is ready to reap his first soul. Ileum does not remember who he was before he was a reaper or that he had a life.  Ileum uses the different shoes to change how he looks to be more relatable to the souls he is guiding.")):"joon"==e?($(a).attr("alt",e+"'s profile"),a.attr("src","./img/char/ksilver_joon.jpg"),console.log("joon"),o.text(e.toUpperCase()+": Joon was a back up dancer for the group Shine 5.  He idolized one of the singers named Jii, who gave him his shoes  to help him calm his nerves when he was auditioning. When Joon finds out that Jii took his own life Joon spirals out of control and is hit by a car. After being hit he spots Jii as a reaper, only to have Jii run away. He is now helping Ileum, who seems very familiar to Joon.")):"deva"==e?($(a).attr("alt",e+"'s profile"),a.attr("src","./img/char/ksilver_deva.jpg"),console.log("deva"),o.text(e.toUpperCase()+": Deva is the head-reaper. He is wise and cares for his souls very much. He finds solace in helping them realize they are worth more.")):"manager"==e?($(a).attr("alt",e+"'s profile"),console.log("manager"),o.text(e+" testing")):"shine-5"==e?($(a).attr("alt",e+"'s profile"),console.log("shine-5"),o.text(e.toUpperCase()+': is a k-pop idol group. Notable songs include "Bubbles", "Watson", "Reqind", and "Day Dream". Known for their unique vocals they were able to debut in China and throughout Europe. One of the member Choi Ji-Hoon (known as Ji) passed away in 2015. Since they they have released an albule while other members were drafted into service.')):"bo-ra"==e&&($(a).attr("alt",e+"'s profile"),a.attr("src","./img/char/ksilver_bo-ra.jpg"),console.log("bo-ra"),o.text(e.toUpperCase()+" is an artist under the same label as Ji. She has always looked up to him even though they debuted in the same year. She has a very caring personality and always wants to help which gets her in trouble when trying to help Ji come up with a concept for debuting solo."))})}if(jQuery("#comic-carousel")){console.log("comic's page");var r=new XMLHttpRequest;r.open("GET","./js/pages-manifest.json"),r.responseType="json",r.send(),r.onload=function(){for(var e=r.response,a=0;e.pages.length>a;a++)0==a?jQuery("#comic-carousel").append('<div class="carousel-item active"><img class="d-block w-100" src="'+e.pages[a].src+'" alt="'+e.pages[a].name+'"><p>Page '+e.pages[a].name+"</p></div>"):a==e.pages.length-1?jQuery("#comic-carousel").append('<div class="carousel-item"><img class="d-block w-100" src="'+e.pages[a].src+'" alt="'+e.pages[a].name+'" target="_blank"><p><a href="https://gumroad.com/ksilvsart" title="My gumroad page, click to read the rest of the comic!">'+e.pages[a].name+"</a></p></div>"):jQuery("#comic-carousel").append('<div class="carousel-item"><img class="d-block w-100" data-src="'+e.pages[a].src+'" alt="'+e.pages[a].name+'"><p>Page '+e.pages[a].name+"</p></div>")},$("#carouselExampleIndicators").on("slide.bs.carousel",function(e){var a=$(e.relatedTarget).find("img[data-src]");a.attr("src",a.data("src")),a.removeAttr("data-src"),console.log(a)})}jQuery(".form-btn").click(function(e){e.preventDefault(),console.log("clicked button");var a=jQuery("input[name^=fname]")[0].value,o=jQuery("input[name^=subject]")[0].value,t=jQuery("textarea[name^=text-area]")[0].value,r=jQuery("span.error");""==a?r.text("Oh no! You need a name!"):""==o?r.text("Oh no! You need a subject"):document.location.href="mailto:kathrynasilver@gmail.com?subject="+o+"&body="+t,console.log(a),console.log(o),console.log(t)})});
