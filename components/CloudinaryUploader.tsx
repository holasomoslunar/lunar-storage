"use client";
import cloudinaryUploadImage from "@/lib/cloudinary";
import { cn } from "@/lib/utils";
import { ImageUp, Loader } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

interface CloudinaryUploaderProps {
  onUploadSuccess?: (url: string | null) => void;
}

const CloudinaryUploader: React.FC<CloudinaryUploaderProps> = ({
  onUploadSuccess,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      try {
        setUploading(true);
        const file = acceptedFiles[0];
        const cloudinaryData = await cloudinaryUploadImage(file);
        setImageUrl(cloudinaryData.secure_url);
        onUploadSuccess?.(cloudinaryData.secure_url);
      } catch (error) {
        console.log(error);
        toast.error("Error al cargar la imagen");
      } finally {
        setUploading(false);
      }
    },
    [onUploadSuccess, setImageUrl]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled: uploading,
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
  });

  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt="Uploaded product image"
        width={600}
        height={400}
      />
    );
  }

  return (
    <div>
      <div
        {...getRootProps()}
        className={cn(
          "flex items-center justify-center cursor-pointer border-2 border-dashed rounded-lg p-6 text-center transition-colors hover:border-purple-500 min-h-[170px]",
          isDragActive ? "border-purple-500" : "border-border"
        )}
      >
        {uploading ? (
          <Loader className="animate-spin size-8" />
        ) : (
          <>
            <input {...getInputProps()} />
            <div>
              <div className="inline-block text-foreground/70 bg-medium-purple-700 font-medium rounded-lg text-md px-5 py-2.5 mb-2">
                <ImageUp size={34} />
              </div>
              <p className="text-md font-medium tracking-tight text-foreground/70">
                {isDragActive ? (
                  <span>Deja la foto aquí...</span>
                ) : (
                  <span>
                    Arrastre y suelte una foto aquí o haga clic para
                    seleccionarla
                  </span>
                )}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CloudinaryUploader;
