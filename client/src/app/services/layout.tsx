import Layout from "@/views/Services/layout";
export default function SevicesDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout>
        {children}
      </Layout>
    </>
  );
}
