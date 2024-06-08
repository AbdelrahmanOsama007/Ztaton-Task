// routes/imageRoutes.js
const express = require("express");
const upload = require("../Middlewares/Multer"); // Adjust path as necessary
const imageController = require("../Controllers/imagiecontroller");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Images
 *   description: Image management
 */

/**
 * @swagger
 * /images:
 *   post:
 *     summary: Upload a new image
 *     tags: [Images]
 *     consumes:
 *       - multipart/form-data
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: image
 *         in: formData
 *         description: Image file to upload
 *         required: true
 *         type: file
 *     responses:
 *       201:
 *         description: Image uploaded successfully
 *       500:
 *         description: Internal server error
 */
router.post("/", upload.single("image"), imageController.createImage);

/**
 * @swagger
 * /images/{id}:
 *   get:
 *     summary: Get an image by ID
 *     tags: [Images]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the image to retrieve
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Image retrieved successfully
 *       404:
 *         description: Image not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", imageController.getImage);

/**
 * @swagger
 * /images/{id}:
 *   put:
 *     summary: Update an image by ID
 *     tags: [Images]
 *     consumes:
 *       - multipart/form-data
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the image to update
 *         required: true
 *         type: string
 *       - name: image
 *         in: formData
 *         description: New image file to upload
 *         required: true
 *         type: file
 *     responses:
 *       200:
 *         description: Image updated successfully
 *       404:
 *         description: Image not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id", upload.single("image"), imageController.updateImage);

/**
 * @swagger
 * /images/{id}:
 *   delete:
 *     summary: Delete an image by ID
 *     tags: [Images]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the image to delete
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Image deleted successfully
 *       404:
 *         description: Image not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", imageController.deleteImage);

module.exports = router;
