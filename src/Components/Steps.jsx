import React from "react";
import { useState } from "react";
import { Stepper, Button, Flex } from "@mantine/core";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import { notifications } from "@mantine/notifications";
import PdfGen from "./PdfGen";

const Steps = () => {
  const [active, setActive] = useState(0);

  // const nextStep = () =>
  //   setActive((current) => (current < 5 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const handleNextStepNotification = () => {
    setActive((current) => (current < 5 ? current + 1 : current));
    if (active == 0) {
      notifications.show({
        title: "Successfully Step First",
        message: "Hey there, your personal details is Submit! 🤥",
      });
    }

    if (active == 1) {
      notifications.show({
        title: "Successfully Step 2nd",
        message: "Hey there, your Eduction details is Submit! 🤥",
      });
    }

    if (active == 2) {
      notifications.show({
        title: "Successfully Step 3rd",
        message: "Hey there, your Project Developed is Submit! 🤥",
      });
    }

    if (active == 3) {
      notifications.show({
        title: "Successfully Step 4th",
        message: "Hey there, your Exprince details is Submit! 🤥",
      });
    }

    if (active == 4) {
      notifications.show({
        title: "Successfully Step ",
        message: "Hey there, your Extra details is Submit! 🤥",
      });
    }
  };
  return (
    <>
      <Flex direction="column" pt="50">
        <Flex>
          <Stepper active={active} onStepClick={setActive}>
            <Stepper.Step label="First step" description="Personal Details">
              <Form1 />
            </Stepper.Step>
            <Stepper.Step label="Second step" description="Education Details">
              <Form2 />
            </Stepper.Step>
            <Stepper.Step label="Third step" description="Experience Details">
              <Form3 />
            </Stepper.Step>
            <Stepper.Step label="Fourth step" description="Project Details">
              <Form4 />
            </Stepper.Step>
            <Stepper.Step label="Final step" description="Extra Details">
              <Form5 />
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
        </Flex>
        <Flex justify="center" align="center" pt="20" gap="20">
          {active !== 0 && (
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
          )}
          {active !== 5 && (
            <Button onClick={handleNextStepNotification}>Next step</Button>
          )}
          {active == 5 && <PdfGen />}
        </Flex>
      </Flex>
    </>
  );
};
export default Steps;
