import React from 'react';
import styles from './Styles.module.css'

const Video = () => {
  return (
    <video src='/videos/introVideo.mp4' controls  className={styles.Video} ></video>
  )
}

export default Video