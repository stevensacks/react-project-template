const cssnano = [];
if (process.env.NODE_ENV === 'production') {
    cssnano.push(
        require('cssnano', {
            preset: ['default', {discardComments: {removeAll: true}}],
        })
    );
}
module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({
            stage: 1,
        }),
        require('tailwindcss/nesting'),
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
    ].concat(cssnano),
};
