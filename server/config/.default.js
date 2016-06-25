module.exports = {
  database: 'mongodb://localhost:27017/rtbm-db',
  secret: '',
  adminEmail: '',
  baseUrl: 'http://localhost:3000/',
  mailer: {
    from: 'no-reply@localhost',
    smtpConfig: {
      host: '',
      port: 465,
      secure: true,
      auth: {
        user: 'no-reply',
        pass: '',
      },
      tls: {
        rejectUnauthorized: false,
      },
    },
  },
};
