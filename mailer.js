var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'darnesh.p.thejas@gmail.com',
    pass: 'doddajatakaganesha'
  }
});

var mailOptions = {
  from: 'darnesh.p.thejas@gmail.com',
  to: 'kadamvarun02@gmail.com',
  subject: 'Your CAR ready to be Delivered After Service!!',
  html: '<h1>Your Bill!!!!</h1><table border=1><tr><td>Vehicle ID</td><td>ServiceType</td><td>Charges</td><td>Labour Charges</td><td>Total Charges</td></tr><tr><td>KA00AA1143</td><td>BOdy_wash+Polishing</td><td>Rs.12000/-</td><td>Rs.8000</td><td>Rs.20000/-</td></tr></table>'

};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
