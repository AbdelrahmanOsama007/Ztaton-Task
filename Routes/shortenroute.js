// routes/shortenRoutes.js
const express = require("express");
const shortenController = require("../Controllers/shortenController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: URL Shortener
 *   description: API for shortening URLs
 */

/**
 * @swagger
 * /shorten:
 *   post:
 *     summary: Shorten a URL
 *     tags: [URL Shortener]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: The URL to shorten
 *               imageId:
 *                 type: string
 *                 description: The ID of the image document to update with the shortened URL
 *     responses:
 *       200:
 *         description: URL shortened successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shortUrl:
 *                   type: string
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", shortenController.shortenUrl);

module.exports = router;
