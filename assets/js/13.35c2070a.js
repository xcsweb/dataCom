(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{535:function(e,t,n){"use strict";n.r(t);var s=n(1),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"批量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批量","aria-hidden":"true"}},[this._v("#")]),this._v(" 批量")]),this._v(" "),t("hr"),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<el-button class=\"remove\" v-if=\"deleteIdData.length>0\" @click=\"removeAll()\">批量删除</el-button>\n\n.remove{\n      margin-top:20px;\n    }\n\nremoveAll(){\n      let teachCourseIds=[];\n      this.deleteIdData.forEach((element)=>{\n          teachCourseIds.push(element.teachCourseId)\n      })\n      return new Promise((resolve,reject)=>{\n         this.$confirm('确定删除', '提示', {\n          confirmButtonText: '确定',\n          cancelButtonText: '取消',\n          type: 'warning'\n        }).then(() => {\n         this.$axios.post({\n          url:baseURL+\"teachmodel/delete\",\n          data:{\n            teachCourseIds:teachCourseIds.toString()\n          },\n          success:(res)=>{\n             this.$message({\n              message: res.message || \"修改成功\",\n              type: \"success\"\n            });\n            this.getTableData()\n          }\n        })\n        }).catch(() => {\n          this.$message({\n            type: 'info',\n            message: '已取消删除'\n          });          \n        });\n      })\n    },\n\n")])])])])}],!1,null,null,null);t.default=a.exports}}]);