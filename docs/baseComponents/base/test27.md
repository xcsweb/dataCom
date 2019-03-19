# 模糊匹配销售
---
```
<el-form-item label="销售" ref="salesNameLike" prop="salesNameLike">
    <el-autocomplete
    v-model="salesNameLike"
    @input="salesInput"
    @blur="salesBlur"
    @select="handleSelectSales"
    :fetch-suggestions="querySearchAsyncSales"
    placeholder="请输入销售名字"
    :debounce="500"
    ></el-autocomplete>
</el-form-item>

salesBlur(){
    if(this.formData.saleMemberId===0||this.formData.saleMemberId===""){
        this.salesNameLike=""
    }
},
salesInput(){
    this.formData.saleMemberId=0
},
handleSelectSales(v){
    this.formData.saleMemberId=v.memberId;
},


querySearchAsyncSales(queryString, cb){
    //模糊匹配选择销售
    this.salesList = [];
    this.getMemberId(queryString).then((res)=>{
        res.data.forEach((element)=>{
            this.salesList.push({value:element.name+'　　'+element.tel,memberId:element.memberId})
        })
        cb(this.salesList); 
    })
},

```
# 模糊匹配教练
```
<el-autocomplete
v-model="a.coachNameLike"
:fetch-suggestions="querySearchAsyncCoach"
placeholder="请输入老师"
@select="(v)=>handleSelectCoach(v,index,b)"
:debounce="500"
></el-autocomplete>

handleSelectCoach(v, index, b) {
    //选择教练
    console.log(index, b);
    this.formData.classesTimeList[index].classesTimeTeacherList[b].memberId =
    v.memberId;
}

querySearchAsyncCoach(queryString, cb) {
      //模糊匹配选择教练
      this.coachList = [];
      this.getMemberId({
        nameLike: queryString,
        trainCategoryIdsNotEqualNull: 1
      }).then(res => {
        res.data.forEach(element => {
          this.coachList.push({
            value: element.name+’ 　　’+element.tel,
            memberId: element.memberId
          });
        });
        cb(this.coachList);
      });
    },


getMemberId(data = {}) {
      return new Promise((resolve, reject) => {
        this.$axios.post({
          url: baseURL + "member/find",
          data: {
            ...data
          },
          success: res => {
            resolve(res);
          }
        });
      });
    },


```
# 失去焦点或改变时清空输入框信息
``` 
@input="salesInput"
@blur="salesBlur"

salesInput(){
    this.formData.saleMemberId=0;
},
salesBlur(){
    if(this.formData.saleMemberId===0||this.formData.saleMemberId===""){
        this.salesNameLike=""
    }
},

```