import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Flex, Input, Title } from "@mantine/core";

const Form2 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [userForm2, setUserForm2] = useState([]);

  const onSubmit = (data) => {
    setUserForm2([...userForm2, data]);
    // reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="lg">
        {/* Degree detail */}
        <Title order={3}>Degree Detail</Title>
        <Flex gap="lg" direction="column">
          <Input
            type="text"
            placeholder="Degree/Unviersity*"
            {...register("Degreeunviersity")}
            required
          />
          <Input
            type="text"
            placeholder="Qualication*"
            {...register("Degreequalication")}
            required
          />
          <Flex gap="lg">
            <Input
              type="date"
              placeholder="Form year"
              {...register("Degreeformyear")}
              required
              w="33.33%"
            />

            <Input
              type="date"
              placeholder="To year"
              {...register("Degreetoyear")}
              required
              w="33.33%"
            />
            <Input
              type="number"
              placeholder="percentage % or sgpa/cgpa(10/10)"
              {...register("degreepercentage")}
              required
              w="33.33%"
            />
          </Flex>
        </Flex>

        {/* College Detail */}
        <Title order={3}>College Deatil</Title>
        <Flex gap="lg" direction="column">
          <Input
            type="text"
            placeholder="Collage/Unviersity*"
            {...register("collageunviersity")}
            required
          />
          <Input
            type="text"
            placeholder="Qualication*"
            {...register("clgqualication")}
            required
          />
          <Flex gap="lg">
            <Input
              type="date"
              placeholder="Form year"
              {...register("clgformyear")}
              required
              w="33.33%"
            />

            <Input
              type="date"
              placeholder="To year"
              {...register("clgtoyear")}
              required
              w="33.33%"
            />
            <Input
              type="number"
              placeholder="percentage %"
              {...register("collegepercentage")}
              required
              w="33.33%"
            />
          </Flex>
        </Flex>

        {/* School Detail */}
        <Title order={3}>School Detail</Title>
        <Flex gap="lg" direction="column">
          <Input
            type="text"
            placeholder="School*"
            {...register("school")}
            required
          />
          <Input
            type="text"
            placeholder="Qualication*"
            {...register("schoolqualicartion")}
            required
          />
          <Flex gap="lg">
            <Input
              type="date"
              placeholder="Form year"
              {...register("schoolformyear")}
              required
              w="33.33%"
            />
            <Input
              type="date"
              placeholder="To year"
              {...register("schooltoyear")}
              required
              w="33.33%"
            />
            <Input
              type="number"
              placeholder="percentage %"
              {...register("schoolepercentage")}
              required
              w="33.33%"
            />
          </Flex>
        </Flex>
        <Flex justify="center" align="center" pt="50">
          <Button variant="filled" type="submit" value="submit">
            Submit
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
export default Form2;
