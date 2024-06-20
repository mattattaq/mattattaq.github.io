import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.scss';

export default function Header(props) {
    let socialLinks = props.socialLinks;
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
