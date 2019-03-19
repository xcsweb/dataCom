# 日期组件
---
```
<el-form-item label="出生日期" ref="birthDt" prop="birthDt">
      <el-date-picker
        v-model="formData.birthDt"
        type="date"
        :editable="false"
        value-format="timestamp"
        placeholder="选择日期"
    >
    </el-date-picker>
</el-form-item>

```

```
<el-date-picker
  v-model="date"
  @change="dateChange"
  type="daterange"
  :unlink-panels="true"
  :style="{width:'300px'}"
  range-separator="-"
  start-placeholder="开始日期"
  end-placeholder="结束日期"
  value-format="timestamp"
  :default-time="['00:00:00', '23:59:59']"
  >
  </el-date-picker>

  dateChange(){
      setTimeout(()=>{
          this.$refs["date"].clearValidate()
      })
  }

```
