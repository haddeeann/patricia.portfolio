import React from 'react';
import HexBadge from './HexBadge';

const Skills = () => {
    return (
        <div className='box'>
            <div className='inner-box' id='skills'>
                <div className='content'>
                    <h3>TECHNICAL SKILLS</h3>
                    <h4>Let's talk nerdy</h4>
                    <div className='three-item-list'>
                        <div className='item-box'>
                            <HexBadge badge='code' />
                            <div className='item'>
                                <h5>PROGRAMMING LANGUAGES</h5>
                                <hr />
                                <p>I mostly focus on JavaScript and the libraries assocaited with JavaScript. I like developing in React and working with Node. When I'm not using JavaScript my preference is Python.</p>
                            </div>
                        </div>
                        <div className='item-box'>
                            <HexBadge badge='cogs' />
                            <div className='item'>
                                <h5>DATA ANALYSIS</h5>
                                <hr />
                                <p>I'm learning more about data managment because I'm interested in machine learning and artificial intelligence. I think sticking with JavaScript and Python fits nicely into this goal.</p>
                            </div>
                        </div>
                        <div className='item-box'>
                            <HexBadge badge='blender-phone' />
                            <div className='item'>
                                <h5>ALGORITHMS</h5>
                                <hr />
                                <p>I work on problems in platforms like Leetcode. I don't think that learning algorithems is the only way to measure the success of a programmer. But it's a skill that helps. Plus it's fun.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;