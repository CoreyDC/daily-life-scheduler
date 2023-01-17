// Variables that store the date and time through Day.js
let date = dayjs().format('MMM D, YYYY');
let time = dayjs().format('hh:mm a');
let hour = dayjs().format('H');


// Variables that select and store the text area for each hour
let hourNine = $('.h9');
let hourTen = $('.h10');
let hourEleven = $('.h11');
let hourTwelve = $('.h12');
let hourThirteen = $('.h13');
let hourFourteen = $('.h14');
let hourFifteen = $('.h15');
let hourSixteen = $('.h16');
let hourSeventeen = $('.h17');


// Variables that select and store the save button for each hour
let saveButton9 = $('.btn9');
let saveButton10 = $('.btn10');
let saveButton11 = $('.btn11');
let saveButton12 = $('.btn12');
let saveButton13 = $('.btn13');
let saveButton14 = $('.btn14');
let saveButton15 = $('.btn15');
let saveButton16 = $('.btn16');
let saveButton17 = $('.btn17');


// Variables that select and store the remove button for each hour
let rmvBtn9 = $('.rmv9');
let rmvBtn10 = $('.rmv10');
let rmvBtn11 = $('.rmv11');
let rmvBtn12 = $('.rmv12');
let rmvBtn13 = $('.rmv13');
let rmvBtn14 = $('.rmv14');
let rmvBtn15 = $('.rmv15');
let rmvBtn16 = $('.rmv16');
let rmvBtn17 = $('.rmv17');


// Code to display the current date in the header of the page
$('#currentDay').text(`${date} - ${time}`);


// Code that gets the hour using Day.JS from 1-24, and gets each textarea from class in HTML
// Then uses if else statements for each to apply the proper past, present or future class
if ( 9 == hour ) {
  hourNine.addClass('present');
} else if ( 9 < hour ) {
  hourNine.addClass('past');
} else {
  hourNine.addClass('future');
}


if ( 10 == hour ) {
  hourTen.addClass('present');
} else if ( 10 < hour ) {
  hourTen.addClass('past');
} else {
  hourTen.addClass('future');
}


if ( 11 == hour ) {
  hourEleven.addClass('present');
} else if ( 11 < hour ) {
  hourEleven.addClass('past');
} else {
  hourEleven.addClass('future');
}


if ( 12 == hour ) {
  hourTwelve.addClass('present');
} else if ( 12 < hour ) {
  hourTwelve.addClass('past');
} else {
  hourTwelve.addClass('future');
}


if ( 13 == hour ) {
  hourThirteen.addClass('present');
} else if ( 13 < hour ) {
  hourThirteen.addClass('past');
} else {
  hourThirteen.addClass('future');
}


if ( 14 == hour ) {
  hourFourteen.addClass('present');
} else if ( 14 < hour ) {
  hourFourteen.addClass('past');
} else {
  hourFourteen.addClass('future');
}


if ( 15 == hour ) {
  hourFifteen.addClass('present');
} else if ( 15 < hour ) {
  hourFifteen.addClass('past');
} else {
  hourFifteen.addClass('future');
}


if ( 16 == hour ) {
  hourSixteen.addClass('present');
} else if ( 16 < hour ) {
  hourSixteen.addClass('past');
} else {
  hourSixteen.addClass('future');
}


if ( 17 == hour ) {
  hourSeventeen.addClass('present');
} else if ( 17 < hour ) {
  hourSeventeen.addClass('past');
} else {
  hourSeventeen.addClass('future');
}


// Code to add a click event to save button, save tasks local storage and render it to text area after page is refreshed
saveButton9.on('click', function() {
  localStorage.setItem('task9', hourNine.val());
});
hourNine.val(localStorage.getItem('task9'));


saveButton10.on('click', function() {
  localStorage.setItem('task10', hourTen.val());
});
hourTen.val(localStorage.getItem('task10'));


saveButton11.on('click', function() {
  localStorage.setItem('task11', hourEleven.val());
});
hourEleven.val(localStorage.getItem('task11'));


saveButton12.on('click', function() {
  localStorage.setItem('task12', hourTwelve.val());
});
hourTwelve.val(localStorage.getItem('task12'));


saveButton13.on('click', function() {
  localStorage.setItem('task13', hourThirteen.val());
});
hourThirteen.val(localStorage.getItem('task13'));


saveButton14.on('click', function() {
  localStorage.setItem('task14', hourFourteen.val());
});
hourFourteen.val(localStorage.getItem('task14'));


saveButton15.on('click', function() {
  localStorage.setItem('task15', hourFifteen.val());
});
hourFifteen.val(localStorage.getItem('task15'));


saveButton16.on('click', function() {
  localStorage.setItem('task16', hourSixteen.val());
});
hourSixteen.val(localStorage.getItem('task16'));


saveButton17.on('click', function() {
  localStorage.setItem('task17', hourSeventeen.val());
});
hourSeventeen.val(localStorage.getItem('task17'));


// Code to add a click event to remove button, and remove tasks from local storage and the page
rmvBtn9.on('click', function() {
  localStorage.removeItem('task9');
  hourNine.val("");
});


rmvBtn10.on('click', function() {
  localStorage.removeItem('task10');
  hourTen.val("");
});


rmvBtn11.on('click', function() {
  localStorage.removeItem('task11');
  hourEleven.val("");
});


rmvBtn12.on('click', function() {
  localStorage.removeItem('task12');
  hourTwelve.val("");
});


rmvBtn13.on('click', function() {
  localStorage.removeItem('task13');
  hourThirteen.val("");
});


rmvBtn14.on('click', function() {
  localStorage.removeItem('task14');
  hourFourteen.val("");
});


rmvBtn15.on('click', function() {
  localStorage.removeItem('task15');
  hourFifteen.val("");
});


rmvBtn16.on('click', function() {
  localStorage.removeItem('task16');
  hourSixteen.val("");
});


rmvBtn17.on('click', function() {
  localStorage.removeItem('task17');
  hourSeventeen.val("");
});