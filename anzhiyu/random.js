var posts=["2024/03/18/Linked/","2024/03/18/List/","2023/12/10/Unity笔记-json和xml/","2023/12/10/Unity笔记-声音管理器/","2023/12/04/Unity笔记-泛型单例/","2023/12/08/Unity笔记-UI框架/","2023/12/04/Unity笔记-消息框架/","2023/12/06/Unity笔记-状态机/","2024/03/16/npm自建图床/","2024/03/18/tips/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};