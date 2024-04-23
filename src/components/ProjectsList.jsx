import React from 'react';
import { Link } from 'react-router-dom';

function ImageList({ data }) {
    return (
        <div className="project-wrap">
            {data.map((item) => (
                <Link key={item.id} to={`${item.slug}`} className="project">
                    <div className="project-title">{item.title}</div>
                    <img className="project-img" src={item.imgScreensaver} alt={item.title} />
                    <p className="project-id">{item.id}</p>
                </Link>
            ))}
        </div>
    );
}

export default ImageList;
