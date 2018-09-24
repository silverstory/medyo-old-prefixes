const express = require('express');
const router = express.Router();
const passport = require('passport');
const sms8888Service = require('../services/sms8888.service');

router.get('/sms', async (req, res, next) => {
  const token = await req.query.token;
  const number = await req.query.number;
  const message = await req.query.message;
  await sms8888Service.sendSMS(token, number, message);
});

module.exports = router;
