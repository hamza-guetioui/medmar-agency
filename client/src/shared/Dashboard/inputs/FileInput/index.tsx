"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Styles.module.css";
import FileInfo from "./FileInfo";
import UploadButton from "./UploadButton";

interface FileInputProps {
  accept?: string;
  label?: string;
  name: string;
}
function ImageDisplay({ name, label, accept }: FileInputProps) {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const uploadedFileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (uploadedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (uploadedFileRef.current && e.target?.result) {
          uploadedFileRef.current.style.backgroundImage = `url("${e.target.result}")`;
        }
      };
      reader.readAsDataURL(uploadedImage);
    }
  }, [uploadedImage]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setUploadedImage(file || null); // Update uploadedImage state
  }

  return (
    <div key={name} className={styles.Container}>
      <h2 className={styles.Label}>{label || name}</h2>
      <UploadButton accept={accept} name={name} onUpload={handleChange} />
      <div className={styles.uploadedFileData}>
        <FileInfo
          name={uploadedImage?.name}
          size={uploadedImage?.size}
          type={uploadedImage?.type}
        />
        <div ref={uploadedFileRef} className={styles.uploadedFile}></div>
      </div>
    </div>
  );
}

export default ImageDisplay;
