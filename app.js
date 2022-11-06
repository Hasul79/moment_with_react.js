const moment = require ('moment')

const today = new Date()

// format today with day

let day = moment().format('dddd')
console.log(day)

// format today with DD/MM/YYYY

let myDate = moment(today).format('DD/MM/YYYY')
console.log(myDate)


// add 7 days to today

let add_days = moment(today).add(7,"days").format("DD/MM/YYYY");
console.log(add_days);

// 3. add 9 days to today

let addDays = moment(today).add(9, 'days').format('DD.MM.YYYY')
console.log(addDays)  //day+9. mount. year

//check if a date is valid

let a = moment('2018-13-23');
console.log(a.isValid());  //false

let x = moment('2018-12-12')
console.log(x.isValid());  //true

//get the end and start of the week

let today_y = moment();
const fromDate = today_y.startOf('week').format("DD.MMMM.YYYY");
const toDate = today_y.endOf('week').format("DD.MMMM.YYYY");
console.log({
    fromDate: fromDate,
    today : moment().format("DD.MMMM.YYYY"),
    toDate: toDate,
    });

 //make a custom date ('2019/06/01') and format it with MM DD YYYY

const date = new Date('2019.06.01');
const customDate= moment(date).format("DD/MMMM/YYYY");
console.log(customDate)