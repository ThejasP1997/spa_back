/* Client-Secret Downloaded from Google Development */
var clientSecret = {
    installed: {
        client_id:"189334571116-0teohgv22ri50alhf0ec7f5asv97o4oj.apps.googleusercontent.com",
        project_id:"southern-range-212107",
        auth_uri:"https://accounts.google.com/o/oauth2/auth",
        token_uri:"https://www.googleapis.com/oauth2/v3/token",
        auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
        client_secret:"QYhw6N9SJzCO3rYws6l9likE",
        redirect_uris: [
            "urn:ietf:wg:oauth:2.0:oob",
            "http://localhost"
        ]
    }
};

var gmailNode = require('gmail-node');

// Message
var testMessage = {
    to: 'darneshthejas.p@gmail.com',
    subject: 'Test Subject',
    message: '<h1>Test Email</h1>'
};

gmailNode.generateToken(clientSecret);

gmailNode.generateToken(clientSecret, '4/bZ94wJNeLj4b1nZ0nUhQ7fbqfjIYd4basm_GuG3br2s',(err, data)=>{
    console.log(err || data)
});


gmailNode.sendWithToken(testMessage, clientSecret, '4/bZ94wJNeLj4b1nZ0nUhQ7fbqfjIYd4basm_GuG3br2s',function (err, data) {
    console.log(err,data);
});
gmailNode.sendHTMLWithToken(testMessage, clientSecret, '4/bZ94wJNeLj4b1nZ0nUhQ7fbqfjIYd4basm_GuG3br2s',function (err, data) {
    console.log(err,data);
});


// ClientSecret:
gmailNode.init(clientSecret, './token.json', initComplete);

function initComplete(err, dataObject) {
    if(err){
        console.log('Error ', err);
    }else {
        gmailNode.send(testMessage, function (err, data) {
            console.log(err,data);
        });

        // OR

        gmailNode.sendHTML(testMessage, function (err, data) {
            console.log(err,data);
        });
    }
}
gmailNode.clearToken();
