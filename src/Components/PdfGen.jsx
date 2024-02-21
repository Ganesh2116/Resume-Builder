import React, { useState } from "react";
import jsPDF from "jspdf";
import { Button } from "@mantine/core";

const PdfGen = () => {
  const [data, setData] = useState([
    { name: "John", phone: "123-456-7890" },
    { name: "Jane", phone: "987-654-3210" },
    { name: "Doe", phone: "555-555-5555" },
  ]);

  const handlePdf = () => {
    var doc = new jsPDF("p", "mm", "a4", false);
    doc.text("", 10, 10);
    const pdfData = data.map((item, index) => {
      return `${index + 1}. Name: ${item.name}, Phone: ${item.phone}`;
    });
    doc.text(pdfData.join("\n"), 10, 20);
    doc.save("Resume.pdf");
  };

  return (
    <>
      <Button onClick={handlePdf}>Download Resume</Button>
    </>
  );
};
export default PdfGen;
