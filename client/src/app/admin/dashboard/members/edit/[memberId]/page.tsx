
import EditForm from "@/views/Admin/pages/Members/pages/edit";


type Props = {
  params: {
    memberId: string;
  };
}


const page = ({ params: { memberId } }  : Props) => {
  return (
    <div>
      <EditForm memberId={memberId} />
    </div>
  );
};

export default page;
