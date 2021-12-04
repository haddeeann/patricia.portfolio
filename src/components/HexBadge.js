import React from 'react';

const HexBadge = ({ badge }) => {
    return (
        <div className='hexBadge'>
            <div className='hexBadgeInner'>
                <div className='hexBadgeTop' />
                <div className='hexBadgeMiddle'>
                    <i className={`fas fa-${badge} fa-3x`}></i>
                </div>
                <div className='hexBadgeBottom' />
            </div>
        </div>
    );
}

export default HexBadge;