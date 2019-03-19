# Table 过滤
---
```
<template slot-scope="scope">
  <span v-for="item in trainCategory" :key="item.id">
    <span v-if="scope.row.trainCategoryId==item.id">
      {{item.name}}
    </span>
  </span>
</template>

```