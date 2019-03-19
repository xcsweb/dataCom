# 筛选
---
```
<FilterBar link="search/findcsc" v-on:searchData="search" defaultEmit>
    <el-button class="add" size="small" round @click="addCampusBranch()">新增校区/分馆</el-button>
</FilterBar>

//引入筛选组件
import FilterBar from "common/FilterBar";

//引入触发方法
import {filterSearch} from "assets/js/mixin";
mixins:[ filterSearch],

//引入获取触发的结果
import {filterMenu} from "assets/js/mixin";
mixins:[filterMenu]


```
# 单独使用
```
search(v){
    this.$parent.$emit("searchData1", v)
},
this.filterMenu()

filterMenu() {
    console.log(this)
    this.$parent.$on('searchData', (v) => {
        console.log(v)
        this.offset = 0;
        if (type(this.$refs.pagination) === "undefined") {
            console.error("请检查pagination的ref是否存在")
            return
        }
        this.$refs.pagination.reset()
        this.searchData = {...v }
        this.getTableData(v)
    });
}

```