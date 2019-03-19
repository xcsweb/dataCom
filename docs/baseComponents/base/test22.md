# 班级类别
---
![](https://user-gold-cdn.xitu.io/2019/3/19/16993d867e5a6cc2?w=558&h=76&f=png&s=5522)

```
<ClassCategory ref="form2" v-model="formData.trainCategoryId" v-on:trainCategoryId="getTrainCategoryId" :trainCategoryArr="trainCategoryArr" :init="isInit"></ClassCategory>

getTrainCategoryId(v){
                //班级类别
                console.log(v)
                this.formData.trainCategoryId=v;
            },


绑定值
this.trainCategoryArr=classData.trainCategoryList;


如果没有匹配数据置空
  if(isEmpty(this.trainCategoryArr)){
      this.formData.trainCategoryId=""
  }


```
