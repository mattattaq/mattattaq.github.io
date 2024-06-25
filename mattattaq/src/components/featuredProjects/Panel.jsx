import React from 'react';
import parse from 'html-react-parser';
import LazyLoad from 'react-lazyload';

const Panel = (props) => {
    const { link, img, title, description, techIcons } = props;
    const home = 'https://mattattaq.github.io/mattattaq/';

    // Function to get image source URL
    const getImgSrc = (img) => {
        if (!img) {
            return `${home}src/img/default.png`; // Fallback to default image
        }
        return img.startsWith('http') ? img : `${home}src/img/${img}`;
    };

    // Render title with fallback if not a string
    const renderTitle = () => {
        if (typeof title === 'string') {
            return parse(title); // Parse HTML in title if it's a string
        } else {
            return 'No Title';
        }
    };

    // Render description with fallback if not a string
    const renderDescription = () => {
        if (typeof description === 'string') {
            return parse(description); // Parse HTML in description if it's a string
        } else {
            return 'No Description';
        }
    };

    return (
        <div className="panel">
            {link && ( // Render link only if it's provided
                <a href={link} target="_blank" rel="noreferrer">
                    <LazyLoad height={200} offset={100}>
                        <img src={getImgSrc(img)} alt={renderTitle()} />
                    </LazyLoad>
                </a>
            )}
            <h4 style={{ marginTop: '10px' }}>{renderTitle()}</h4>
            <p>{renderDescription()}</p>
            <div className="tech-icons">
                {Array.isArray(techIcons) && techIcons.map((tech, index) => (
                    <span key={`${tech}-${index}`} className={`svg ${tech}`}></span>
                ))}
            </div>
        </div>
    );
};

export default Panel;
