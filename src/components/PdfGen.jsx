import jsPDF from "jspdf";
import { Button } from "@mantine/core";
import { useFormContext } from "react-hook-form";

const PdfGen = () => {
  const { getValues } = useFormContext();

  const handlePdf = () => {
    var doc = new jsPDF("p", "mm", "a4", false);
    doc.text("", 10, 10);
    // const pdfData = data.map((item, index) => {
    //   return `${index + 1}. Name: ${item.name}, Phone: ${item.phone}`;
    // });
    // doc.text(pdfData.join("\n"), 10, 20);

    doc.text(JSON.stringify(getValues()), 10, 40);
    doc.save("Resume.pdf");
  };

  return (
    <>
      <Button onClick={handlePdf}>Download Resume</Button>
    </>
  );
};
export default PdfGen;
