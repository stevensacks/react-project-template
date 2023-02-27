const isChromatic = require('chromatic');
const isDev = process.env.NODE_ENV !== 'production';
const isStorybook = process.env.SB === '1' || isChromatic();

module.exports = {
    content:
        isDev || isStorybook
            ? ['./src/**/*.{ts,tsx}']
            : ['./src/**/*[!.stories].{ts,tsx}'],
    darkMode: 'class',
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
    ],
};
