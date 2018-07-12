const express = require('express');
const router = express.Router();
const passport = require('passport');
const ipwhitelistService = require('../services/ipwhitelist.service');

// FIND
router.get('/ipwhitelist/:text', passport.authenticate('jwt',{session:false}), async (req, res, next) => {
  ipwhitelistService.findIpwhitelist(req, res, next);
});

// GET by IP
router.get('/ipwhitelist/c/:ip', async (req, res, next) => {
  ipwhitelistService.findIpwhitelistByIp(req, res, next);
});

// GET
router.get('/ipwhitelist/get/:id', passport.authenticate('jwt',{session:false}), async (req, res, next) => {
  ipwhitelistService.getIpwhitelist(req, res, next);
});

// ADD or EDIT
router.post('/ipwhitelist', passport.authenticate('jwt',{session:false}), async (req, res, next) => {
  ipwhitelistService.postIpwhitelist(req, res, next);
});

// DELETE
router.delete('/ipwhitelist', passport.authenticate('jwt',{session:false}), async (req, res, next) => {
  ipwhitelistService.deleteIpwhitelistByIp(req, res, next);
});

module.exports = router;
