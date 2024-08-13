// import { getReviews } from "@/utils/action";
// import EditReviewPage from "@/views/Admin/pages/DashboardPage/pages/Reviews/pages/UpdateOne";

// interface ReviewsTypes {
//   _id: string;
//   name: string;
//   job: string;
//   comment: string;
//   rate: number;
//   imageSrc: string;
// }

// export async function generateStaticParams() {
//   const reviews = await getReviews();

//   return reviews.map((review: ReviewsTypes) => ({
//     reviewId: review._id,
//   }));
// }

// function EditReview({ params }: any) {
//   return (
//     <div>
//       <EditReviewPage id={params.reviewId} />
//     </div>
//   );
// }
// export default EditReview;
