import Layout from "@/views/Admin/layout";

export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
