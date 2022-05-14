import React from 'react';
import parse from "html-react-parser";

export default function Panel(props) {
    console.log(props);
    return(
        <div className="panel" key={props.title.split(' ')}>
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src={props.img} alt={props.title.split('<span className="wip">')}/>
            </a>
            <h4 style={{marginTop: '10px'}}>{parse(props.title)}</h4>
            <p>{parse(props.description)}</p>
            { props.techIcons.map(tech => (
                <span className={`svg ${tech}`}></span>
            ))}
        </div>
    );
}
