export default function ProfileTextPost({ title, content }) {
  return (
    <div>
      <p className="font-bold text-large">{title}</p>
      <p>{content}</p>
    </div>
  );
}
