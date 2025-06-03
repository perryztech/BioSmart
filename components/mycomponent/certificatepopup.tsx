"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Certificate } from "@/types/index";

type Props = {
  certificate: Certificate;
  onClose: () => void;
};

export default function CertificatePopup({ certificate, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!ref.current) return;
    const canvas = await html2canvas(ref.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("landscape", "pt", "a4");
    pdf.addImage(imgData, "PNG", 20, 20, 800, 550);
    pdf.save(`${certificate.studentName}_certificate.pdf`);
  };

  const printPage = () => {
    if (!ref.current) return;
    const printContents = ref.current.innerHTML;
    const win = window.open("", "", "width=1000,height=700");
    if (win) {
      win.document.write(
        `<html><head><title>Print</title><style>
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
          body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
          .signature {
            font-family: 'Great Vibes', cursive;
            font-size: 1.6rem;
            color: #2c3e50;
            display: inline-block;
            transform: rotate(-3deg);
            user-select: none;
          }
        </style></head><body>${printContents}</body></html>`
      );
      win.document.close();
      win.focus();
      win.print();
      win.close();
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

          .signature {
            font-family: 'Great Vibes', cursive;
            font-size: 1.6rem;
            color: #2c3e50;
            display: inline-block;
            transform: rotate(-3deg);
            user-select: none;
          }
        `}
      </style>
      <div className="absolute inset-0 z-50 w-full bg-black bg-opacity-95 p-6 h-lvh flex justify-center items-center">
        <div className="">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-3xl font-extrabold text-white"
            aria-label="Close certificate popup"
          >
            ×
          </button>

          <div className="flex justify-end gap-4 mb-4">
            <button
              onClick={printPage}
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
            >
              Print
            </button>
            <button
              onClick={downloadPDF}
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Download
            </button>
          </div>

          <div
            className="h-[180px] sm:h-[320px] md:h-[480px] xl:h-[566px]"
            ref={ref}
          >
            <div className="flex h-full w-full items-center justify-center">
              <div
                className="relative animate-fade-in overflow-hidden"
                style={{
                  fontSize: "0.849px",
                  height: "480px",
                  width: "679.2px",
                  animationDelay: "75ms",
                }}
              >
                <img
                  className="pointer-events-none size-full"
                  alt=""
                  src="https://certifier-production-amplify.s3.eu-west-1.amazonaws.com/public/565302e3-5bff-4e5c-8b76-a7f0246fcb4a%2Fcertificate-designs%2Fbackgrounds%2F17-07-2024-08%3A45%3A41_380_Course_professional_red_landscape.jpg"
                />

                <div
                  className="absolute"
                  style={{
                    top: "5.03534%",
                    left: "8.01562%",
                    color: "rgb(96, 22, 22)",
                    fontSize: "38em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  <span>CERTIFICATE OF GRADUATION</span>
                </div>

                <div
                  className="absolute"
                  style={{
                    top: "20.053%",
                    left: "7.76562%",
                    color: "rgb(96, 22, 30)",
                    fontSize: "18em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  <span>Is hereby awarded to</span>
                </div>

                <div
                  className="absolute"
                  style={{
                    top: "25%",
                    left: "7.76562%",
                    color: "rgb(96, 22, 22)",
                    fontSize: "50em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  {certificate.studentName}
                </div>

                <div
                  className="absolute"
                  style={{
                    top: "41.162%",
                    left: "7.76562%",
                    color: "rgb(96, 22, 22)",
                    fontSize: "14em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  <span>Program: Bachelor of Science in Computer Science</span>
                  <br />
                  <span>Institution: {certificate.institution}</span>
                  <br />
                  <span>Class Of Degree: {certificate.classOfDegree}</span>
                </div>

                <div
                  className="absolute"
                  style={{
                    top: "37.7223%",
                    left: "7.76562%",
                    width: "81.375%",
                    height: "0.176678%",
                    backgroundColor: "rgb(68, 47, 47)",
                  }}
                />

                <div
                  className="absolute"
                  style={{
                    top: "58.2901%",
                    left: "33.6426%",
                    color: "rgb(96, 22, 22)",
                    fontSize: "11em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  {certificate.studentId}
                </div>

                <div
                  className="absolute"
                  style={{
                    top: "58.2901%",
                    left: "70.375%",
                    color: "rgb(96, 22, 22)",
                    fontSize: "13em",
                    fontFamily: "Marcellus, serif",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>{certificate.dateIssued}</span>
                </div>

                <div
                  className="absolute"
                  style={{
                    top: "57.7739%",
                    left: "8.2793%",
                    color: "rgb(96, 22, 22)",
                    fontSize: "17em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  <span>{certificate.duration}</span>
                </div>

                {/* Labels */}
                <div
                  className="absolute"
                  style={{
                    top: "62.5442%",
                    left: "8.2793%",
                    color: "rgb(68, 47, 47)",
                    fontSize: "14em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  <span>Duration</span>
                </div>

                <div
                  className="absolute"
                  style={{
                    top: "61.4841%",
                    left: "33.6426%",
                    color: "rgb(68, 47, 47)",
                    fontSize: "14em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  <span>Certificate ID</span>
                </div>

                <div
                  className="absolute"
                  style={{
                    top: "62.1908%",
                    left: "70.375%",
                    color: "rgb(68, 47, 47)",
                    fontSize: "14em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  <span>Date Of Issue</span>
                </div>

                {/* Signature */}
                <div
                  className="absolute"
                  style={{
                    top: "81.6254%",
                    left: "21.0293%",
                    color: "rgb(68, 47, 47)",
                    fontSize: "18em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  <span>Dr. John Ajiboye</span>
                </div>
                <div
                  className="absolute"
                  style={{
                    top: "86.5724%",
                    left: "21.0293%",
                    color: "rgb(68, 47, 47)",
                    fontSize: "14em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  <span>Registrar</span>
                </div>

                <div
                  className="absolute"
                  style={{
                    top: "86.5724%",
                    left: "79.0284%",
                    color: "rgb(68, 47, 47)",
                    fontSize: "18em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  <span>BioSmart Official</span>
                </div>

                <div
                  className="absolute"
                  style={{
                    top: "81.4459%",
                    left: "78.8096%",
                    color: "rgb(68, 47, 47)",
                    fontSize: "18em",
                    fontFamily: "Marcellus, serif",
                  }}
                >
                  <span>Samuel Runittu</span>
                </div>

                {/* Logos */}
                {[
                  {
                    top: "7.24106%",
                    left: "83.4244%",
                    width: "8.31348%",
                    src: certificate.studentImage,
                  },
                  {
                    top: "78.8869%",
                    left: "8.2793%",
                    width: "12.4229%",
                    src: "https://certifier-production-amplify.s3.eu-west-1.amazonaws.com/public/565302e3-5bff-4e5c-8b76-a7f0246fcb4a%2Fcertificate-designs%2Fimages%2F17-07-2024-08%3A43%3A34_DueQGwZ49EVsJLpnZjpZ4-Group%2019077.png",
                  },
                  {
                    top: "80.5625%",
                    left: "65.9493%",
                    width: "11.9248%",
                    src: "https://certifier-production-amplify.s3.eu-west-1.amazonaws.com/public/565302e3-5bff-4e5c-8b76-a7f0246fcb4a%2Fcertificate-designs%2Fimages%2F17-07-2024-08%3A43%3A49_Vv8XeqMM8K8exfb2Y-dOz-Group%2019078.png",
                  },
                  {
                    top: "77.1064%",
                    left: "40.3505%",
                    width: "18.9239%",
                    src: "https://certifier-production-amplify.s3.eu-west-1.amazonaws.com/public/565302e3-5bff-4e5c-8b76-a7f0246fcb4a%2Fcertificate-designs%2Fimages%2F17-07-2024-08%3A44%3A05_9Giololl6IAFuKyvkYPXv-badge.png",
                  },
                ].map((img, idx) => (
                  <div
                    key={idx}
                    className="absolute"
                    style={{ top: img.top, left: img.left, width: img.width }}
                  >
                    <img
                      alt=""
                      src={img.src}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
