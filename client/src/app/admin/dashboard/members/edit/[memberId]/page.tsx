import { IMember } from "@/Types";
import { getMembers } from "@/utils/actions/Members";
import EditForm from "@/views/Admin/pages/Members/pages/edit";

export async function generateStaticParams() {
  const members: IMember[] = await getMembers();

  return members.map((member) => ({
    memberId: member._id,
  }));
}

type Props = {
  params: {
    memberId: string;
  };
};

const page = ({ params: { memberId } }: Props) => {
  return (
    <div>
      <EditForm memberId={memberId} />
    </div>
  );
};

export default page;
