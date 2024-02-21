import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Flex, Input } from "@mantine/core";

const Form1 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [userForm1, setUserForm1] = useState([]);

  const onSubmit = (data) => {
    data.preventDefault();
    setUserForm1([...userForm1, data]);
    // reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap="lg" pt="lg">
          <Flex direction="column" gap="lg" w="50%">
            <Input
              placeholder="First Name*"
              type="text"
              required
              {...register("FirstName")}
            />
            <Input
              placeholder="Mail*"
              type="email"
              required
              {...register("Email")}
            />
            <Input
              placeholder="Link-din*"
              type="url"
              required
              {...register("LinkDin")}
            />
          </Flex>
          <Flex direction="column" gap="lg" w="50%">
            <Input
              placeholder="Last Name*"
              type="text"
              required
              {...register("LastName")}
            />
            <Input
              placeholder="Mobile Number*"
              type="number"
              required
              {...register("MobileNumber")}
            />

            <Input
              placeholder="Current Live"
              type="text"
              {...register("CurrentLive")}
            />
          </Flex>
        </Flex>
        <Flex justify="center" align="center" pt="50">
          <Button variant="filled" type="submit" value="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </>
  );
};
export default Form1;
