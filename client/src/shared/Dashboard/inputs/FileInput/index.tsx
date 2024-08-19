"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Styles.module.css";
import FileInfo from "./FileInfo";
import UploadButton from "./UploadButton";

interface FileInputProps {
  accept?: string;
  label?: string;
  name: string;
  initialValue?: string;
  required?: boolean;
}
function ImageDisplay({
  name,
  label,
  accept,
  required = false,
  initialValue,
}: FileInputProps) {
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
    } else if (uploadedFileRef.current) {
      if (initialValue) {
        const imageUrl = `/uploads/${initialValue}`;
        uploadedFileRef.current.style.backgroundImage = `url("${imageUrl}")`;
      }
    }
  }, [uploadedImage, initialValue]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    console.log(file);
    setUploadedImage(file || null); // Update uploadedImage state
  }

  return (
    <div key={name} className={styles.Container}>
      <h2 className={styles.Label}>{label || name}</h2>
      <UploadButton>
        <input
          id="file"
          className={styles.input}
          type="file"
          name={name}
          accept={accept || ""}
          onChange={handleChange}
          required={required}
        />
      </UploadButton>
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
