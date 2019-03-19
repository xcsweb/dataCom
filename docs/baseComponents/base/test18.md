# 表单动态验证
---
```
 ![](https://user-gold-cdn.xitu.io/2019/3/19/16993d2c2455c953?w=558&h=159&f=png&s=64844)
computed:{
            validatePhone(){
                return validatePhone;
            },
            validateIdCard(){
                return validateIdCard;
            }
        },

```
# 表单提交验证1
```
let validArr=[],errArr=[],formData={};
                let propKey=Object.keys(this.rules)
                let propArr=propKey;
                propArr.forEach(key=>{
                    console.log(key)
                   this.$refs["formData"].validateField(key,(err)=>{
                            console.log(key,err)
                                errArr.push(err)
                        })
                })
                formData=Object.assign(formData,this.formData)
                if(errArr.every((v)=>v=="")){
                    validArr.push(true)
                }else{
                    validArr.push(false)
                }
                if(validArr.every((v)=>v==true)){
                    this.$axios.post({
                        url:baseURL+"crmtag/editfollowconfig",
                        data:{
                            ...formData
                        },
                        success:(res)=>{
                            this.$message({
                                message: res.message || "修改成功",
                                type: "success"
                            });
                        }
                    })
                }
```

```
# 表单提交校验2
```
this.$refs["formData"].validate((valid) => {
          if (valid) {
            this.$axios.post({
            url:baseURL+"student/insertrefund",
            data:{
              ...this.formData
            },
            success:(res)=>{
              this.$message({
                  message:res.message||"修改成功",
                  type: 'success'
              })
              this.$store.commit("deleteTabAndGo")
             }
          })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
```
# 验证规则
```
rules:{
    tels:[
        { required:true,message:"必填",trigger:"blur" }  
    ],
    content:[
        { required:true,message:"必填",trigger:"blur" }
    ]
}

```

# 重置表单
```
this.$refs[formName].resetFields();
```