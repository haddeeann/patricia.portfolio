import React from 'react';

const Timeline = () => {
    return (
        <div className='box'>
            <div className='inner-box' id='time'>
                <div className='content'>
                    <h3>A TIMELINE</h3>
                    <h4>What have I been up to?</h4>
                    <div className='time-box'>
                        <div>
                            <div className='edit-icon'><i class="fa fa-pencil" aria-hidden="true"></i></div>
                        </div>
                        <div className='time-box-inner'>
                            <h4>Software Developer at Yummy Apps</h4>  <span>January 2020 to Present</span>
                            <p>I've started my own app development company called Yummy Apps. We make products that help people acheive better lives through healthy habits.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;