# 深入浅出 Nodejs
### Node 的特点
  - 异步I/O
  - 事件与回调函数
    - 单线程的弱点
      - 无法利用多核cpu
      - 错误会引起整个应用的退出，应用的健壮性值得考研
      - 大量计算占用cpu 导致无法继续调用异步I/O。
    - 子进程的出现，意味着Node可以从容地应对单线程在健壮性和无法利用多核CPU方面的问题。
  - 跨平台
### Node 的应用场景
  - I/O 密集型
    I/O 密集的优势 主要在于 Node 利用事件循环的处理能力，而不是启动每一个线程为每一个请求服务，资源占用极少。