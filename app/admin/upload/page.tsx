"use client";
import { FileUpload } from "@/components/mycomponent/file-upload";

export default function UploadPage() {
const handleFileUpload = (files: File[]) => {
  console.log(files);
};

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        <FileUpload onChange={handleFileUpload} />
        <div className="mt-4">
          <h3>Uploaded Files:</h3>
        </div>
      </div>
    </div>
  );
}
