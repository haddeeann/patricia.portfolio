import React from 'react';

const Timeline = () => {
    return (
        <div className='box'>
            <div className='inner-box' id='time'>
                <div className='content'>
                    <h2>PROFESSIONAL TIMELINE</h2>
                    <div className='time-box'>
                        <div>
                            <div className='edit-icon'><i className="fa fa-pencil" aria-hidden="true"></i></div>
                        </div>
                        <div className='time-box-inner'>
                            <h3>Fullstack Developer</h3>
                            <h4>PivotCX</h4>
                            <div>Februrary 2022 to Present</div>
                            <p>We help recruiters reach the right candidates at fast speeds.</p>
                        </div>
                    </div>
                    <div className='time-box'>
                        <div>
                            <div className='edit-icon'><i className="fa fa-pencil" aria-hidden="true"></i></div>
                        </div>
                        <div className='time-box-inner'>
                            <h3>Software Developer</h3>
                            <h4>Yellow Umbrella Creators</h4>
                            <div>January 2021 to Present</div>
                            <p>Yellow Umbrella Creators is my personal project company.</p>
                        </div>
                    </div>
                    <div className='time-box'>
                        <div>
                            <div className='edit-icon'><i className="fa fa-pencil" aria-hidden="true"></i></div>
                        </div>
                        <div className='time-box-inner'>
                            <h3>Software Developer</h3>
                            <h4>SharpSpring acquired by Constant Contact</h4>
                            <div>March 2020 to January 2021</div>
                            <p>Constant Contact helps achieve automation in communicating with customers and marketing.</p>
                        </div>
                    </div>
                    <div className='time-box'>
                        <div>
                            <div className='edit-icon'><i className="fa fa-pencil" aria-hidden="true"></i></div>
                        </div>
                        <div className='time-box-inner'>
                            <h3>Software Developer</h3>
                            <h4>Altavian acquired by Teledyne FLIR</h4>
                            <div>September 2017 to February 2020</div>
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