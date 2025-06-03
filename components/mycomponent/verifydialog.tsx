"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ArrowRightCircleIcon } from "lucide-react";
import { Certificate } from "@/types/index";
import certificates from "@/data/certificates.json";
import styles from "@/css/styles.module.css";
import CertificatePopup from "./certificatepopup";

export default function VerifyDialog() {
  const [otpValue, setOtpValue] = useState("");
  const [matchedCert, setMatchedCert] = useState<Certificate | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false); // <-- Controlled open state

  const handleVerify = () => {
    const match = certificates.find(
      (cert) =>
        cert.certificateId.replace(/[^A-Z0-9]/gi, "") === otpValue.toUpperCase()
    );
    setMatchedCert(match || null);

    if (match) {
      setDialogOpen(false); // <-- Close the AlertDialog
    }
  };

  return (
    <div>
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogTrigger
          className={`${styles.mybutton} flex gap-2 items-center`}
          onClick={() => setDialogOpen(true)}
        >
          <span>Verify Certificate</span>
          <ArrowRightCircleIcon />
        </AlertDialogTrigger>

        <AlertDialogContent className="bg-white rounded-xl p-6 max-w-lg w-full shadow-lg text-center">
          <AlertDialogCancel
            className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-200 cursor-pointer"
            aria-label="Close"
          >
            ✕
          </AlertDialogCancel>

          <h2 className="text-xl font-semibold mb-4">Enter Certificate ID</h2>

          <InputOTP
            maxLength={11}
            value={otpValue}
            onChange={setOtpValue}
            className="justify-center mb-6"
          >
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
              <InputOTPSlot index={6} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={7} />
              <InputOTPSlot index={8} />
              <InputOTPSlot index={9} />
              <InputOTPSlot index={10} />
            </InputOTPGroup>
          </InputOTP>

          <button
            onClick={handleVerify}
            className="mt-4 px-5 py-2 rounded-lg bg-lg-white border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            Verify Now
          </button>
        </AlertDialogContent>
      </AlertDialog>

      {/* CertificatePopup is now outside AlertDialog */}
      {matchedCert && (
        <CertificatePopup
          certificate={matchedCert}
          onClose={() => {
            setMatchedCert(null);
            setOtpValue(""); // Optional: clear OTP when closing popup
          }}
        />
      )}
    </div>
  );
}
