import React from "react";
import styles from "./Styles.module.css";
function Showcase() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Slider }>
        <div className={styles.SliderInner}>
          <div className={styles.SliderItem + " bg-red-600"}></div>
          <div className={styles.SliderItem + " bg-yellow-400"}></div>
          <div className={styles.SliderItem + " bg-sky-600"}></div>
          <div className={styles.SliderItem + " bg-green-600"}></div>
          <div className={styles.SliderItem + " bg-purple-800"}></div>
        </div>
        <div className={styles.SliderInner}>
          <div className={styles.SliderItem + " bg-red-600"}></div>
          <div className={styles.SliderItem + " bg-yellow-400"}></div>
          <div className={styles.SliderItem + " bg-sky-600"}></div>
          <div className={styles.SliderItem + " bg-green-600"}></div>
          <div className={styles.SliderItem + " bg-purple-800"}></div>
        </div>
      </div>
      <div className={styles.Slider  }>
        <div className={styles.SliderInner }>
          <div className={styles.SliderItem + " bg-red-600"}></div>
          <div className={styles.SliderItem + " bg-yellow-400"}></div>
          <div className={styles.SliderItem + " bg-sky-600"}></div>
          <div className={styles.SliderItem + " bg-green-600"}></div>
          <div className={styles.SliderItem + " bg-purple-800"}></div>
        </div>
        <div className={styles.SliderInner  }>
          <div className={styles.SliderItem + " bg-red-600"}></div>
          <div className={styles.SliderItem + " bg-yellow-400"}></div>
          <div className={styles.SliderItem + " bg-sky-600"}></div>
          <div className={styles.SliderItem + " bg-green-600"}></div>
          <div className={styles.SliderItem + " bg-purple-800"}></div>
        </div>
      </div>
      <div className={styles.Slider  }>
        <div className={styles.SliderInner  }>
          <div className={styles.SliderItem + " bg-red-600"}></div>
          <div className={styles.SliderItem + " bg-yellow-400"}></div>
          <div className={styles.SliderItem + " bg-sky-600"}></div>
          <div className={styles.SliderItem + " bg-green-600"}></div>
          <div className={styles.SliderItem + " bg-purple-800"}></div>
        </div>
        <div className={styles.SliderInner }>
          <div className={styles.SliderItem + " bg-red-600"}></div>
          <div className={styles.SliderItem + " bg-yellow-400"}></div>
          <div className={styles.SliderItem + " bg-sky-600"}></div>
          <div className={styles.SliderItem + " bg-green-600"}></div>
          <div className={styles.SliderItem + " bg-purple-800"}></div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;

// import React from "react";
// import styles from './Styles.module.css'

// function Showcase() {
//   return (
//     <div className="col-span-5 w-full h-full bg-black/60 flex flex-col overflow-hidden">

//       <div className="w-full h-1/3 flex justify-between gap-2 p-3">
//         <div className="w-[25%] bg-red-600"></div>
//         <div className="w-[25%] bg-yellow-400"></div>
//         <div className="w-[25%] bg-sky-600"></div>
//         <div className="w-[25%] bg-green-600"></div>
//         <div className="w-[25%] bg-purple-800"></div>
//       </div>
//       <div className={styles.Slider}>
//         <div className="w-44 bg-red-600"></div>
//         <div className="w-44 bg-yellow-400"></div>
//         <div className="w-44 bg-sky-600"></div>
//         <div className="w-44 bg-green-600"></div>
//         <div className="w-44 bg-purple-800"></div>
//       </div>

//       <div className="w-full h-1/3 flex justify-between gap-2 p-3">
//         <div className="w-[25%] bg-red-600"></div>
//         <div className="w-[25%] bg-yellow-400"></div>
//         <div className="w-[25%] bg-sky-600"></div>
//         <div className="w-[25%] bg-green-600"></div>
//         <div className="w-[25%] bg-purple-800"></div>
//       </div>

//     </div>
//   );
// }

// export default Showcase;
