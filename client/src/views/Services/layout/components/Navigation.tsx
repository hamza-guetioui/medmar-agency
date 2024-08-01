import React from "react";
import Link from "next/link";

import styles from "./Styles.module.css";

function Navigation() {
  return (
    <div className={styles.Navigation}>
      <aside className="bg-slate-100 rounded-xl p-6 sticky top-32 h-fit md:mb-64 ">
        <h3 className="text-2xl font-bold">Services List</h3>

        <ul className=" p-6 ml-3 flex flex-col gap-6 font-bold whitespace-nowrap ">
          <li>
            <Link href="/services/graphic-design">Graphic Design</Link>
          </li>
          <li>
            {" "}
            <Link href="/services/digital-marketing">Digital Marketing</Link>
          </li>
          <li>
            {" "}
            <Link href="/services/video-editing">Video Editing</Link>
          </li>
          <li>
            <Link href="/services/photography">Photography</Link>
          </li>
          <li>
            <Link href="/services/web-development">Web Development</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Navigation;
