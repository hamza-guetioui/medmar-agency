import EditForm from "@/views/Admin/pages/Projects/pages/edit";

// export const dynamicParams = true;

// export async function generateStaticParams() {
//     const logService = new LogService();
//     const logs = await logService.fetchLogs();
//     // logs.forEach(log => console.log(log.id));
//     return logs.map(log => ({ id: log.id }));
// }
// export default function PublishPage({ params }: { params: { id: string } }) {
//     const { id } = params;
//     return <Preview
//         logId={id}
//     />
// };
const page = () => {
  return (
    <div>
      <EditForm />
    </div>
  );
};

export default page;
