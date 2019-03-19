# 经办校区/分馆
---
![](https://user-gold-cdn.xitu.io/2019/3/19/16993dd07119f36c?w=558&h=64&f=png&s=8290)
```
<el-form-item label="经办校区/分馆" ref="campusId" prop="campusId">
      <el-select v-model="formData.campusId" placeholder="请选择">
          <el-option
          v-for="item in campusData"
          :key="item.campusId"
          :label="item.campusName"
          :value="item.campusId">
          </el-option>
      </el-select>
  </el-form-item>

  getCampus(){
      return new Promise((resolve,reject)=>{
          this.$axios.post({
              url:baseURL+"common/findcampusbyins",
              data:{
                  isAll:1
              },
              success:(res)=>{
                  resolve(res.data)
              }
          })
      })
  },

let res4=await this.getCampus();
this.campusData=[...res4];


```
