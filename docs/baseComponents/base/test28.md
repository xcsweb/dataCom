# validateForm 的使用方法
---
```
submitForm() {
      let formData = {},
        promptArr = [];
      formData = Object.assign(formData, this.formData);
      if (formData.memberIds.length == 0 && formData.studentIds.length == 0) {
        promptArr.push({
          label: "学员和员工",
          message: "二选一",
          sort: -1
        });
      } else {
        formData.memberIds = formData.memberIds.toString();
        formData.studentIds = formData.studentIds.toString();
      }
      if (
        formData.imgfiles === "" &&
        formData.vodfiles === "" &&
        formData.content === ""
      ) {
        promptArr.push({
          label: "图片和上传视频和内容",
          message: "三选一",
          sort: 0
        });
      }
      if (formData.sendDt != "") {
        formData.sendDt = formData.sendDt / 1000;
      }
      formData.id = this.$route.query.id;
      validateForm({
        form: this.$refs["formData"],
        formData: formData,
        url: "notice/edit",
        promptArr: promptArr
      });
    },
```