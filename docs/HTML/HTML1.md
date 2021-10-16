---
sidebar_position: 1
---
HTML1

```js
const sheetsExpand = _.map(sheets, ({ process_task_commands, ...other }) => ({
    process_task_commands: _.map(
      mergeData(process_task_commands! as ProcessTaskCommand[]),
      ({
        target_customer_id,
        target_route_id,
        process_task_id,
        processor,
        inputs,
        ...commandOther
      }) => {
        const processTaskInfo = process_task_details![process_task_id!]
        const finishProductSkuId = commandOther.main_output!.material?.sku_id!
        const finishProductSku = skus![finishProductSkuId].sku
        // 是否多物料
        const isCommand = inputs!.inputs!.length >= 2
```

