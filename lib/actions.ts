// lib/actions.ts
"use server";

import { databases } from "./appwrite"; // Adjust path if needed
import { Query } from "appwrite";

const databaseId = "67ff03380024d1b5c21f";
const collectionId = "67ff034a003a3dcdaaaf";

export const getCertificateDetails = async (certificateId: string) => {
  try {
    const response = await databases.listDocuments(databaseId, collectionId, [
      Query.equal("certificateId", certificateId), // Note the correct field
    ]);

    if (response.total === 0) return null;

    const doc = response.documents[0];

    // Adjusting field names to match your UI expectations
    return {
      fullName: doc.fullName,
      dateOfBirth: doc.dob, // DateTime in Appwrite
      gender: doc.gender,
      nationality: doc.nationality,
      matriculationNumber: doc.matricNo,
      institutionName: doc.institutionName,
      courseOfStudy: doc.course,
      degreeAwarded: doc.degreeAwarded,
      classOfDegree: doc.classOfDegree,
      facultyOrDepartment: doc.faculty,
      yearOfAdmission: doc.yoa,
      yearOfGraduation: doc.yog,
      modeOfStudy: doc.modeOfStudy,
      certificateSerialNumber: doc.certificateId,
      dateOfIssue: doc.dateOfIssue, // DateTime in Appwrite
      verificationStatus: doc.verificationStatus ? "Verified" : "Not Verified",
      verificationTimestamp: new Date().toLocaleString(), // You can adjust this
      blockchainId: doc.blockchainId,
      institutionContactDetails: doc.institutionContact,
      accreditationStatus: doc.accreditationStatus,
      studentPic: doc.studentPic, // Fetch the student image URL
    };
  } catch (error) {
    console.error("Failed to fetch certificate details:", error);
    return null;
  }
};
