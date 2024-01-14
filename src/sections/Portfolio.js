import React from 'react';
import data_frog from '../images/data_frog_web_page.png';
import adventure_dog from '../images/adventure_dog_web_page.png';
import distraction_free from '../images/distractionfree_web_page.png'
import flex_box from '../images/flex_box_web_page.png';

const Portfolio = () => {
    return (
        <div className='box'>
            <div className='inner-box' id='portfolio'>
                <div className='content'>
                    <h2>Portfolio</h2>
                    <div className='portfolio-section'>
                        <a href='https://foxycss.netlify.app/' target='_blank' rel='noreferrer'>
                            <div className='portfolio-row'>
                                <div>
                                    <img width='100%' height='100%' src={flex_box} alt='Flex Box CSS' />
                                </div>
                                <div className='description'>
                                    A CSS flexbox page with all the basic flexbox displayed.
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='portfolio-section'>
                        <a href='https://distractionfree.netlify.app/' target='_blank' rel='noreferrer'>
                            <div className='portfolio-row'>
                                <div>
                                    <img width='100%' height='100%' src={distraction_free} alt='Distraction Free Learning' />
                                </div>
                                <div className='description'>
                                    A website for my own use for distraction free learning about data science.
                                    It's a React front end with a call to SupaBase and YouTube embedded videos.
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='portfolio-section'>
                        <a href='https://data-frog.netlify.app/numpy/1_create_array/' target='_blank' rel='noreferrer'>
                            <div className='portfolio-row'>
                                <div>
                                    <img width='100%' height='100%' src={data_frog} alt='Data Frog' />
                                </div>
                                <div className='description'>
                                    A website for writing about learning about data science. I write the info based on my learning.
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='portfolio-section'>
                        <a href='https://adventure-dog.netlify.app/' target='_blank' rel='noreferrer'>
                            <div className='portfolio-row'>
                                <div>
                                    <img width='100%' height='100%'  src={adventure_dog} alt='Adventure Dog' />
                                </div>
                                <div className='description'>
                                    A website for articles about taking care of dogs. I'm an avid dog fan, so this is just for fun.
                                    I used a small blogging technology that allows blog articles to be written in mark down.
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;