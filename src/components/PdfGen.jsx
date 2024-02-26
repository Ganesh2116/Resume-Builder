import jsPDF from "jspdf";
import { Button } from "@mantine/core";
import { useFormContext } from "react-hook-form";

const PdfGen = () => {
  const { getValues } = useFormContext();

  const handlePdf = () => {
    var doc = new jsPDF("p", "mm", "a4", false);
    doc.text("", 10, 10);

    const values = getValues();

    // font styles
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);

    //  First Name and Last Name
    doc.text(` ${values.FirstName} ${values.LastName}`, 10, 20);

    // font styles for normal text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    // Print Email, LinkedIn, and Mobile Number
    doc.text(`${values.Email}`, 115, 20);
    doc.text(`${values.MobileNumber}`, 160, 27);
    doc.text(`${values.CurrentLive}`, 170, 34);

    // Education section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Education", 20, 50);

    //  Degree, College, and School details
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    //Degree
    doc.text(` ${values.Degreequalication}`, 80, 50);
    doc.text(` ${values.Degreeunviersity}`, 80, 55);
    doc.text(` ${values.Degreeformyear} to ${values.Degreetoyear}`, 80, 60);
    //College
    doc.text(` ${values.clgqualication}`, 80, 70);
    doc.text(` ${values.clgunviersity}`, 80, 75);
    doc.text(` ${values.clgformyear} to ${values.clgtoyear}`, 80, 80);
    //School
    doc.text(` ${values.schoolqualicartion}`, 80, 90);
    doc.text(` ${values.school}`, 80, 95);
    doc.text(` ${values.schoolformyear} to ${values.schooltoyear}`, 80, 100);

    //Project section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Projects", 20, 110);

    //Project Details
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    //project1
    doc.text(` ${values.projectTitle1}`, 80, 115);
    doc.text(` ${values.projectlink1}`, 80, 120);
    doc.text(` ${values.StartDate1} to ${values.EndDate1}`, 80, 125);
    doc.text(` ${values.projectdescription1}`, 80, 130);
    //project2
    doc.text(` ${values.projectTitle2}`, 80, 140);
    doc.text(` ${values.projectlink2}`, 80, 145);
    doc.text(` ${values.StartDate2} to ${values.EndDate2}`, 80, 150);
    doc.text(` ${values.projectdescription2}`, 80, 155);
    //project3
    doc.text(` ${values.projectTitle3}`, 80, 165);
    doc.text(` ${values.projectlink3}`, 80, 170);
    doc.text(` ${values.StartDate3} to ${values.EndDate3}`, 80, 175);
    doc.text(` ${values.projectdescription3}`, 80, 180);

    // Experience section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Experience", 20, 190);
    doc.setFontSize(12);

    // First Experience
    doc.setFont("helvetica", "normal");
    doc.text(`${values.institue1}`, 80, 195);
    doc.text(`${values.institue1position}`, 80, 200);
    doc.text(`${values.institue1duration}`, 80, 205);
    doc.text(`${values.institue1description}`, 80, 210);
    // Second Experience
    doc.text(`${values.institue2}`, 80, 220);
    doc.text(`${values.institue2position}`, 80, 225);
    doc.text(`${values.institue2duration}`, 80, 230);
    doc.text(`${values.institue2description}`, 80, 235);

    // Interest section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Interests", 20, 245);
    doc.setFontSize(12);

    //Interests details
    doc.setFont("helvetica", "normal");
    doc.text(`${values.Interest1}   ${values.Interest2}`, 80, 250);
    doc.text(`${values.Interest3}   ${values.Interest4}`, 80, 260);
    doc.text(`${values.Interest5}   ${values.Interest6}`, 80, 270);

    //Skills section
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("Skills", 20, 285);
    doc.setFontSize(12);

    // Skills details
    doc.setFont("helvetica", "normal");
    doc.text(
      `${values.skill1}  ${values.skill2}  ${values.skill3}  ${values.skill4}  ${values.skill5}   ${values.skill6}`,
      80,
      290
    );

    doc.save("Resume.pdf");
  };

  return (
    <>
      <Button onClick={handlePdf}>Download Resume</Button>
    </>
  );
};
export default PdfGen;
