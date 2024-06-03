import nodemailer from "nodemailer";

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/new-verification?token=${token}`;

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

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`;

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
            <p>click <a href=${resetLink}>here</a> to confirm your email. </p>       
            `,
  };
  await transporter.sendMail(mailOptions);
};

export const sendTwoFactorTokenMail = async (email: string, token: string) => {
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
            <p>${token}. </p>       
            `,
  };
  await transporter.sendMail(mailOptions);
};
