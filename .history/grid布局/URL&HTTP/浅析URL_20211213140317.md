<a name="CXPDu"></a>

## URL 是什么

1. 统一资源定位符（英语：Uniform Resource Locator，缩写：URL，或称统一资源定位器、定位地址、URL 地址[1]）俗称网页地址，简称网址，是因特网上标准的资源的地址（Address），如同在网络上的门牌。
1. 组成：`协议 + 域名或IP + 端口号 + 路径 + 查询字符串 + 锚点`
   1. ![image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639373130900-9abe001e-5108-447b-92b2-175ddd6a7e85.png#clientId=ue7fdc697-b77f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=247&id=u5b91b068&margin=%5Bobject%20Object%5D&name=image.png&originHeight=493&originWidth=1300&originalType=binary&ratio=1&rotation=0&showTitle=false&size=241882&status=done&style=none&taskId=u9f677a36-fba6-4f9e-9d96-6b0516e3000&title=&width=650)
      <a name="KiZjv"></a>

## IP 是什么

<a name="F49Ln"></a>

#### IP 定义

1. 就是 Internet Protocal，即网络协议
1. 作用
   1. 如何定位一台设备
   1. 如何封装数据报文，以跟其他设备交流
      <a name="EhZs0"></a>

#### 外网 IP 与内网 IP

![image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639373485402-8335b32c-8683-4adc-9fac-8e82fc5b4271.png#clientId=ue7fdc697-b77f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=408&id=uaf9976bf&margin=%5Bobject%20Object%5D&name=image.png&originHeight=815&originWidth=1521&originalType=binary&ratio=1&rotation=0&showTitle=false&size=452955&status=done&style=none&taskId=u4df4c0ec-8aae-469a-857b-5956f7e95e6&title=&width=760.5)

1. 如何获得外网 IP
   1. 买宽带
   1. 买路由器，路由器连上宽带服务商的服务器（例如中国电信宽带业务），那么就会有一个外网 IP，比如`14.17.32.211`。这就是我们在互联网中的地址
   1. ![image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639374564770-8552f738-658d-44a7-b3ec-2a30b3d0e562.png#clientId=ue7fdc697-b77f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=239&id=u15457d6e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=478&originWidth=1496&originalType=binary&ratio=1&rotation=0&showTitle=false&size=63970&status=done&style=none&taskId=ubd4e482f-351e-4087-b443-6002b217122&title=&width=748)
2. 如何获得内网 IP
   1. 路由器会在家中创造一个内网，内网中的设备使用内网 IP，一般这个 IP 是`192.168.xxx.xxx`
   1. 一般路由器会给我们分配一个好记的内网 IP，例如`192.168.1.1`
   1. 路由器会给内网中的设备分配一个不同的内网 IP
   1. 使用`ipconfig`查看
      1. ![image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639373876062-73144c17-f0c4-4cee-ac3a-3346a644aaed.png#clientId=ue7fdc697-b77f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=141&id=u4051ceba&margin=%5Bobject%20Object%5D&name=image.png&originHeight=282&originWidth=675&originalType=binary&ratio=1&rotation=0&showTitle=false&size=42838&status=done&style=none&taskId=u8e1d0d19-ef82-4bad-b73d-7226b7ba367&title=&width=337.5)
      1. 默认网关就是指路由器
      1. 内网和外网无法互通，唯一的联通点就是路由器
3. 特殊的 IP
   1. `**127.0.0.1**是回送地址，指本地机，一般用来测试使用`
   1. `localhost`是一个在计算机网络中用于表示“此计算机”的主机名。它被用于通过本地环回网络接口，来访问本机运行的服务，并且将会绕过任何物理网络接口硬件。
   1. IPV4 中，`0.0.0.0`地址被用于表示一个无效的，未知的或者不可用的目标。
      <a name="P51y2"></a>

#### Hosts

![image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639374489352-07c202b9-a4f1-4964-8ca8-feac8d43db01.png#clientId=ue7fdc697-b77f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=169&id=ud1c2dd73&margin=%5Bobject%20Object%5D&name=image.png&originHeight=338&originWidth=1136&originalType=binary&ratio=1&rotation=0&showTitle=false&size=39582&status=done&style=none&taskId=u4dc51c94-0400-4127-9599-53307253e3b&title=&width=568)

1. 定义：Hosts 文件是一个没有扩展名的操作系统文件，以表的形式存储了主机名和 IP 地址的映射关系[1]。Hosts 又称 host table，译为“主机表”。现代系统中，虽然 DNS 取代了主机表，但主机表的应用依旧很广[1]。和 DNS 不同的是，用户可以直接对 Hosts 文件进行控制。Hosts 文件是大多数系统都存在的一个小型主机表。Hosts 文件中包含了本地网络重要的主机名和地址信息，查询 Hosts 文件得到的结果比通过查询 DNS 得到的结果优先级更高
2. hosts 文件中以#开头表示注释
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639374509928-2b32e953-86d6-44e6-b4ba-f6f694d057d2.png#clientId=ue7fdc697-b77f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=107&id=ude57b7fd&margin=%5Bobject%20Object%5D&name=Image.png&originHeight=214&originWidth=427&originalType=binary&ratio=1&rotation=0&showTitle=false&size=7851&status=done&style=none&taskId=u846580c8-ecbd-49cc-beaf-94ee4200252&title=&width=213.5)
3. hosts 中可以添加一行 127.0.0.1 Xianlai，让 Xianlai 成为 127.0.0.1 的别称
4. hosts 一半需要用管理员权限才能编辑
   <a name="W5A3A"></a>

## 端口（port）

<a name="yaIFV"></a>

#### 一台设备提供的端口

1. 要提供 HTTP 服务最好用 80 端口
1. 要提供 HTTPS 服务最好用 443 端口
1. 要提供 FTP 服务最好用 21 端口
1. 一共有 65535 个端口
   <a name="aPK8Q"></a>

#### 如何使用端口

1. [查维基](https://zh.wikipedia.org/wiki/TCP/UDP%E7%AB%AF%E5%8F%A3%E5%88%97%E8%A1%A8)
   1. ![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639374759904-5fc32bc2-3f77-4711-a26f-004d200e6239.png#clientId=ue7fdc697-b77f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=345&id=ue0d3a87f&margin=%5Bobject%20Object%5D&name=Image.png&originHeight=690&originWidth=1241&originalType=binary&ratio=1&rotation=0&showTitle=false&size=83310&status=done&style=none&taskId=u4d6b920b-49bb-4fd9-a5de-3a8a66a4bf1&title=&width=620.5)
   1. 传输网页![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639374769400-420aff15-9405-4492-a4a2-759373121dc7.png#clientId=ue7fdc697-b77f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=19&id=ufe1a8570&margin=%5Bobject%20Object%5D&name=Image.png&originHeight=37&originWidth=489&originalType=binary&ratio=1&rotation=0&showTitle=false&size=20399&status=done&style=none&taskId=ucd30dd24-1713-4f6d-bf34-8aa5a87b298&title=&width=244.5)
   1. 传输超文本![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639374773285-85933798-8de8-4f8c-9361-663b11531484.png#clientId=ue7fdc697-b77f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=102&id=u2d38200b&margin=%5Bobject%20Object%5D&name=Image.png&originHeight=203&originWidth=557&originalType=binary&ratio=1&rotation=0&showTitle=false&size=103555&status=done&style=none&taskId=u8e37697f-2360-4308-b1d5-6915bca4aa3&title=&width=278.5)
      <a name="j58V2"></a>

#### 端口使用规则

1. 0 到 1023 号端口留给系统使用
1. 拥有管理员权限后，才能使用 1024 端口
1. 其他端口可以给普通用户使用
1. http-server 默认使用 8080 端口
   1. ![image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639374951291-1f25a1eb-58ee-4e0f-874c-c42310c9bb27.png#clientId=ue7fdc697-b77f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=186&id=u95257527&margin=%5Bobject%20Object%5D&name=image.png&originHeight=372&originWidth=504&originalType=binary&ratio=1&rotation=0&showTitle=false&size=65073&status=done&style=none&taskId=u1b69fda5-5a64-42bc-8135-fbd95e2a81a&title=&width=252)
      <a name="wCGTP"></a>

#### 端口跟 IP 的区别

1. 端口是用来定位一个设备的服务的，IP 是用来定位一个设备的
1. IP + 端口，比如就可以找到腾讯（IP）的聊天服务（端口）
   <a name="EieVx"></a>

## 域名是什么

<a name="xbVS5"></a>

#### 域名就是对 IP 的别称

1. 使用 ping 网址得到对应 IP
   1. 得到 QQ 和百度的 IP![Image.png](https://cdn.nlark.com/yuque/0/2021/png/25396806/1639375212125-a51fa8d7-1a1f-4e5d-a1b3-a8cbf31858fd.png#clientId=ue7fdc697-b77f-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=262&id=ued5f7408&margin=%5Bobject%20Object%5D&name=Image.png&originHeight=524&originWidth=613&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71314&status=done&style=none&taskId=ud9f28798-f48b-411a-ae17-2bf7ea24d94&title=&width=306.5)
2. <br />
   <a name="bNEsi"></a>

## 路径是什么
