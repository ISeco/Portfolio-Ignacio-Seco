import React, { useEffect } from 'react';
import Typed from 'typed.js';

export const Typing = ( element ) => {
    const options = {
        strings: ['Full-Stack MERN'],
        typeSpeed: 90,
        backSpeed: 90,
        loop: false
    }

    useEffect(() => {
        let keyType = new Typed(`#${element}`, options);
        return () => {
            keyType.destroy();
        }
    }, [])
}
