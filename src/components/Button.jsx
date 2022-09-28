export default function Button({ text }) {
  return (
    <a
      href=""
      className={`px-6 py-2 rounded-md bg-blue-gradient text-sm hover:shadow-md hover:shadow-sky-300`}
    >
      {text}
    </a>
  );
}
