(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{505:function(e,n,a){"use strict";a.r(n);var s=a(1),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"模糊匹配销售"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模糊匹配销售","aria-hidden":"true"}},[e._v("#")]),e._v(" 模糊匹配销售")]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<el-form-item label="销售" ref="salesNameLike" prop="salesNameLike">\n    <el-autocomplete\n    v-model="salesNameLike"\n    @input="salesInput"\n    @blur="salesBlur"\n    @select="handleSelectSales"\n    :fetch-suggestions="querySearchAsyncSales"\n    placeholder="请输入销售名字"\n    :debounce="500"\n    ></el-autocomplete>\n</el-form-item>\n\nsalesBlur(){\n    if(this.formData.saleMemberId===0||this.formData.saleMemberId===""){\n        this.salesNameLike=""\n    }\n},\nsalesInput(){\n    this.formData.saleMemberId=0\n},\nhandleSelectSales(v){\n    this.formData.saleMemberId=v.memberId;\n},\n\n\nquerySearchAsyncSales(queryString, cb){\n    //模糊匹配选择销售\n    this.salesList = [];\n    this.getMemberId(queryString).then((res)=>{\n        res.data.forEach((element)=>{\n            this.salesList.push({value:element.name+\'　　\'+element.tel,memberId:element.memberId})\n        })\n        cb(this.salesList); \n    })\n},\n\n')])])]),a("h1",{attrs:{id:"模糊匹配教练"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模糊匹配教练","aria-hidden":"true"}},[e._v("#")]),e._v(" 模糊匹配教练")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<el-autocomplete\nv-model="a.coachNameLike"\n:fetch-suggestions="querySearchAsyncCoach"\nplaceholder="请输入老师"\n@select="(v)=>handleSelectCoach(v,index,b)"\n:debounce="500"\n></el-autocomplete>\n\nhandleSelectCoach(v, index, b) {\n    //选择教练\n    console.log(index, b);\n    this.formData.classesTimeList[index].classesTimeTeacherList[b].memberId =\n    v.memberId;\n}\n\nquerySearchAsyncCoach(queryString, cb) {\n      //模糊匹配选择教练\n      this.coachList = [];\n      this.getMemberId({\n        nameLike: queryString,\n        trainCategoryIdsNotEqualNull: 1\n      }).then(res => {\n        res.data.forEach(element => {\n          this.coachList.push({\n            value: element.name+’ 　　’+element.tel,\n            memberId: element.memberId\n          });\n        });\n        cb(this.coachList);\n      });\n    },\n\n\ngetMemberId(data = {}) {\n      return new Promise((resolve, reject) => {\n        this.$axios.post({\n          url: baseURL + "member/find",\n          data: {\n            ...data\n          },\n          success: res => {\n            resolve(res);\n          }\n        });\n      });\n    },\n\n\n')])])]),a("h1",{attrs:{id:"失去焦点或改变时清空输入框信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#失去焦点或改变时清空输入框信息","aria-hidden":"true"}},[e._v("#")]),e._v(" 失去焦点或改变时清空输入框信息")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@input="salesInput"\n@blur="salesBlur"\n\nsalesInput(){\n    this.formData.saleMemberId=0;\n},\nsalesBlur(){\n    if(this.formData.saleMemberId===0||this.formData.saleMemberId===""){\n        this.salesNameLike=""\n    }\n},\n\n')])])])])}],!1,null,null,null);n.default=t.exports}}]);