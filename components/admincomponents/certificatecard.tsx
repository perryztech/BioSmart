import { CheckCircle2Icon } from "lucide-react";
import { Image } from "@heroui/image";

export function CertificateCard({
  studentName,
  studentImage,
  certificateId,
  institution,
  dateIssued,
  status = "Verified",
}: {
  studentName: string;
  studentImage: string;
  certificateId: string;
  institution: string;
  dateIssued: string;
  status?: "Verified" | "Unverified" | "Rejected";
}) {
  const statusColor = {
    Verified: "text-green-500",
    Unverified: "text-yellow-500",
    Rejected: "text-red-500",
  };

  return (
    <div className="flex items-center gap-4 rounded-lg border p-4 shadow-sm bg-white">
      <Image
        isBlurred
        src={studentImage}
        alt={studentName}
        width={64}
        height={64}
        className="rounded-full object-cover"
      />
      <div className="flex flex-col flex-1">
        <h4 className="text-base font-semibold">{studentName}</h4>
        <p className="text-sm text-gray-600">
          <strong>ID:</strong> {certificateId}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Institution:</strong> {institution}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Issued:</strong> {dateIssued}
        </p>
      </div>
      <div className="flex items-center gap-1 text-sm font-medium">
        <CheckCircle2Icon className={`size-5 ${statusColor[status]}`} />
        <span className={statusColor[status]}>{status}</span>
      </div>
    </div>
  );
}
