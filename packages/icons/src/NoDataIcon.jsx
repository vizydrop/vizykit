import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const NoDataIcon = ({color}) => {
    const {iconColorLight} = useStylesVariables();

    return (
        <svg width="76" height="76" viewBox="0 0 76 76" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorLight} fillRule="evenodd" d="M75.4071 3.42132C76.192 2.64422 76.1984 1.37791 75.4213 0.592934C74.6442 -0.192042 73.3779 -0.198426 72.5929 0.578676C68.1671 4.9601 63.7443 9.34464 59.325 13.7328C53.952 9.90598 47.2186 7.34129 39.4322 6.76437L39.4277 6.76405C27.9777 5.94161 16.2578 12.1769 9.39372 21.7159C2.45868 31.3536 0.377912 44.514 8.47706 57.402C9.4163 58.8977 10.4464 60.2628 11.5539 61.5036C7.89083 65.1966 4.23174 68.8935 0.576903 72.5947C-0.199208 73.3807 -0.191228 74.647 0.594727 75.4231C1.38068 76.1992 2.64699 76.1912 3.4231 75.4053C7.08299 71.699 10.7472 67.9969 14.4155 64.2986C25.6436 73.8463 42.4495 73.3579 54.4629 67.5083L54.4636 67.5079C70.8415 59.5252 75.9424 44.925 72.3241 31.9332C70.6914 26.0709 67.3012 20.596 62.4671 16.2498C66.7771 11.9705 71.0906 7.69451 75.4071 3.42132ZM56.4407 16.5979C51.7524 13.4073 45.9171 11.2562 39.1387 10.7536C29.262 10.0452 18.8094 15.4793 12.6405 24.0522C6.54223 32.527 4.72986 43.922 11.8642 55.2742L11.8645 55.2748C12.6325 56.4977 13.4754 57.6225 14.3832 58.6527C28.3527 44.5843 42.378 30.572 56.4407 16.5979ZM17.2573 61.4352C31.3279 47.2651 45.4562 33.1509 59.6238 19.074C64.0021 22.9548 67.0324 27.8418 68.4708 33.0064C71.5596 44.097 67.3934 56.7557 52.7117 63.9119C41.6639 69.2915 26.9901 69.4628 17.2573 61.4352Z" />
        </svg>
    );
};

NoDataIcon.displayName = `NoDataIcon`;

NoDataIcon.propTypes = {
    color: PropTypes.string,
};
