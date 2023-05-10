

## 进程间通信

- 使用`contextBridge.exposeInMainWorld('namexxx',{})`向外暴露接口，在js页面中使用`window.namexxx.`进行调用

- **主线程** 到 **渲染线程** 通过 `webContents.send` 来发送 --->`ipcRenderer.on` 来监听
- **渲染线程** 到 **主线程** 需要通过 `ipcRenderer.send`发送 ---> `ipcMain.on`来监听

## 打包

```JSON
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "main": "main.js",
  "license": "MIT",
  "scripts": {
    "start": "electron-forge start",
    "test": "echo \"Error: no test specified\" && exit 1",
    //打包
    "dist": "electron-builder --win",
  },
  "devDependencies": {
    "electron": "^24.1.2",
    "electron-builder": "^22.11.7"
  },
  "dependencies": {
    "electron-squirrel-startup": "^1.0.0"
  },
  // 配置
  "build": {
    "appId": "cn.guanmai.x.mes",
    "productName": "测试",
    "copyright": "Copyright © 2020 gm",
    "directories": {
      "output": "dist"
    },
    "win": {
      "target": [
        {
          "target": "nsis",
          "arch": [
            "x64"
          ]
        }
      ],
      "icon": "icon/icon.png"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true
    }
  }
}

```

## Electron 中的 document.querySelector() 怎么用？

在 Electron 中，`document.querySelector()` 用于在渲染进程中查找 DOM 元素。该方法返回一个 `CSSQuery` 对象，该对象可用于进一步操作和修改元素。

以下是一个使用 `document.querySelector()` 查找元素并修改其文本的示例:

```
Copy code
import { createWindow } from 'electron';  
import { document } from 'electron';

const win = createWindow();

win.on('ready', () => {  
  const element = document.querySelector('#my-element');  
  element.textContent = 'New text';  
});  
```

在上面的示例中，`document.querySelector()` 查找名为 `#my-element` 的元素，并将其文本设置为 `New text`。

需要注意的是，`document.querySelector()` 只适用于在渲染进程中操作 DOM。在主进程中，可以使用 `window.document.querySelector()` 查找元素，该方法返回一个 `HTMLQuery` 对象，可用于操作和修改 HTML 文档。



## Electron 与 Flutter、React Native 等框架有何不同？

Electron 与 Flutter、React Native 等框架有以下不同:

1. 跨平台能力:Electron 可以构建出同时支持 Windows、Mac、Linux 和移动设备 (如 Android 和 iOS) 的应用程序，而 Flutter 和 React Native 主要是为移动设备构建应用程序。
2. 开发语言:Electron 使用 JavaScript 和 Chromium 内部 API，而 Flutter 和 React Native 使用 Dart 和 JavaScript。
3. 渲染方式:Electron 使用本地渲染，即在本地计算机上构建 DOM 和 WebGL 渲染环境，而 Flutter 和 React Native 使用远程渲染，即在服务器上构建渲染环境。
4. 性能：由于 Electron 使用本地渲染，因此它在性能和渲染速度上比 Flutter 和 React Native 更具优势。
5. 生态系统:Electron 拥有庞大的 Electron 社区和支持库，而 Flutter 和 React Native 也有各自的生态系统和支持库。

总之，Electron 适用于构建大型、高性能的桌面应用程序，而 Flutter 和 React Native 适用于构建移动应用程序和嵌入式应用程序。



## 什么是 Electron?

Electron 是一种跨平台的桌面应用程序开发框架，它使用 HTML,CSS 和 JavaScript 来构建桌面应用程序。它的主要优势是跨平台能力和构建速度，这使得它成为开发 macOS、Windows 和 Linux 应用程序的优秀选择。

Electron 由 Twitter 的 Bootstrap 项目衍生而来，最初是为了解决 Twitter 的 Bootstrap 桌面应用程序开发难题而开发的。它的工作原理是将应用程序渲染为一个浏览器窗口，并使用 Chromium 或 V8 引擎来运行 JavaScript 代码。

Electron 应用程序通常由一个主窗口和一个或多个子窗口组成。主窗口通常是应用程序的入口点，而子窗口则是应用程序的功能模块。Electron 应用程序可以使用 Electron 提供的包和框架来构建用户界面，如 HTML、CSS 和 JavaScript，同时也可以使用其他技术，如 Node.js 和 npm。

总之，Electron 是一种用于构建高性能、跨平台的桌面应用程序的开发框架，它使用 HTML、CSS 和 JavaScript 来构建用户界面，并使用 Chromium 或 V8 引擎来运行 JavaScript 代码。



## Electron 中的 window.open() 怎么用？

在 Electron 中，`window.open()` 用于打开一个新的浏览器窗口或对话框，该窗口可以与原始应用程序的窗口进行交互。

以下是使用 `window.open()` 打开一个新窗口的示例:

```
Copy code
import { createWindow } from 'electron';

const win = createWindow();

win.on('ready', () => {  
  win.open('https://www.example.com');  
});  
```

在上面的示例中，`win.open()` 方法用于打开一个新的浏览器窗口，该窗口显示 `https://www.example.com`。打开的窗口将在当前应用程序的窗口中显示，并且可以通过用户手势进行交互。

需要注意的是，使用 `window.open()` 打开的窗口将是孤立的，它不会与原始应用程序的窗口进行交互，并且无法使用 Electron 提供的一些功能，如窗口管理、菜单和工具栏等。如果需要使用这些功能，可以使用 `electron.remote` 包来访问远程应用程序的窗口和功能。



## 什么是 Electron 的 RendererProcess 对象？

在 Electron 中，`RendererProcess` 对象是用于在渲染进程中执行 JavaScript 的上下文对象。

在 Electron 中，渲染进程是与主进程分离的，并且它们之间通过 `shell. Electron 的渲染进程是一个独立进程，它负责渲染应用程序的用户界面，并且与主进程之间通过共享内存进行通信。`RendererProcess`对象用于在渲染进程中执行 JavaScript 代码，并且可以通过`shell` 对象访问主进程。

通过使用 `RendererProcess` 对象，可以在渲染进程中执行 JavaScript 代码，并且可以通过它来访问应用程序的数据和资源。例如，可以使用 `RendererProcess` 对象来加载本地文件、访问本地存储或访问浏览器 API。

在 Electron 中，`RendererProcess` 对象通常用于在渲染进程中执行脚本，如初始化应用程序或处理用户输入事件。通过在渲染进程中执行脚本，可以加快应用程序的启动速度和响应速度，并且可以更好地与主进程进行通信。

总之，`RendererProcess` 对象是 Electron 中用于在渲染进程中执行 JavaScript 的上下文对象，它可以帮助开发人员更好地控制渲染进程，并在应用程序的启动速度和响应速度方面获得更好的效果。



## 什么是 Electron 的 dialog 包？

`dialog` 是 Electron 的一个包，它提供了用于创建对话框和弹出窗口的 API。在 Electron 中，对话框和弹出窗口通常用于与用户进行交互，并显示重要信息或要求用户输入数据。

`dialog` 包提供了多种对话框和弹出窗口的 API，包括:

- `Electron.dialog.showMessageBox()`: 用于显示消息框，该消息框包含一个按钮或多个按钮，用于接收用户输入或执行操作。
- `Electron.dialog.showErrorBox()`: 用于显示错误消息框，该消息框显示错误信息，并允许用户进行纠错操作。
- `Electron.dialog.showInfoBox()`: 用于显示提示消息框，该消息框显示重要信息，并允许用户进行交互操作。
- `Electron.dialog.showNeutralBox()`: 用于显示中性消息框，该消息框显示普通信息，并允许用户进行交互操作。
- `Electron.dialog.showQuestionBox()`: 用于显示询问消息框，该消息框显示重要信息，并允许用户进行交互操作，例如选择选项或输入文本。

通过使用 `dialog` 包，开发人员可以轻松地创建复杂的对话框和弹出窗口，并与用户进行交互。此外，`dialog` 包还提供了许多其他功能，如文件选择、剪贴板共享、输入验证等，可以帮助开发人员更方便地创建高质量的用户界面。



## Electron 中的 webFrame.loadURL(url) 怎么用？

在 Electron 中，`webFrame.loadURL()` 用于在渲染进程中打开一个新的网页或资源。该方法允许开发人员使用浏览器引擎来加载网页或资源，并且可以在渲染进程中进行处理。

使用 `webFrame.loadURL()` 方法的一般步骤如下:

1. 创建渲染进程窗口对象，例如 `createWindow()` 或 `createBrowserWindow()`。
2. 创建一个新的渲染进程窗口对象，并使用 `webFrame.loadURL()` 方法加载目标网页或资源。
3. 更新主进程的菜单或标签页等。

以下是一个使用 `webFrame.loadURL()` 方法加载网页的示例:

```
Copy code
import { createWindow } from 'electron';  
import { webFrame } from 'electron';

const win = createWindow();

webFrame.loadURL('https://www.example.com');

win.on('ready', () => {  
  // 更新主进程的菜单或标签页等  
});  
```

在上面的示例中，`webFrame.loadURL()` 方法用于加载目标网页。在加载完成后，`ready` 事件将触发，允许开发人员更新主进程的菜单或标签页等。

需要注意的是，`webFrame.loadURL()` 方法仅适用于在渲染进程中打开新的网页或资源。如果需要在主进程中打开新的浏览器窗口或对话框，可以使用 `window.open()` 方法。



## Electron 中的 webFrame.openURL(url) 怎么用？

在 Electron 中，`webFrame.openURL()` 用于在渲染进程中打开一个新的网页或资源，它等同于在浏览器中打开该网页或资源。

使用 `webFrame.openURL()` 方法的一般步骤如下:

1. 创建渲染进程窗口对象，例如 `createWindow()` 或 `createBrowserWindow()`。
2. 创建一个新的渲染进程窗口对象，并使用 `webFrame.openURL()` 方法打开目标网页或资源。
3. 更新主进程的菜单或标签页等。

以下是一个使用 `webFrame.openURL()` 方法打开网页的示例:

```
Copy code
import { createWindow } from 'electron';    
import { webFrame } from 'electron';

const win = createWindow();

webFrame.openURL('https://www.example.com');

win.on('ready', () => {    
  // 更新主进程的菜单或标签页等    
});    
```

在上面的示例中，`webFrame.openURL()` 方法用于在渲染进程中打开目标网页。在打开完成后，`ready` 事件将触发，允许开发人员更新主进程的菜单或标签页等。

需要注意的是，`webFrame.openURL()` 方法仅适用于在渲染进程中打开新的网页或资源。如果需要在主进程中打开新的浏览器窗口或对话框，可以使用 `window.open()` 方法。



## Electron 中的 webFrame.openURL(url) 和webFrame.openURL(url)的区别？

在 Electron 中，`webFrame.openURL(url)` 和 `webFrame.openURL(url)` 方法是相同的，它们用于在渲染进程中打开一个新的网页或资源。

这两种方法的区别在于它们的作用域。`webFrame.openURL(url)` 方法可以在主进程中打开新的网页或资源，而 `webFrame.openURL(url)` 方法只能在渲染进程中打开新的网页或资源。

在使用这两种方法时，需要谨慎使用，以避免意外的跨域问题。如果需要在主进程中打开新的网页或资源，应该使用 `window.open()` 方法，而不是在渲染进程中打开网页或资源。

总之，`webFrame.openURL(url)` 和 `webFrame.openURL(url)` 方法在 Electron 中是相同的，它们都可以用于在渲染进程中打开新的网页或资源。但是，它们的作用域不同，需要谨慎使用，以避免意外的跨域问题。

