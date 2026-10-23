type Props = {
  studentName: string;
  courseName: string;
  date: string;
};

export default function CertificateCard({
  studentName,
  courseName,
  date,
}: Props) {
  return (
    <div
      className="
      bg-white
      text-black
      p-12
      rounded-xl
      shadow-lg
      border-4
      border-yellow-500
      "
    >
      <div className="text-center">

        <h1 className="text-5xl font-bold">
          Certificate
        </h1>

        <p className="mt-8 text-xl">
          This certifies that
        </p>

        <h2 className="text-4xl font-bold mt-6">
          {studentName}
        </h2>

        <p className="mt-6 text-lg">
          Successfully completed
        </p>

        <h3 className="text-3xl font-bold mt-4">
          {courseName}
        </h3>

        <p className="mt-10">
          Completion Date
        </p>

        <p className="font-bold">
          {date}
        </p>

      </div>
    </div>
  );
}
