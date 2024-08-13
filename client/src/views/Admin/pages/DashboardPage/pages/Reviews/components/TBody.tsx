// import React from "react";
// import TRow from "./TRow";

// // fetch Reviews
// import { getReviews } from "@/utils/action";

// interface ReviewTypes {
//   _id: number;
//   name: string;
//   imageSrc: string;
//   job: string;
//   rate: number;
//   comment: string;
// }

// type Props = {
// }

// const TBody = async ({} : Props) => {
//   const reviews: ReviewTypes[] = await getReviews();

//   return (
//     <tbody>
//       {reviews.map((review, index) => {
//         const { _id, name, job, rate, comment } = review;

//         return (
//           <TRow
//             key={_id}
//             index={index + 1}
//             id={_id}
//             name={name}
//             job={job}
//             rate={rate}
//             comment={comment}
//           >
//           </TRow>
//         );
//       })}
//     </tbody>
//   );
// };

// export default TBody;
