const express = require("express");

const { handleGenerateNewShortUrl, handleShortUrlRedirect, handleAnalytics, handleGetAllShortUrl } = require("../controllers/url");

const router = express.Router();

router.get('/index',handleGetAllShortUrl);

router.post("/", handleGenerateNewShortUrl);
router.get('/analytics/:shortUrl', handleAnalytics);
router.get('/:shortUrl', handleShortUrlRedirect);






module.exports = router;