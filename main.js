$(document).ready(function() {

  function startTime() {
    var today = new Date();
    var d = today.getDay();
    var md = today.getMonth();
    var y = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var months = md + 1;
    md = checkTime(months);

    var monthNames = [ 'January', 'February', 'March', 'April',
                        'May', 'June', 'July', 'August',
                        'September', 'October', 'November', 'December' ];


    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('dateTxt').innerHTML =
    days[d] + '  ' + md + '  ' + y;
    document.getElementById('timeTxt').innerHTML =
    h + ' : ' + m + ' : ' + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    }  // add zero in front of numbers < 10
    return i;
  }
  startTime();

});
