import nodemailer from "nodemailer";

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "muhammedmashady@gmail.com",
      pass: "hroe lttg maap egzj",
    },
  });

  const mailOptions = {
    from: "muhammedmashady@gmail.com",
    to: email,
    subject: "Confirm your email",
    html: `
            <p>click <a href=${confirmLink}>here</a> to confirm your email. </p>       
            `,
  };
  await transporter.sendMail(mailOptions);
};
