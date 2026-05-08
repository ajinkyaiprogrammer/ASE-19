const { Temporal } = require("@js-temporal/polyfill");


//duration
// const today=Temporal.Duration.from({days:2 ,hours:7});
// console.log(today.toString());                          //P2DT7H

//duration
// const today=Temporal.Duration.from({years:5 ,days:2 ,hours:7});
// console.log(today.toString());                          //P5Y2DT7H

//instant
// const today=Temporal.Instant.from('2026-05-14T12:23:00z');
// console.log(today.toString());                          //2026-05-14T12:23:00Z

//plain date time
// const today=Temporal.PlainDateTime.from('2026-05-14T12:23:00');
// console.log(today.toString());                         //2026-05-14T12:23:

//plain date
// const today=Temporal.PlainDate.from('2026-05-14T12:23:00');
// console.log(today.toString());                        //2026-05-14

//plain time
// const today=Temporal.PlainTime.from('2026-05-14T12:23:00');
// console.log(today.toString());                       //12:23:00

//plain year month
// const today=Temporal.PlainYearMonth.from('2026-05-14T12:23:00');
// console.log(today.toString());                      //2026-05

//plain month day
// const today=Temporal.PlainMonthDay.from('2026-05-14T12:23:00');
// console.log(today.toString());                     //05-14

//zoned date time
// const today = Temporal.ZonedDateTime.from({
//   timeZone: "Asia/Calcutta",
//   year: 2026,
//   month: 4, // May
//   day: 27,
//   hour: 15,
//   minute: 30,
//   second: 0,
//   millisecond: 0,
//   microsecond: 0,
//   nanosecond: 500,
// });
// console.log(today.toString());                      //2026-04-27T15:30:00.0000005+05:30[Asia/Kolkata]

//now
// const today=Temporal.Now.instant();
// console.log(today.toString());                     //2026-04-27T10:12:30.240750216Z

//change date
// const today = Temporal.Now.plainDateISO();
// console.log(today.toString());
// const nextWeek= today.add({days:7});
// console.log(nextWeek.toString());
// console.log(today.toString());

//until
// const start = Temporal.PlainDate.from("2026-05-01");
// const end = Temporal.PlainDate.from("2026-05-17");
// const diff = start.until(end);
// console.log(diff.toString());                    //P16D

//duration using iso string
// const duration = Temporal.Duration.from("P7DT2H");
// console.log(duration.toString());               //P7DT2H

//add method() in duration
// const d1 = Temporal.Duration.from({ hours:2, minutes:30 });
// const d2 = d1.add({ days:1,hours:1, minutes:30 });
// console.log(d2.toString());                     //P1DT4H

//subtract method()
// const d1 = Temporal.Duration.from({ hours:2, minutes:30 });
// const d2 = d1.subtract({ minutes:30 });
// console.log(d2.toString());                     //PT2H

//compare method()=> 0 when both equal, 1 when 1st is greater, -1 when 2nd is greater
// const d1 = Temporal.Duration.from({ hours:1, minutes:30 });
// const d2 = Temporal.Duration.from({ minutes:80 });
// let result = Temporal.Duration.compare(d1, d2);
// console.log(result);                           //1

//with method()
// const duration = Temporal.Duration.from({hours:10, minutes:30});
// Create a new duration with the minutes changed to 45
// const newDuration = duration.with({minutes:45});
// console.log(newDuration.toString());          //PT10H45M  

