import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const HelpIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorDefault} fillRule="evenodd" d="M8,16 C3.58167,16 0,12.4183 0,8 C0,3.58173 3.58167,0 8,0 C12.4183,0 16,3.58173 16,8 C16,12.4183 12.4183,16 8,16 Z M8,14 C11.3137,14 14,11.3137 14,8 C14,4.68628 11.3137,2 8,2 C4.68628,2 2,4.68628 2,8 C2,11.3137 4.68628,14 8,14 Z M5.62512,6.0694 C5.66272,5.17853 5.96899,4.71588 6.55359,4.34387 C6.92236,4.10632 7.37561,3.98755 7.91333,3.98755 C8.61975,3.98755 9.20581,4.15637 9.67163,4.49396 C10.1405,4.83154 10.3749,5.33167 10.3749,5.99438 C10.3749,6.4007 10.2733,6.74298 10.0702,7.02124 C9.95142,7.19 9.72314,7.4057 9.38562,7.66827 L9.05273,7.92615 C8.87134,8.06683 8.75098,8.2309 8.69165,8.41846 C8.65417,8.53723 8.63074,8.97174 8.63074,8.97174 C8.63074,8.97174 8.64478,9.61566 7.97424,9.61884 C7.30371,9.62195 7.36475,8.97174 7.36475,8.97174 C7.36475,8.97174 7.43347,8.07935 7.51477,7.87927 C7.59607,7.67609 7.80542,7.44318 8.14307,7.1806 L8.48535,6.91339 C8.5979,6.82898 8.68848,6.73676 8.75732,6.63672 C8.88232,6.46478 8.94482,6.2757 8.94482,6.0694 C8.94482,5.83179 8.87451,5.61615 8.73389,5.4223 C8.59631,5.2254 8.34314,5.12695 7.97424,5.12695 C7.61169,5.12695 7.35376,5.24725 7.20056,5.48798 L7.18604,5.51129 C7.04688,5.73419 6.99426,5.81848 6.99426,6.0694 C6.99426,6.2616 6.60022,6.56793 6.2439,6.56793 C5.84387,6.56793 5.61719,6.2561 5.62512,6.0694 Z M8,12.0126 C7.57483,12.0126 7.23022,11.668 7.23022,11.2429 C7.23022,10.8177 7.57483,10.4731 8,10.4731 C8.42505,10.4731 8.76978,10.8177 8.76978,11.2429 C8.76978,11.668 8.42505,12.0126 8,12.0126 Z" />
        </svg>
    );
};

HelpIcon.displayName = `HelpIcon`;

HelpIcon.propTypes = {
    color: PropTypes.string,
};
