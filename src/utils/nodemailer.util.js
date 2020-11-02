const nodemailer = require("nodemailer");
const smtpTransporter = require("nodemailer-smtp-transport");

const mailer = {
verify: ({adminId,hashPassword}) =>{
  let result
  var smtpTransport = nodemailer.createTransport(
    smtpTransporter({
      service: "gmail",
  
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD,
      }
    })
  ); 
  var mailOptions={
    from: "Do not Reply <inuclub.appcenter@gmail.com>",
    to: adminId+"@inu.ac.kr",
    subject: "INU App Center 계정 인증메일입니다.",
    html:"<a href='http://localhost:9000/admin/auth/signup?adminId="+adminId+"&password="+hashPassword+"'>링크를 클릭하십시오</a>"
  };
  return new Promise(function(resolve, reject) {
  smtpTransport.sendMail(mailOptions,function (error, info) {
    if (error) {
      reject(error);
    } else {
     
      resolve(info);
    }
  });
 }
  ).then((state) => {
    return true // 메일을 성공적으로 발송했을 때
  })
  .catch((error) => {
    return false // adminId@inu.ac.kr이 없을 때
  });
}
}
module.exports=mailer