import React from 'react';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='profile'>
                <div className='author-img' />
                <div className='author-des'>
                    <h3>Patricia</h3>
                    <i className="fas fa-envelope"></i> pattee13@gmail.com
                </div>
                <div className='nav-section'>
                    <nav>
                        <div className='nav-link'><a href='#intro'>Intro</a></div>
                        <div className='nav-link'><a href='#about'>About</a></div>
                        <div className='nav-link'><a href='#skills'>Skills</a></div>
                        <div className='nav-link'><a href='#time'>Timeline</a></div>
                    </nav>
                </div>
                <div className='social'>
                    <h3>Social & Sites</h3>
                    <ul>
                        <li><a href='https://leetcode.com/pattee/' target='_blank' rel='noreferrer'>Leet Code</a></li>
                        <li><a href='https://codepen.io/pattee' target='_blank' rel='noreferrer'>Code Pen</a></li>
                        <li><a href='https://stackoverflow.com/users/2022724/someone-alive' target='_blank' rel='noreferrer'>Stack Overflow</a></li>
                        <li><a href='https://www.linkedin.com/in/patricia-green-63a3a4167/' target='_blank' rel='noreferrer'>Linked In</a></li>
                    </ul>
                </div>
                <div className='credit-section'>
                    Made with <i className="fas fa-heart"></i> and <i className="fas fa-mug-hot"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;