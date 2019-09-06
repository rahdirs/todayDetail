# Today Date Detail

Get current date, month and year details using javascript by NPM package.

### Install
~~~
npm install today-date-detail
~~~

### Usage
```javascript
var jdate = require('./node_modules/today-date-detail');
console.log(jdate.today());
```

### Output Object
```
{ 
  date: 6,
  month: 9,
  year: 2019,
  dateFormat: "06-09-2019",
  day: 5,
  dayShortName: "Fri",
  dayFullName: "Friday",
  days: 30,
  monthName: "September",
  monthStartDay: 0,
  monthEndDay: 1,
  today: Fri Sep 06 2019 18:50:30 GMT+0530 (India Standard Time)
}
  ```