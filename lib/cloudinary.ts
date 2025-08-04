export default async function cloudinaryUploadImage(file: File) {
  const API_KEY = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_UPLOAD_PRESET;

  const timestamp = Math.floor(Date.now() / 1000);
  const paramsToSign = {
    timestamp: timestamp,
    folder: UPLOAD_PRESET,
  };

  const signResponse = await fetch("/api/sign-image", {
    method: "POST",
    body: JSON.stringify({ paramsToSign }),
  });
  const signData = await signResponse.json();

  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", API_KEY!);
  formData.append("timestamp", timestamp.toString());
  formData.append("signature", signData.signature);
  formData.append("folder", UPLOAD_PRESET!);

  const cloudinaryResesponse = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!cloudinaryResesponse.ok) {
    const { error } = await cloudinaryResesponse.json();
    throw new Error(error.message || "Uknown error");
  }

  const cloudinaryData = await cloudinaryResesponse.json();

  const moderation = cloudinaryData.moderation?.find(
    ({ kind }: { kind: string }) => kind === "aws_rek"
  );

  if (moderation?.status === "rejected") {
    throw new Error("INAPPROPRIATE_CONTENT");
  }

  return cloudinaryData;
}
