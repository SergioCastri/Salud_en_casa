const nodemailer = require('nodemailer');

module.exports.sendMail =function(mail,pass) {
    console.log(pass);
    
    const output ='<p>La contraseña para tu sesion es: </p>'+'<h3>'+pass+'</h3>'+'<h3> Por favor ingresar y cambiarla por tu seguridad<h3>';
        
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'ingweb123@gmail.com', // generated ethereal user
            pass: '12ingweb34'  // generated ethereal password
        },
        tls:{
          rejectUnauthorized:false
        }
      });
    
      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Salud_En_Casa" <ingweb123@gmail.com>', // sender address
          to: mail, // list of receivers
          subject: 'Varificacion de cuenta', // Subject line
          text: 'Hello world?', // plain text body
          html: output // html body
      };
    
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);   
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
      });


}