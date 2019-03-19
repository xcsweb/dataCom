# 单选框
---
```
<el-radio-group v-model="radio2">
  <el-radio :label="3">备选项</el-radio>
  <el-radio :label="6">备选项</el-radio>
  <el-radio :label="9">备选项</el-radio>
</el-radio-group>

```
# 数据字典 单选框组
```
<el-radio-group v-model="formData1.followType">
  <el-radio v-for="item in followType" :label="item.codeValue" :key="item.codeId">{{item.codeDisplay}}</el-radio>
</el-radio-group>

```