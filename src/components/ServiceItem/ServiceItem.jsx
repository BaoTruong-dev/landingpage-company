import React from 'react';
import './serviceItem.scss';
export default function ServiceItem({ id, name, content, src, ...rest }) {
    return (
        <div className='service-item' {...rest}>
            <h2 className="number">0{id}</h2>
            <div className="img">
                <img src={src} alt={id} />
            </div>
            <div className="content">
                <h2>{name}</h2>
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
}
