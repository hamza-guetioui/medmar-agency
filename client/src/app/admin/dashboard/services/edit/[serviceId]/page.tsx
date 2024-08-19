import connectToMongoDb from "@/libs/mongoDb";
import Service from "@/model/service";
import { IService } from "@/Types";
import EditForm from "@/views/Admin/pages/Services/pages/edit";

export async function generateStaticParams() {
  await connectToMongoDb()
  const services: IService[] = await Service.find();

  return services.map((service) => ({
    serviceId: service._id.toString(),
  }));
}
type Props = {
  params: {
    serviceId: string;
  };
};

const Page = ({ params: { serviceId } }: Props) => {
  return (
    <div>
      <EditForm serviceId={serviceId} />
    </div>
  );
};

export default Page;
