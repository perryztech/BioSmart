"use client";

import React, { useState } from "react";
import logo from "@/public/logo.jpg";
import { Montserrat } from "next/font/google";
import styles from "@/css/styles.module.css";
import {
  ArrowRightCircleIcon,
  GraduationCap,
  School,
  User,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Image } from "@heroui/image";
import { IconCertificate } from "@tabler/icons-react";
import ver from "@/public/media/vrifyy.gif";
import notver from "@/public/media/cancel.gif";
// import profile from "@/public/media/profile.jpg";
import { getCertificateDetails } from "@/lib/actions"; // adjust path if needed

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface CertificateData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  matriculationNumber: string;
  institutionName: string;
  courseOfStudy: string;
  degreeAwarded: string;
  classOfDegree: string;
  facultyOrDepartment: string;
  yearOfAdmission: number;
  yearOfGraduation: number;
  modeOfStudy: string;
  certificateSerialNumber: string;
  dateOfIssue: string;
  verificationStatus: string;
  verificationTimestamp: string;
  blockchainId: string;
  institutionContactDetails: string;
  accreditationStatus: string;
  studentPic: string; // Added for the student image link
}

export default function Nav() {
  const [otpValue, setOtpValue] = useState("");
  const [certData, setCertData] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    const data = await getCertificateDetails(otpValue);

    setCertData(data);
    setLoading(false);
  };

  const resetVerification = () => {
    setOtpValue("");
    setLoading(false);
    setCertData(null);
  };

  return (
    <nav className="absolute top-0 z-40 flex w-full px-5 pt-2  justify-between items-center">
      <div className=" w-fit flex items-center justify-center">
        <Image
          isBlurred
          src={logo.src}
          alt="BioSmart Logo"
          width={50}
          height={50}
        />
        <h1 className={`${montserrat.className} text-xl font-bold `}>
          <span className="">BioSmart</span>
        </h1>
      </div>

      <AlertDialog>
        <AlertDialogTrigger
          className={`${styles.mybutton} flex gap-2 items-center`}
        >
          <span>Verify Certificate</span> 
          <ArrowRightCircleIcon />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Enter Certificate ID</AlertDialogTitle>
            <AlertDialogDescription>
              <InputOTP maxLength={9} value={otpValue} onChange={setOtpValue}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                  <InputOTPSlot index={8} />
                </InputOTPGroup>
              </InputOTP>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button onClick={resetVerification} className="text-black ">Cancel</Button>
            </AlertDialogCancel>

            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  className="border-0"
                  onClick={handleVerify}
                  disabled={loading}
                >
                  {loading ? (
                    <div className={`${styles.loader2}`}></div>
                  ) : (
                    "Verify"
                  )}
                </Button>
              </DrawerTrigger>
              <DrawerContent className="px-8">
                {loading ? (
                  <div className="w-full h-64 flex items-center justify-center">
                    <div className={`${styles.loader}`}></div>
                  </div>
                ) : certData ? (
                  <div className="w-full flex flex-col gap-8">
                    <div className="w-full flex items-baseline gap-3">
                      <div className="flex items-center justify-center w-fit h-fit">
                        <Image
                          src={certData?.studentPic}
                          isBlurred
                          width={150}
                          height={150}
                          alt="Student Profile Image"
                          className="rounded-full object-cover"
                        />
                      </div>

                      {certData?.verificationStatus === "Verified" ? (
                        <div className="flex items-center text-[#00a1dd]">
                          <Image
                            src={ver.src}
                            isBlurred
                            width={50}
                            height={50}
                            alt="Verification Gif"
                            className="rounded-full object-cover"
                          />
                          <p className="text-ssm font-extrabold">
                            Verified by BioSmart
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center text-[#00a1dd]">
                          <Image
                            src={notver.src}
                            isBlurred
                            width={50}
                            height={50}
                            alt="Not Verified Gif"
                            className="rounded-full object-cover"
                          />
                          <p className="text-sm text-red-700 font-extrabold">
                            Not Verified by BioSmart
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-start items-start gap-12">
                      <div className="flex flex-col items-start justify-center gap-2">
                        <div className="text-lg font-bold flex gap-2">
                          <User />
                          <h2>Basic Identity Info</h2>
                        </div>
                        <div className="flex flex-col text-sm">
                          <p>Full Name: {certData?.fullName}</p>
                          <p>
                            Date of Birth:{" "}
                            {certData?.dateOfBirth
                              ? new Date(
                                  certData.dateOfBirth
                                ).toLocaleDateString()
                              : "N/A"}
                          </p>
                          <p>Gender: {certData?.gender}</p>
                          <p>Nationality: {certData?.nationality}</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-center gap-2">
                        <div className="text-lg font-bold flex gap-2">
                          <GraduationCap />
                          <h2>Academic Info</h2>
                        </div>
                        <div className="flex flex-col text-sm">
                          <p>
                            Matriculation Number:{" "}
                            {certData?.matriculationNumber}
                          </p>
                          <p>Institution Name: {certData?.institutionName}</p>
                          <p>Course of Study: {certData?.courseOfStudy}</p>
                          <p>Degree Awarded: {certData?.degreeAwarded}</p>
                          <p>Class of Degree: {certData?.classOfDegree}</p>
                          <p>
                            Faculty/Department: {certData?.facultyOrDepartment}
                          </p>
                          <p>Year of Admission: {certData?.yearOfAdmission}</p>
                          <p>
                            Year of Graduation: {certData?.yearOfGraduation}
                          </p>
                          <p>Mode of Study: {certData?.modeOfStudy}</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-center gap-2">
                        <div className="text-lg font-bold flex gap-2">
                          <IconCertificate />
                          <h2>Certificate Metadata</h2>
                        </div>
                        <div className="flex flex-col text-sm">
                          <p>
                            Certificate Serial Number:{" "}
                            {certData?.certificateSerialNumber}
                          </p>
                          <p>
                            Date of Issue:{" "}
                            {certData?.dateOfIssue
                              ? new Date(
                                  certData.dateOfIssue
                                ).toLocaleDateString()
                              : "N/A"}
                          </p>
                          <p>
                            Verification Status: {certData?.verificationStatus}
                          </p>
                          <p>
                            Verification Timestamp:{" "}
                            {certData?.verificationTimestamp}
                          </p>
                          <p>Blockchain ID: {certData?.blockchainId}</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-center gap-2">
                        <div className="text-lg font-bold flex gap-2">
                          <School />
                          <h2>Institution Confirmation</h2>
                        </div>
                        <div className="flex flex-col text-sm">
                          <p>
                            Institution Contact Details:{" "}
                            {certData?.institutionContactDetails}
                          </p>
                          <p>
                            Accreditation Status:{" "}
                            {certData?.accreditationStatus}
                          </p>
                          <p>Official Seal / Logo: </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className=" text-lg font-bold">Verification Failed</p>
                    <p> No certificate data found.</p>
                  </div>
                )}

                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="secondary" className="bg-[#00a1dd]">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
}
