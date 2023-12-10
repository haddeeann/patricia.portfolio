import React from 'react';
import HexBadge from './HexBadge';

const Skills = () => {
    return (
        <div className='box'>
            <div className='inner-box' id='skills'>
                <div className='content'>
                    <h3>TECHNICAL SKILLS</h3>
                    <div className='three-item-list'>
                        <div className='item-box'>
                            <HexBadge badge='code' />
                            <div className='item'>
                                <h5>PROGRAMMING LANGUAGES</h5>
                                <hr />
                                <p>I focus on Python and JavaScript as my main programming languages.</p>
                            </div>
                        </div>
                        <div className='item-box'>
                            <HexBadge badge='cogs' />
                            <div className='item'>
                                <h5>DATA ANALYSIS</h5>
                                <hr />
                                <p>I'm learning more about machine learning through online courses.</p>
                            </div>
                        </div>
                        <div className='item-box'>
                            <HexBadge badge='blender-phone' />
                            <div className='item'>
                                <h5>ALGORITHMS</h5>
                                <hr />
                                <p>I work on problems in Leetcode to build my skills in solving algorithms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;