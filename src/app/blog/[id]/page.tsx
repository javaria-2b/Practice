export default function BlogDetailPage({
  params,
}: {
  params: { id: number };
}) {
  return <div>My Post: {params.id}</div>;
}
