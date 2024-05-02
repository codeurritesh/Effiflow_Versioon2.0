module.exports.sendOTPTemplate = (otp, title) => (`
<!DOCTYPE html>
<html>
<head>
  <base target="_top">
</head>
<body>
  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:80%;padding:20px 0">
  <div style="border-bottom:5px solid #eee">
    <a href="" style="font-size:30px;color: #f7c800;text-decoration:none;font-weight:600">EffiFlow</a>
  </div>
  <p style="font-size:15px">Hello User,</p>
  <p>Thank you for choosing EffiFlow. Use this OTP to complete your Sign Up procedures and verify your account on EffiFlow.</p>
  <p>Remember, Never share this OTP with anyone.</p>
  <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
  <p style="font-size:15px;">Regards,<br />Team EffiFlow</p>
  <hr style="border:none;border-top:5px solid #eee" />
  <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
    <p>EffiFlow Inc</p>
  </div>
  </div>
  </div>
</body>
</html>
`);