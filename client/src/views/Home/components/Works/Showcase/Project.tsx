import React from "react";
import styles from "./Styles.module.css";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, image }) => {
  return (
    <div
      className={`${styles.Project} group`}
      style={{ backgroundImage: `url(/images/${image})` }}
    >
      <Link href="/works" className=" select-none">
        <div
          className={`${styles.Info} group-hover:opacity-100 group-hover:bg-slate-400/70`}
        >
          <h1 className={styles.Title}>{title}</h1>
          {/* <p className="text-xs ">{description}</p> */}
        </div>
      </Link>
    </div>
  );
};

export default Project;
