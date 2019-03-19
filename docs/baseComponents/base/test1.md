# 培训类别
---
```
1	TrainingCategory 培训类别
2	添加页:
3	<TrainingCategory ref="form2" :trainsData="trainCampusAllData"></TrainingCategory>
4	一般使用，props
 trainsData 接受
data()里面
trainCampusAllData:{},
一般根据城市/校区获得
methods
  getCampusIds(v){
                this.getfindrolebycampus(v).then((res)=>{
                    this.roleIds=res;
                    this.trainCampusAllData={campusIds:v.campusIds.toString()};
                })
            },


props:{
            trainCategoryIdsData:String,//编辑时调用
            trainsData:Object,//关联时调用,主要是按照校区分
            radio:Boolean,//单选框
            label:String,//修改标题名称,
            all:{
                type:Boolean,
                default:false
            }// 按照校区分为false,不按校区分为true,默认为false
        },
修改页
<TrainingCategory ref="form2" v-show="leaveCntRadio==2" :trainCategoryIdsData="trainCategoryIds" :trainsData="trainCampusAllData"></TrainingCategory>

培训类别支持双向绑定
<TrainingCategory label="报名类别" v-model="trainArr" v-on:trainCategoryIdData="getTrainCategoryIdArrFn" :trainsData="trainCampusAllData"></TrainingCategory>

trainCampusAllData:{}

和校区联动
getCampusIds(v){
                this.trainCampusAllData={campusIds:v.campusIds.toString()};
                this.findClassByCampusClass(v.campusIds.toString()).then((res)=>{
                   
                })
                //重置卡种
                this.tableData=[];
                this.trainArr=[];

 props:{
            trainCategoryIdsData:String,//编辑时调用
            trainsData:Object,//关联时调用,主要是按照校区分
            radio:Boolean,//单选框
            label:String,//修改标题名称,
            value:{
                type:Array,
                default:function(){
                    return []
                }
            },
            all:{
                type:Boolean,
                default:false
            },// 按照校区分为false,不按校区分为true,默认为false
        },


getTrainCategoryIdArrFn(v){
    this.tableData=[];
    this.indexArr=[];
    this.price=0;
    this.formData.courseTrainVoList=[];
    this.getFindCourseData(v.toString()).then((res)=>{
        
    })

}


```