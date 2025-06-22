import React from 'react';
import TimeBox from '../components/TimeBox'

const Timeline = () => {
    return (
        <div className='box'>
            <div className='inner-box' id='time'>
                <div className='content'>
                    <h2>Professional Timeline</h2>
                    <TimeBox
                        title='Fullstack Developer'
                        company='PivotCX'
                        time='Februrary 2022 to Present'
                        description='We help recruiters reach the right candidates at fast speeds.'
                        link='https://pivotcx.io/'
                    />
                    <TimeBox
                        title='Software Developer'
                        company='Yellow Umbrella Creators'
                        time='January 2021 to Present'
                        description='Yellow Umbrella Creators is my personal project company.'
                    />
                    <TimeBox
                        title='Software Developer'
                        company='SharpSpring acquired by Constant Contact'
                        time='March 2020 to January 2021'
                        description='Constant Contact helps achieve automation in communicating with customers and marketing.'
                        link='https://www.constantcontact.com/'
                    />
                    <TimeBox
                        title='Software Developer'
                        company='Altavian acquired by Teledyne FLIR'
                        time='September 2017 to February 2020'
                        description='Teledyne FLIR is a global leader in the design, manufacture, and marketing of thermal imaging infrared cameras for various applications, such as surveillance, security, industrial, and scientific.'
                        link='https://www.flir.com/'
                    />
                </div>
            </div>
        </div>
    );
}

export default Timeline;