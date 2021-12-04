import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const Introduction = () => {
    const el = useRef();
    const hello = 'hello there...'.split(' ');
    const scroll = 'please scroll down'.split(' ');
    const helloText = hello.map((l, index) => {
        return <span key={index} className='hello'>{l}&nbsp;</span>;
    });

    const scrollText = scroll.map((w, index) => {
        return <span key={index} className='scrollText'>{w}&nbsp;</span>;
    });

    useLayoutEffect(() => {
        const tl = gsap.timeline();
        // Target any descendant with the class of .box - no matter how far down the descendant tree. Uses el.current.querySelectorAll() internally
        tl.fromTo((".intro"), {
          opacity: '0',
          duration: 7,
          css: {
              'filter': 'grayscale(100%)'
          }
        },
        {
            opacity: '0.90',
            duration: 7,
            css: {
                'filter': 'grayscale(20%)'
            }
        }, 0.00);

        tl.from('.hello', {
            opacity: '0',
            duration: 3,
            stagger: 0.4
        }, 0.5);

        tl.from('.scrollText', {
            opacity: '0',
            duration: 3,
            stagger: 0.4
        }, 2.50);
    });

    return (
        <div>
            <div className='box intro' ref={el}> 
                <div className='inner-box' id='intro'>
                    <div className='content'></div>
                </div>
                <div className='imageTextBox'>
                    <div>
                        {helloText}
                    </div>
                    <div>
                        {scrollText}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;