(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{507:function(e,t,n){"use strict";n.r(t);var i=n(1),a=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"时间（hh-mm）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间（hh-mm）","aria-hidden":"true"}},[this._v("#")]),this._v(" 时间（HH:mm）")]),this._v(" "),t("hr"),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('el-time-picker\n    v-model="item.startTime"\n    format="HH:mm"\n    @change="clearable(item,index)"\n    value-format="HH:mm"\n    placeholder="开始时间">\n</el-time-picker>\n&nbsp;&nbsp;&nbsp;\n<el-time-picker\n    v-model="item.endTime"\n    :disabled="item.startTime==\'\'||item.startTime==null"\n        :picker-options="{\n        selectableRange: item.startTime!=null?`${item.startTime}+\':00\' - 23:59:59`:\'\'\n    }"\n    format="HH:mm"\n    value-format="HH:mm"\n    placeholder="结束时间">\n</el-time-picker>\n\nclearable(item){\n      item.endTime="";\n    }\n\n\n')])])])])}],!1,null,null,null);t.default=a.exports}}]);