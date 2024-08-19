import React from "react";
import styles from "./Styles.module.css";
import Link from "next/link";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, image }) => {
  return (
    <Link href="/works" className=" select-none">
      <div className={`${styles.Project} group`}>
        <Image src={`/uploads/${image}`} width={100} height={50} alt="" className="w-full h-full object-cover" />
        <div
          className={`${styles.Info} group-hover:opacity-100 group-hover:bg-slate-400/70`}
        >
          <h1 className={styles.Title}>{title}</h1>
          {/* <p className="text-xs ">{description}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default Project;
