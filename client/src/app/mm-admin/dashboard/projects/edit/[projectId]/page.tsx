import connectToMongoDb from "@/libs/mongoDb";
import Project from "@/model/project";
import { IProject } from "@/Types";
import { getProjects } from "@/utils/actions/Projects";
import EditForm from "@/views/Admin/pages/Projects/pages/edit";


export async function generateStaticParams() {
  await connectToMongoDb()
  const project: IProject[] = await Project.find();

  return project.map((project) => ({
    projectId: project._id.toString(),
  }));
}

type Props = {
  params: {
    projectId: string;
  };
};

const Page = ({ params: { projectId } }: Props) => {
  return (
    <div>
      <EditForm projectId={projectId} />
    </div>
  );
};

export default Page;
