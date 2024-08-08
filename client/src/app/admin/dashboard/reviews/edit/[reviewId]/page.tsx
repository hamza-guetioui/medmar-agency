import EditReviewPage from "@/views/Dashboard/pages/Reviews/pages/UpdateOne";

function EditReview({ params }: any) {
  return (
    <div>
      <EditReviewPage id={params.reviewId} />
    </div>
  );
}
export default EditReview;
