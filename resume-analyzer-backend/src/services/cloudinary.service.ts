import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
});

export const uploadOnCloudinary = async (localFilePath: string): Promise<string | null> => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: "ai-resume-analyzer",
    });

    fs.unlinkSync(localFilePath);
    return response.secure_url;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.error("Cloudinary upload error:", error);
    return null;
  }
};