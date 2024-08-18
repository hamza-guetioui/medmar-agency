import { IService } from "@/Types";
import {  getServices } from "@/utils/actions/Services";
import EditForm from "@/views/Admin/pages/Services/pages/edit";

export async function generateStaticParams() {
  const services: IService[] = await getServices();

  return services.map((service) => ({
    serviceId: service._id,
  }));
}
type Props = {
  params: {
    serviceId: string;
  };
};

const page = ({ params: { serviceId } }: Props) => {
  return (
    <div>
      <EditForm serviceId={serviceId} />
    </div>
  );
};

export default page;
