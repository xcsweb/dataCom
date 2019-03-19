# 批量
---
```
<el-button class="remove" v-if="deleteIdData.length>0" @click="removeAll()">批量删除</el-button>

.remove{
      margin-top:20px;
    }

removeAll(){
      let teachCourseIds=[];
      this.deleteIdData.forEach((element)=>{
          teachCourseIds.push(element.teachCourseId)
      })
      return new Promise((resolve,reject)=>{
         this.$confirm('确定删除', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         this.$axios.post({
          url:baseURL+"teachmodel/delete",
          data:{
            teachCourseIds:teachCourseIds.toString()
          },
          success:(res)=>{
             this.$message({
              message: res.message || "修改成功",
              type: "success"
            });
            this.getTableData()
          }
        })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      })
    },

```