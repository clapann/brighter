const exe = require('@angablue/exe');

const build = exe({
    entry: '../index.js',
    out: '../build/brighter.exe',
    icon: '../assets/icon.ico'
});

build.then(() => console.log('Build completed!'));
