---
sidebar_position: 3
---

### add

- `monment(x).add(num,str)`通过添加时间来改变原始时刻

- `moment().add(7, 'd').add(3,'month');`

- | Key          | Shorthand |
  | :----------- | :-------- |
  | years        | y         |
  | quarters     | Q         |
  | months       | M         |
  | weeks        | w         |
  | days         | d         |
  | hours        | h         |
  | minutes      | m         |
  | seconds      | s         |
  | milliseconds | ms        |

  从**2.12.0 开始，**当为天和月传递十进制值时，它们会四舍五入为最接近的整数。周、季度和年将转换为天或月，然后四舍五入为最接近的整数。

  ```javascript
  moment().add(1.5, 'months') == moment().add(2, 'months')
  moment().add(.7, 'years') == moment().add(8, 'months') //.7*12 = 8.4, rounded to 8
  ```

### subtract减去

- `moment().subtract(Number, String);`
- 与add相同，支持简写，小数要四舍五入

### startOf[时间开始](https://momentjs.com/docs/#/manipulating/start-of/)

- `moment().startOf(String);`

- 通过将其设置为时间单位的开始来改变原始时刻。

- ```js
  moment().startOf('year');    // set to January 1st, 12:00 am this year
  moment().startOf('month');   // set to the first of this month, 12:00 am
  moment().startOf('quarter');  // set to the beginning of the current quarter, 1st day of months, 12:00 am
  moment().startOf('week');    // set to the first day of this week, 12:00 am
  moment().startOf('isoWeek'); // set to the first day of this week according to ISO 8601, 12:00 am
  moment().startOf('day');     // set to 12:00 am today
  moment().startOf('date');     // set to 12:00 am today
  moment().startOf('hour');    // set to now, but with 0 mins, 0 secs, and 0 ms
  moment().startOf('minute');  // set to now, but with 0 seconds and 0 milliseconds
  moment().startOf('second');  // same as moment().milliseconds(0);
  ```

- 这些快捷方式与以下内容基本相同。

  ```js
  moment().startOf('year');
  moment().month(0).date(1).hours(0).minutes(0).seconds(0).milliseconds(0);
  moment().startOf('hour');
  moment().minutes(0).seconds(0).milliseconds(0)
  ```

### endOf 时间结束

- `moment().endOf(String);`
- 通过将原始时刻设置为时间单位的末尾来改变原始时刻。

### isBefore在什么之前

- ```js
  moment().isBefore(Moment|String|Number|Date|Array);
  moment().isBefore(Moment|String|Number|Date|Array, String);
  ```

- ```javascript
  moment('2010-10-20').isBefore('2010-10-21'); // true
  ```

- 第二个参数决定精度

- ```javascript
  moment('2010-10-20').isBefore('2010-12-31', 'year'); // false
  moment('2010-10-20').isBefore('2011-01-01', 'year'); // true
  ```

- 

