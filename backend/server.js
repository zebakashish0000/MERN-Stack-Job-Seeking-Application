import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});


import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import cloudinary from "cloudinary";
import mongoose from "mongoose";

// Cloudinary Config
cloudinary.v2.config({
  cloud_name: "Zayba's-app ",
  api_key: 583421987654323,
  api_secret:hdsf8723klsdf9872ksm2f344,
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");

    // Start Server Only After DB Connects
    app.listen(process.env.PORT || 4000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 4000}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err);
  });
