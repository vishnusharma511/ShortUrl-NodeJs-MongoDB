const shortid = require("shortid");
const ejs = require("ejs");

const Url = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "Url is Required." });
  const shortUrl = shortid();
  await Url.create({
    originalUrl: body.url,
    shortUrl: shortUrl,
    visitHistory: [],
  });
  return res.json({
    shortUrl: shortUrl,
  });
}

async function handleShortUrlRedirect(req, res) {
  const shortUrl = req.params.shortUrl;
  const entry = await Url.findOneAndUpdate(
    {
      shortUrl,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
          ip: req.ip,
          userAgent: req.get("User-Agent"),
        },
      },
    }
  );
  res.redirect(entry.originalUrl);
}

async function handleAnalytics(req, res) {
  const shortUrl = req.params.shortUrl;
  const entry = await Url.findOne({ shortUrl });
  return res.json({
    totalClicks: entry.visitHistory.length,
    analytic: entry,
  });
}

async function handleGetAllShortUrl(req, res) {
  const data = await Url.find({});
  res.render("url/index", {
    urls: data,
  });
}

module.exports = {
  handleGenerateNewShortUrl,
  handleShortUrlRedirect,
  handleAnalytics,
  handleGetAllShortUrl,
};
