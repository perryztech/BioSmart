"use client";

import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type CertificateData = {
  id: string;
  name: string;
  course: string;
  institution: string;
  dateIssued: string;
};

type Props = {
  certificates: CertificateData[];
};

const CertificateComponent: React.FC<Props> = ({ certificates }) => {
  const certificateRefs = useRef<HTMLDivElement[]>([]);

  const downloadPDF = async (index: number) => {
    const input = certificateRefs.current[index];
    if (!input) return;

    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });
    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      canvas.width,
      canvas.height,
      undefined,
      "FAST"
    );
    pdf.save(`Certificate-${certificates[index].id}.pdf`);
  };

  return (
    <div className="space-y-10 p-10">
      {certificates.map((data, index) => (
        <div key={data.id}>
          <div
            ref={(el) => {
              if (el) certificateRefs.current[index] = el;
            }}
            className="relative w-[900px] h-[600px] bg-white shadow-xl border-2 border-gray-300 mx-auto p-10 rounded-xl overflow-hidden"
          >
            {/* Watermark */}
            <div className="absolute inset-0 flex justify-center items-center opacity-10 rotate-[-30deg] text-[120px] font-bold text-gray-500 pointer-events-none select-none z-0">
              BioSmart
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
              <h1 className="text-4xl font-bold mb-2">
                Certificate of Completion
              </h1>
              <p className="text-xl mb-8">This is to certify that</p>
              <h2 className="text-3xl font-semibold mb-2">{data.name}</h2>
              <p className="text-lg mb-4">
                has successfully completed the course
              </p>
              <h3 className="text-2xl italic mb-4">{data.course}</h3>
              <p className="text-md mb-4">at {data.institution}</p>
              <p className="text-md mb-8">Date Issued: {data.dateIssued}</p>
              <p className="text-sm text-gray-600">Certificate ID: {data.id}</p>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={() => downloadPDF(index)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Download Certificate
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificateComponent;
