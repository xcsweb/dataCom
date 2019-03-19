# dialog 和form表单组件
---
```
<el-dialog
      title="提示"
      width="40%"
      :visible="dialogVisible"
      >
      <el-form :model="formData" :rules="rules" size="medium" ref="formData" label-width="200px" label-position="left" class="demo-ruleForm" :validate-on-rule-change="false">
        <el-form-item label="项目" ref="trainCategoryId" prop="trainCategoryId" >
            <el-select v-model="formData.trainCategoryId" placeholder="请选择">
                <el-option
                v-for="item in traincategory"
                :key="item.id"
                :label="item.name"
                :value="item.id">
                </el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="考试等级" ref="level" prop="level">
          <el-input v-model="formData.level" placeholder="考试等级"></el-input>
        </el-form-item>
        <el-form-item label="晋级时间" ref="promotionDt" prop="promotionDt">
           <el-date-picker
            v-model="formData.promotionDt"
            type="date"
            value-format="timestamp"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
         <el-form-item label="证书编号" ref="certNum" prop="certNum">
          <el-input v-model="formData.certNum" placeholder="证书编号"></el-input>
        </el-form-item>
        <el-form-item label="考官姓名" prop="examinerName">
          <el-input v-model="formData.examinerName" placeholder="考官姓名"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </span>
    </el-dialog>


```