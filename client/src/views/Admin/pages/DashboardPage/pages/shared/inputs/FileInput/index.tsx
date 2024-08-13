"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Styles.module.css";

interface FileInputProps {
  accept?: string;
  label?: string;
  name: string;
}
function ImageDisplay({ name, label, accept }: FileInputProps) {

  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const displayFileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (uploadedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (displayFileRef.current && e.target?.result) {
          displayFileRef.current.style.backgroundImage = `url("${e.target.result}")`;
        }
      };
      reader.readAsDataURL(uploadedImage);
    }
  }, [uploadedImage]);

  function handleFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    setUploadedImage(file || null); // Update uploadedImage state
  }

  return (
    <div className={styles.inputContainer}>
      <label className={styles.Label}>{label || name}</label>
      <div ref={displayFileRef} className={styles.displayFile}>
        <input
        className={styles.inputFile}
          type="file"
          name="image"
          accept={accept || accept}
          onChange={handleFileInputChange}
        />
      </div>
    </div>
  );
}

export default ImageDisplay;
