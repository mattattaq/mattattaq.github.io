import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.scss'
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [{
    link: "https://www.facebook.com/MattAttaqArt/?fref=ts",
    font: faFacebook,
    id: "facebook"
    },
    {
    link: "https://twitter.com/MattAttaqComic",
    font: faTwitter,
    id: "twit"
    },
    {
    link: "https://www.linkedin.com/in/matthew-allbright-b4896749",
    font: faLinkedin,
    id: "linkedin"
    },
    {
    link: "mailto:mattatttaq@gmail.com",
    font: faEnvelope,
    id: "mail"
    }];


export default function Header() {
    return(
    <section id="sec1">
        <ul id="social">
            {socialLinks.map( social =>
                <a href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    key={social.id}
                >
                    <li id={social.id}>
                        <FontAwesomeIcon
                            icon={social.font}
                            color="#fff"
                            size="2xl"
                            style={{
                                marginTop: '9px'
                            }}
                        />
                    </li>
                </a>
            )}
        </ul>
    </section>
    );
}
