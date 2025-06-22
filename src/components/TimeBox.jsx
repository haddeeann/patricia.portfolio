import React from 'react';

const TimeBox = ({ title, company, time, description, link }) => {
    return (
        <div className='time-box'>
            <div className='time-box-inner'>
                <a href={link} target='_blank' className='fade' rel='noreferrer'>
                    <h3 className='title'>{title}</h3>
                    <h4>{company}</h4>
                    <div>{time}</div>
                    <p>
                        {description}
                    </p>
                </a>
            </div>
        </div>
    );
}

export default TimeBox;