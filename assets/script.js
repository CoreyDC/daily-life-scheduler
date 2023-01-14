// Code to display the current date in the header of the page.
let date = dayjs().format('MMM D, YYYY');
let time = dayjs().format('hh:mm a');
$('#currentDay').text(`${date} - ${time}`);


// Code that gets the hour using Day.JS from 1-24, and gets each textarea from class in HTML
// Then uses if else statements for each to apply the proper past, present or future class
let hour = dayjs().format('H');
console.log(hour);
let hourNine = $('.h9');
let hourTen = $('.h10');
let hourEleven = $('.h11');
let hourTwelve = $('.h12');
let hourThirteen = $('.h13');
let hourFourteen = $('.h14');
let hourFifteen = $('.h15');
let hourSixteen = $('.h16');
let hourSeventeen = $('.h17');

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


// Saving click of save button to local storage
let saveButton = $('.saveBtn');
let userInput = $('.description');
saveButton.on('click', function() {
  localStorage.setItem("task", userInput);
});

console.log(localStorage);