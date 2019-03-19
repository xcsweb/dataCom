# 新版模糊匹配
---
```
//选择教练老师
<SearchTeacher :nameLike="a.coachNameLike" v-model="a.memberId" :editSearchOpt="true" :searchOpt="searchOptFn"></SearchTeacher>
searchOptFn(v){
      return { 
        nameLike: v,
        trainCategoryIdFind:this.formData.trainCategoryId,
        campusIdFind:this.formData.campusId
      }
    },

```