"use client";

import rawData from "./data.json";
import { useState } from "react";
import { CertificateCard } from "@/components/admincomponents/certificatecard";

type Certificate = {
  studentName: string;
  studentImage: string;
  certificateId: string;
  institution: string;
  dateIssued: string;
  status: "Verified" | "Unverified" | "Rejected";
};

const ITEMS_PER_PAGE = 12;

export default function CertificatesPage() {
  const data = rawData as Certificate[];

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="flex flex-col items-center  min-h-lvh gap-6 px-6">
      <div className="w-fit h-fit text-center">
        <h1 className="text-lg font-extrabold">Certificates</h1>
        <p className="text-sm text-gray-400">Manage your certificates here</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-5xl">
        {paginatedData.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
