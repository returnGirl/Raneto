## 利用electron-packager打包app和exe

> 利用electron可以迅速搭建桌面应用，那如何打包成mac和window下的文件呢? 笔者使用electron-packager成功将应用打包。

### 本地下载electron-packager和electron-prebuil
```
"electron-packager": "^8.7.1",
"electron-prebuilt": "^1.4.13",
```
### 编写package.json
`packageDarwin`对应的是macos  
`packageWin`对应的是windows
```
"packageDarwin": "electron-packager . ih5 --platform=darwin --arch=x64 --out=./MacOutApp --electron-version=1.6.7 --asar --app-version=1.0.0 --ignore=\"(.DS_Store|.git|.idea|.gitignore|README.md|MacOutApp|OutApp|src|webpack.config*|node_modules)\" --overwrite --icon=ih5.icns",  

"packageWin": "electron-packager . ih5 --platform=win32 --arch=ia32 --out=./WinOutApp --electron-version=1.6.7 --asar --app-version=1.0.0 --ignore=\"(.DS_Store|.git|.idea|.gitignore|README.md|WinOutApp|OutApp|src|webpack.config*|node_modules)\" --overwrite --icon=ih5.ico"
```
然后执行对应的npm run ...命令即可。  
而且要在对应的平台下运行。  
即mac生成.app  
windows下生成.exe  
> 值得一提的是，由于安装过程要下载对应的electron程序，如果
使用默认源下载特别慢（笔者在打包成exe时electron-win下载特别慢）,可以使用淘宝源

```
 DEBUG=* ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/" npm run packageWin
 ```