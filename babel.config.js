module.exports = {
  presets: [
    '@babel/preset-env', 
    '@babel/preset-react', 
  ],
  "plugins": [
    ["@babel/plugin-proposal-class-properties", {
      "loose": true,
      "shippedProposals": true
    }],
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false,
        "version": "7.0.0-beta.0"
      }
    ]
  ]
};