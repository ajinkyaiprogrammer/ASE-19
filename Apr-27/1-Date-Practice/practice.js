// let mSec=Date.parse("2012-03-21");
// console.log(mSec);

// let date =new Date(mSec);
// console.log(date);

// console.log(date.getDay());

let d = new Date();
Date.prototype.myMonth = function() {
  switch(this.getMonth()){
    case 0:
        console.log('jan');
        break;
    case 1:
        console.log('feb');
        break;
    case 2:
        console.log('mar');
        break;
    case 3:
        console.log('apr');
        break;
  }
};
d.myMonth();