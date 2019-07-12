module.exports = {
    presets: ["@vue/app"],
    ignore: ["./src/assets/mui/js/mui.js"],
    plugins: [
        ["component",
            {
                "libraryName": "mint-ui",
                "style": true
            }
        ]
    ]
};