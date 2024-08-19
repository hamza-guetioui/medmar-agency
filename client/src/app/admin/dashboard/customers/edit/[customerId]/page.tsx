import connectToMongoDb from "@/libs/mongoDb";
import Customer from "@/model/customer";
import { ICustomer } from "@/Types";
import EditForm from "@/views/Admin/pages/Customers/pages/edit";

export async function generateStaticParams() {
  await connectToMongoDb()
  const customers: ICustomer[] = await Customer.find();


  return customers.map((customer) => ({
    customerId: customer._id.toString(),
  }));
}

type Props = {
  params: {
    customerId: string;
  };
};

const Page = ({ params: { customerId } }: Props) => {
  return (
    <div>
      <EditForm customerId={customerId} />
    </div>
  );
};

export default Page;
