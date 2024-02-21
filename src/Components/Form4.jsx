import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Flex, Input, Title } from "@mantine/core";

const Form4 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [userForm4, setUserForm4] = useState([]);

  const onSubmit = (data) => {
    setUserForm4([...userForm4, data]);
    // reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="lg">
        {/* project details first */}
        <Title order={3}>Project First</Title>
        <Flex direction="column" gap="lg">
          <Input
            type="text"
            placeholder="Project Title*"
            {...register("projectTitle1")}
            required
          />
          <Input
            type="url"
            placeholder="Link"
            {...register("projectlink1")}
            required
          />
          <Flex gap="lg">
            <Input
              type="date"
              placeholder="Start Date"
              {...register("StartDate1")}
              required
              w="50%"
            />

            <Input
              type="date"
              placeholder="End Date"
              {...register("EndDate1")}
              required
              w="50%"
            />
          </Flex>
          <Input
            type="text"
            placeholder="Description"
            {...register("projectdescription1")}
          />
        </Flex>

        {/* project details 2nd */}
        <Title order={3}>Project Second</Title>
        <Flex direction="column" gap="lg">
          <Input
            type="text"
            placeholder="Project Title*"
            {...register("projectTitle2")}
            required
          />
          <Input
            type="url"
            placeholder="Link"
            {...register("projectlink2")}
            required
          />
          <Flex gap="lg">
            <Input
              type="date"
              placeholder="Start Date"
              {...register("StartDate2")}
              required
              w="50%"
            />

            <Input
              type="date"
              placeholder="End Date"
              {...register("EndDate2")}
              required
              w="50%"
            />
          </Flex>
          <Input
            type="text"
            placeholder="Description"
            {...register("projectdescription2")}
          />
        </Flex>

        {/* project details 3rd */}
        <Title order={3}>Project Third</Title>
        <Flex direction="column" gap="lg">
          <Input
            type="text"
            placeholder="Project Title*"
            {...register("projectTitle3")}
          />
          <Input type="url" placeholder="Link" {...register("projectlink3")} />
          <Flex gap="lg">
            <Input
              type="date"
              placeholder="Start Date"
              {...register("StartDate3")}
              w="50%"
            />

            <Input
              type="date"
              placeholder="End Date"
              {...register("EndDate3")}
              w="50%"
            />
          </Flex>
          <Input
            type="text"
            placeholder="Description"
            {...register("projectdescription3")}
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
export default Form4;
