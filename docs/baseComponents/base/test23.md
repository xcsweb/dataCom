# 引入公共验证
---

```
 import {validatePhone,validateCard,validateIdCard,validateAccount} from 'assets/js/vuelidate';
computed:{
            validatePhone(){
                return validatePhone;
            },
            validateIdCard(){
                return validateIdCard;
            }
        },

rules:{
        sort:[
          {
            required:true,message:"必填",trigger:"blur"
          },
          {
            validator:validateNumber
          }
        ]
      }


```
# 手动校验
```
var validateContackName = (rule, value, callback) => {
        if(this.formData.pic.length>0){
            callback();
        }else {
            callback(new Error('必填'));
        } 
    };


```
