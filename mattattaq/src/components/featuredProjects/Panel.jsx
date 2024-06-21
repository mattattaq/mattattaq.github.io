import React from 'react';
import parse from "html-react-parser";
import LazyLoad from 'react-lazyload';

export default function Panel(props) {
    const home = 'https://mattattaq.github.io/mattattaq/';
    return (
        <div className="panel">
            <a href={props.link} target="_blank" rel="noreferrer">
                <LazyLoad height={200} offset={100}>
                    <img 
                        src={`${home}src/img/${props.img}`} 
                        alt={props.title.split('<span className="wip">')[0]} 
                    />
                </LazyLoad>
            </a>
            <h4 style={{ marginTop: '10px' }}>{parse(props.title)}</h4>
            <p>{parse(props.description)}</p>
            <div className="tech-icons">
                {props.techIcons.map((tech, index) => (
                    <span key={index} className={`svg ${tech}`}></span>
                ))}
            </div>
        </div>
    );
}
