import React from 'react';
import BoxItem from '../components/BoxItem'

const Skills = () => {
    return (
        <div className='box'>
            <div className='inner-box' id='skills'>
                <div className='content'>
                    <h2>Technical Skills</h2>
                    <div className='three-item-list'>
                        <BoxItem
                            link='#'
                            badge='code'
                            title='Programming Languages'
                            description='I focus on Python and JavaScript as my main programming languages.'
                        />
                        <BoxItem
                            link='https://data-frog.netlify.app/'
                            badge='cogs'
                            title='Data Analysis'
                            description="I'm learning more about machine learning through online courses."
                        />
                        <BoxItem
                            link='#'
                            badge='blender-phone'
                            title='Algorithms'
                            description='I work on problems in Leetcode to build my skills in solving algorithms.'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;