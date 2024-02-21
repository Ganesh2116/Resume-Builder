import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Flex, Input, Title } from "@mantine/core";

const Form3 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [userForm3, setUserForm3] = useState([]);

  const onSubmit = (data) => {
    setUserForm3([...userForm3, data]);
    // reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="lg">
        {/* experience detail first */}
        <Title order={3}>Experience First</Title>
        <Flex direction="column" gap="lg">
          <Input
            type="text"
            placeholder="Institue/Organisation*"
            {...register("institue1")}
            required
          />
          <Input
            type="text"
            placeholder="Position*"
            {...register("institue1position")}
            required
          />
          <Input
            type="text"
            placeholder="Duration*"
            {...register("institue1duration")}
            required
          />
          <Input
            type="text"
            placeholder="Description"
            {...register("institue1description")}
          />
        </Flex>

        {/* ecperience 2nd */}
        <Title order={3}>Experience Second</Title>
        <Flex direction="column" gap="lg">
          <Input
            type="text"
            placeholder="Institue/Organisation"
            {...register("institue1")}
          />
          <Input
            type="text"
            placeholder="Position"
            {...register("institue1position")}
          />
          <Input
            type="number"
            placeholder="Duration"
            {...register("institue1duration")}
          />
          <Input
            type="text"
            placeholder="Description"
            {...register("institue1description")}
          />
        </Flex>
      </Flex>
      <Flex justify="center" align="center" pt="50">
        <Button variant="filled" type="submit" value="submit">
          Submit
        </Button>
      </Flex>
    </form>
  );
};
export default Form3;
