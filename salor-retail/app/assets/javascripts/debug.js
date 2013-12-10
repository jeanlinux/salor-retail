sr.fn.debug.echo = function(str) {
  if ( isSalorBin() && typeof Salor.echo != 'undefined' ) {
    Salor.echo(str);
  } else if (typeof console != 'undefined') {
    console.log(str);
  }
}

sr.fn.debug.ajaxLog = function(data) {
  $.ajax({
    url:'/orders/log',
    type:'post',
    data: data
  });
}

sr.fn.debug.sendEmail = function(subject, message) {
  console.log('send_email:', subject, message);
  message += "\n\nuser login: " + User.username;
  message += "\n\n" + navigator["userAgent"];
  $.ajax({
    type: 'post',
    url:'/session/email',
    data: {s:subject, m:message}
  })
}