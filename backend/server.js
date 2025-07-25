import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "Zayba's-app",
  api_key: "583421987654323",
  api_secret: "hdsf8723klsdf9872ksm2f344",
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});