import { IProject } from "@/Types";
import { getProjects } from "@/utils/actions/Projects";
import EditForm from "@/views/Admin/pages/Projects/pages/edit";


export async function generateStaticParams() {
  const project: IProject[] = await getProjects();

  return project.map((project) => ({
    projectId: project._id,
  }));
}

type Props = {
  params: {
    projectId: string;
  };
};

const page = ({ params: { projectId } }: Props) => {
  return (
    <div>
      <EditForm projectId={projectId} />
    </div>
  );
};

export default page;
