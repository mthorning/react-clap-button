const env = {
    production: {
        plugins: [
            'transform-react-constant-elements',
            '@babel/plugin-transform-react-inline-elements',
            'transform-react-pure-class-to-function',
            [
                'transform-react-remove-prop-types',
                {
                    removeImport: true,
                },
            ],
        ],
    },
}

const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
]
const plugins = [
    'transform-class-properties',
    '@babel/plugin-transform-regenerator',
    '@babel/plugin-proposal-object-rest-spread',
    'babel-plugin-emotion',
    '@babel/plugin-syntax-dynamic-import',
]

module.exports = { env, plugins, presets }
