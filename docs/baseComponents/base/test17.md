# 模糊匹配 并校验
---
```
<el-form-item label="账号" ref="userName" prop="userName">
      <el-autocomplete
    v-model="formData.userName"
    :fetch-suggestions="querySearchAsync"
    :debounce="500"
    placeholder="请输入账号(字母、数字、下滑线),至少6位"
    @select="handleSelect"
    ></el-autocomplete>
</el-form-item>

handleSelect(v){
      //选择数据
      this.formData.userId=v.userId;
      this.formData.tel=v.tel;
      this.$refs["formData"].validateField("userName",(err)=>{
          console.log(err)
      })
  },


querySearchAsync(queryString, cb){
      //模糊匹配
      this.userList = [];
      this.userFind(queryString).then((res)=>{
          res.data.forEach((element)=>{
              this.userList.push({value:element.userName,userId:element.userId,tel:element.tel})
          })
          console.log(this.userList)
          cb(this.userList); 
      })
  },

```