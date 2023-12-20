import React from 'react';
import data_frog from '../images/data_frog_web_page.png';
import adventure_dog from '../images/adventure_dog_web_page.png'

const Portfolio = () => {
    return (
        <div className='box'>
            <div className='portfolio'>
                <a href='https://data-frog.netlify.app/numpy/1_create_array/' target='_blank' rel='noreferrer'>
                    <div className='portfolio-row'>
                        <div>
                            <img width='100%' height='100%' src={data_frog} alt='Data Frog' />
                        </div>
                        <div className='description'>
                            A website for writing about learning about data science.
                        </div>
                    </div>
                </a>
                <a href='https://adventure-dog.netlify.app/' target='_blank' rel='noreferrer'>
                    <div className='portfolio-row'>
                        <div>
                            <img width='100%' height='100%'  src={adventure_dog} alt='Adventure Dog' />
                        </div>
                        <div className='description'>
                            A website for articles about taking care of dogs.
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Portfolio;