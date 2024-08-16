
import EditForm from "@/views/Admin/pages/Services/pages/edit";


type Props = {
  params: {
    serviceId: string;
  };
}


const page = ({ params: { serviceId } }  : Props) => {
  return (
    <div>
      <EditForm serviceId={serviceId} />
    </div>
  );
};

export default page;
