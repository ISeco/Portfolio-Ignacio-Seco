import React, { useEffect } from 'react';
import Typed from 'typed.js';

export const Typing = ( element ) => {
    const options = {
        strings: ['Frontend', 'Backend'],
        typeSpeed: 90,
        backSpeed: 90,
        loop: true
    }

    useEffect(() => {
        let keyType = new Typed(`#${element}`, options);
        return () => {
            keyType.destroy();
        }
    }, [])
}
