import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(props) {
    let socialLinks = props.socialLinks;

    return(
        <footer>
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
        <p>© 2022 Matthew Allbright</p>
    </footer>
    );
}