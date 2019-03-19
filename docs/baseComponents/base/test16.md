# 描述
---
```
<el-input v-model="scope.row.handleContent" @keyup.enter.native="handleResult(scope.row)"></el-input>

handleResult(row){
      this.editData({
        id:row.id,
        handleContent:row.handleContent,
        handleId:getCookie("baseInfo").memberId
      })
    },


```