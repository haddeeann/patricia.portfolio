import React from 'react';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='profile'>
                <div className='author-img' />
                <div className='author-des'>
                    <h3>Patricia</h3>
                    <i class="fas fa-envelope"></i> pattee13@gmail.com
                </div>
                <div className='nav-section'>
                    <nav>
                        <div className='nav-link'><a href='#intro'>Intro</a></div>
                        <div className='nav-link'><a href='#about'>About</a></div>
                        <div className='nav-link'><a href='#skills'>Skills</a></div>
                        <div className='nav-link'><a href='#time'>Timeline</a></div>
                    </nav>
                </div>
                <div className='credit-section'>
                    Made with <i class="fas fa-heart"></i> and <i class="fas fa-mug-hot"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;