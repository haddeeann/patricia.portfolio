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
                            <div className='edit-icon'><i className="fa fa-pencil" aria-hidden="true"></i></div>
                        </div>
                        <div className='time-box-inner'>
                            <h4>Fullstack Developer at PivotCX</h4>  <span>Februrary 2022 to Present</span>
                            <p>We help recruiters reach the right candidates at fast speeds.</p>
                        </div>
                    </div>
                    <div className='time-box'>
                        <div>
                            <div className='edit-icon'><i className="fa fa-pencil" aria-hidden="true"></i></div>
                        </div>
                        <div className='time-box-inner'>
                            <h4>Software Developer at Yellow Umbrella Creators</h4>  <span>January 2021 to Present</span>
                            <p>Yellow Umbrella Creators is my personal project company.</p>
                        </div>
                    </div>
                    <div className='time-box'>
                        <div>
                            <div className='edit-icon'><i className="fa fa-pencil" aria-hidden="true"></i></div>
                        </div>
                        <div className='time-box-inner'>
                            <h4>Software Developer at Constant Contact</h4>  <span>March 2020 to December 2020</span>
                            <p>Constant Contact helps achieve automation in communicating with customers and marketing.</p>
                        </div>
                    </div>
                    <div className='time-box'>
                        <div>
                            <div className='edit-icon'><i className="fa fa-pencil" aria-hidden="true"></i></div>
                        </div>
                        <div className='time-box-inner'>
                            <h4>Software Developer at Teledyne FLIR</h4>  <span>March 2020 to December 2020</span>
                            <p>
                                Teledyne FLIR is a global leader in the design, manufacture, and marketing of thermal imaging infrared cameras for various applications, such as surveillance, security, industrial, and scientific.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;