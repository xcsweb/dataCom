# 查看内容
---
```
<el-button
    size="mini" @click="viewEvalute(scope.row)">查看内容
</el-button>

<el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose">
      <el-form ref="formData" :model="formData" label-width="200px" label-position="left">
         <el-form-item label="综合评分">
          <el-rate v-model="formData.performance" :disabled="true"></el-rate>
         </el-form-item>
          <el-form-item label="内容">
           <div v-html="formData.evaluate"></div>
         </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </span>
    </el-dialog>


viewEvalute(row){
      this.dialogVisible=true;
      this.formData={
        evaluate:row.evaluate,
        performance:row.performance
      };
},


formData:{
    evaluate:""
},

```