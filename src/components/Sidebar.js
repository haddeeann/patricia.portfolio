import React from 'react';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <nav>
                <div><a href='#intro'>Intro</a></div>
                <div><a href='#about'>About</a></div>
                <div><a href='#skills'>Skills</a></div>
                <div><a href='#time'>Timeline</a></div>
            </nav>
        </div>
    );
}

export default Sidebar;