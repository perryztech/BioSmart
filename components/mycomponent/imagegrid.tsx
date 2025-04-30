"use client";
import React from "react";
import { Image } from "@heroui/image";

const imageUrls = [
  "https://img.freepik.com/free-photo/young-student-learning-library_23-2149215444.jpg?t=st=1743353035~exp=1743356635~hmac=334c41f8515ca80660870f774688a19bf881675d1e5dc805a090653f68376697&w=740",
  "https://media.istockphoto.com/id/1160147513/photo/graduation-is-the-goal.jpg?s=612x612&w=0&k=20&c=3BnraDzf5D03Tf_Trw46ad93THCC0qczf5kq73ydYKE=",
  "https://img.freepik.com/free-photo/full-shot-smiley-students-library_23-2149647046.jpg?t=st=1743352991~exp=1743356591~hmac=1d4def7a86e9531c614dfd042f8845bb9e0571ff9a17db065f49100b0ff67428&w=740",
  "https://img.freepik.com/premium-photo/happy-female-graduate-student-with-diploma_380164-297694.jpg?w=740",
  "https://img.freepik.com/free-photo/full-shot-students-learning-indoors_23-2149647131.jpg?t=st=1743355339~exp=1743358939~hmac=dc201565f9a933668f468b671764d4a142c800f36b2527c358f682ccf957b14f&w=740",
];

const GridImages = () => {
  return (
    <div className="w-full h-full grid grid-cols-5 gap-2">
      {imageUrls.map((src, index) => (
        <div key={index} className="h-full w-full">
          <Image
            isBlurred
            isZoomed
            src={src}
            width={120}
            height={550}
            alt={`Student Image ${index + 1}`}
            className="object-cover rounded-2xl"
          />
        </div>
      ))}
    </div>
  );
};

export default GridImages;
