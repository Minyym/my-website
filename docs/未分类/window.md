## MIME类型

`Content-Type`实体头部用于指示资源的MIME类型。

MIME类型也叫媒体类型，是一种标准，用来表示文档、文件或字节流的性质和格式。

重要的MIME类型：

| MIME类型                              | 含义                                  |
| ------------------------------------- | ------------------------------------- |
| **application/octet-stream**          | **应用程序文件**                      |
| **text/plain**                        | **文本文件**                          |
| **text/css**                          | **css\****文件**                      |
| **text/html**                         | **html\****文件**                     |
| **application/javascript**            | **js\****文件**                       |
| **image/gif**                         | **GIF** **图片**                      |
| **image/jpeg**                        | **JPEG/JPG** **图片**                 |
| **image/png**                         | **PNG** **图片**                      |
| **image/svg+xml**                     | **SVG\****图片 (矢量图)**             |
| **image/x-icon**                      | **icon\****图片**                     |
| **application/json**                  | **json\****文件**                     |
| **multipart/form-data**               | 上传文件                              |
| **application/x-www-form-urlencoded** | Form表单格式                          |
| **audio/webm**                        | **WebM** **音频文件格式**             |
| **video/webm**                        | **WebM\****视频文件格式的音视频文件** |

## fetch

- 全局的 **`fetch()`** 方法用于发起获取资源的请求。它返回一个 promise，这个 promise 会在请求响应后被 resolve，并传回 [`Response`](https://developer.mozilla.org/zh-CN/docs/Web/API/Response) 对象。
- 当遇到网络错误时，[`fetch()`](https://developer.mozilla.org/zh-CN/docs/Web/API/fetch) 返回的 promise 会被 reject，并传回 [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)，虽然这也可能因为权限或其它问题导致。成功的 fetch() 检查不仅要包括 promise 被 resolve，还要包括 [`Response.ok`](https://developer.mozilla.org/zh-CN/docs/Web/API/Response/ok) 属性为 true。HTTP 404 状态并不被认为是网络错误。

```js
window.fetch('/station/user', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((res) => {
        console.log(res)
        return res.json() // 
      })
      .then((res) => {
        console.log(res)
      })
```

- 我们使用对应的构造器创建了一个新的 [`Request`](https://developer.mozilla.org/zh-CN/docs/Web/API/Request) 对象，然后调用 fetch() 方法获取资源。因为我们是在请求一个图片，为了解析正常，我们对响应执行 [`Body.blob` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Response/blob) 来设置相应的 MIME 类型。然后创建一个 Object URL，并在 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) 元素中把它显示出来。

```js
var myImage = document.querySelector('img');

var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  return response.blob(); //对响应执行来设置相应的 MIME 类型
}).then(function(response) {
  var objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
});
```

