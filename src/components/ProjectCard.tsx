export default function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="inline-block p-4 rounded-lg border-2 border-foreground">
      <h3 className="font-semibold mb-4">{title}</h3>
      <p className="max-w-[350px]">{description}</p>
    </div>
  );
}
