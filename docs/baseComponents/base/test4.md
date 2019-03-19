# 富文本编辑器
---
```
新增
<Editor :text="'教学内容描述'" ref="form3" :isCheck="false"></Editor>

编辑
<Editor :text="'教学内容描述'" :editContent="formData.teachContent" ref="form3" :isCheck="false"></Editor>
Editor 组件
name: 'editor',
        props:{
            value: { // 必须要使用value
    　　　　　default: '',
    　　　　 },
            editContent:String,
            text:String,
            isCheck:Boolean //是否需要验证
        },
提交
this.$refs["form3"].submit((valid,data)=>{
                    validArr.push(valid)
                    formData.des=data.content
                })


支持双向绑定
<Editor :text="'内容'" v-model="formData1.des" :editContent="formData1.des" ref="form3" :isCheck="false"></Editor>

提交
this.$refs["form3"].submit((valid,data)=>{
        this.formData.teachingEvaluate=data.content;
      })


```