import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Form5 from "./Form5";
import PdfGen from "./PdfGen";
import { useState } from "react";
import { Stepper, Button, Flex } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { FormProvider, useForm } from "react-hook-form";

const Steps = () => {
  const [active, setActive] = useState(0);
  const form = useForm();

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

  const onSubmit = (data) => {
    if (active < 4) {
      setActive((prev) => prev + 1);
      return;
    }

    setActive(5);
    console.log("form submitted");
    console.log(data);
  };

  return (
    <>
      <Flex direction="column" pt="50">
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Flex>
              <Stepper active={active} onStepClick={setActive}>
                <Stepper.Step label="First step" description="Personal Details">
                  <Form1 />
                </Stepper.Step>
                <Stepper.Step
                  label="Second step"
                  description="Education Details"
                >
                  <Form2 />
                </Stepper.Step>
                <Stepper.Step
                  label="Third step"
                  description="Experience Details"
                >
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
              <Button type="submit">Submit</Button>
              {active !== 5 && (
                <Button onClick={handleNextStepNotification} variant="default">
                  Next step
                </Button>
              )}
              {active == 5 && <PdfGen />}
            </Flex>
          </form>
        </FormProvider>
      </Flex>
    </>
  );
};
export default Steps;
