# 修改返回上一页
---
```
this.$store.commit("deleteTabAndGo")

可以加参数返回跳到其他页
this.$store.commit("deleteTabAndGo",{
                                route:this.$route.path,
                                url:"/classManage"
                            })

```