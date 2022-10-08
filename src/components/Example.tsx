export default function Example({ text }: { text: string }) {
  return (
    <div className="page">
      <h1>Example page {`"${text}"`}</h1>
    </div>
  );
}
