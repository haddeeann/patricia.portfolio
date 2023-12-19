import React from 'react';
import HexBadge from "./HexBadge";

const BoxItem = ({ link, badge, title, description }) => {
    return (
        <div>
            <a href={link} target='_blank'>
                <div className='box-item'>
                    <HexBadge badge={badge} />
                    <div className='item'>
                        <h5>{title}</h5>
                        <hr />
                        <p>{description}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default BoxItem;