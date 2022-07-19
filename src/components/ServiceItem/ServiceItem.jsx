import React, { forwardRef, useEffect } from 'react';
import './serviceItem.scss';
import AOS from "aos";

function ServiceItem({ id, name, content, src, type, ...rest }, ref) {
    useEffect(() => {
        AOS.init();
        // AOS.refresh();
    }, []);
    return (
        <div className='service-item' {...rest} ref={ref} data-aos="fade-up" data-aos-duration={type ? 1200 : 800} data-aos-easing="ease-out-cubic" data-aos-id="super-duper">
            <div className="overlay-img">
                <img src="https://images.unsplash.com/photo-1655070025560-6ad5418df951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="overlay" />
            </div>
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
export default forwardRef(ServiceItem);
