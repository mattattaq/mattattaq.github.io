import React from 'react';

function Header() {
    return(
    <section id="sec1">
        <ul id="social">
        <a href="https://www.facebook.com/MattAttaqArt/?fref=ts" target="_blank"><li id="facebook"><i class="fa fa-facebook" aria-hidden="true"></i></li></a>
        <a href="https://twitter.com/MattAttaqComic" target="_blank"><li id="twit"><i class="fa fa-twitter" aria-hidden="true"></i></li></a>
        <a href="https://www.linkedin.com/in/matthew-allbright-b4896749" target="_blank"><li id="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></li></a>
        <a href="mailto:mattatttaq@gmail.com"><li id="mail"><i class="fa fa-envelope" aria-hidden="true"></i></li></a>
        </ul>
    </section>
    );
}

export default Header;
