import { ICustomer } from "@/Types";
import { getCustomers } from "@/utils/actions/Customers";
import EditForm from "@/views/Admin/pages/Customers/pages/edit";

export async function generateStaticParams() {
  const customers: ICustomer[] = await getCustomers();

  return customers.map((customer) => ({
    customerId: customer._id,
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
