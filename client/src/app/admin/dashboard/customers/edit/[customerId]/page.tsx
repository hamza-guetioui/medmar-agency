import EditForm from "@/views/Admin/pages/Customers/pages/edit";

const generateStaticParams = () => {};

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
