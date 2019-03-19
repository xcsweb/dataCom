# 多选框
---
```
<el-checkbox-group v-model="checkList">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
  </el-checkbox-group>


```
# 数据字典
```
<el-form-item label="单位" ref="unit" prop="unit">
    <el-checkbox-group v-model="formData.unit">
        <el-checkbox v-for="item in unit" :label="item.codeValue"  :key="item.codeId">{{item.codeDisplay}}</el-checkbox>
    </el-checkbox-group>
</el-form-item>
```