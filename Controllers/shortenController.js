// controllers/shortenController.js
const axios = require("axios");
const { db } = require("../firebase");

const shortenUrl = async (req, res) => {
  const { url, id } = req.body;

  if (!url || !id) {
    return res.status(400).json({ message: "URL and image ID are required." });
  }

  try {
    const response = await axios.post(
      "https://www.shareaholic.com/api/shortener",
      {
        longUrl: url,
        apiKey: "0c9aee5388c378a9e98973dd8c8dc645",
      }
    );

    const shortUrl = response.data.shortUrl;

    // Save the shortened URL to Firestore
    const imageRef = db.collection("Images").doc(id);
    await imageRef.update({
      shortUrl: shortUrl,
    });

    res.status(200).json({ shortUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error shortening URL" });
  }
};

module.exports = {
  shortenUrl,
};
