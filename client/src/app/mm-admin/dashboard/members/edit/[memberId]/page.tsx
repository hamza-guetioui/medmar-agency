import connectToMongoDb from "@/libs/mongoDb";
import Member from "@/model/member";
import { IMember } from "@/Types";
import EditForm from "@/views/Admin/pages/Members/pages/edit";

export async function generateStaticParams() {
  await connectToMongoDb();
  const members: IMember[] = await Member.find();

  return members.map((member) => ({
    memberId: member._id.toString(),
  }));
}

type Props = {
  params: {
    memberId: string;
  };
};

const Page = ({ params: { memberId } }: Props) => {
  return (
    <div>
      <EditForm memberId={memberId} />
    </div>
  );
};

export default Page;
