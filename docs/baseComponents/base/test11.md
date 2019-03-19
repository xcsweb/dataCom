# 下拉框
---
```
<el-form-item label="单位" ref="unit" prop="unit">
  <el-select v-model="formData.unit" placeholder="请选择">
      <el-option
      v-for="item in unit"
      :key="item.codeId"
      :label="item.codeDisplay"
      :value="item.codeValue">
      </el-option>
  </el-select>
 </el-form-item>

设置默认值
this.formData.unit=selectDefaultData(this.unit,"codeValue")

```