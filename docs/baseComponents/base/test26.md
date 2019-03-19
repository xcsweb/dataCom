# 时间（HH:mm）
---
```
el-time-picker
    v-model="item.startTime"
    format="HH:mm"
    @change="clearable(item,index)"
    value-format="HH:mm"
    placeholder="开始时间">
</el-time-picker>
&nbsp;&nbsp;&nbsp;
<el-time-picker
    v-model="item.endTime"
    :disabled="item.startTime==''||item.startTime==null"
        :picker-options="{
        selectableRange: item.startTime!=null?`${item.startTime}+':00' - 23:59:59`:''
    }"
    format="HH:mm"
    value-format="HH:mm"
    placeholder="结束时间">
</el-time-picker>

clearable(item){
      item.endTime="";
    }


```