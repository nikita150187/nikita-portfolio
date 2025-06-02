exports.sendEmail = (req, res) => {
  const { name, email, message } = req.body;
  // In real use: integrate with nodemailer or another email service
  console.log(`Received message from ${name} (${email}): ${message}`);
  res.status(200).json({ success: true, message: 'Message received' });
};
