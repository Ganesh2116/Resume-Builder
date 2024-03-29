import { Flex, Input, Title } from "@mantine/core";
import { useFormContext } from "react-hook-form";

const Form5 = () => {
  const { register } = useFormContext();

  return (
    <>
      {/* skills group */}
      <Title order={3}>Skills</Title>
      <Flex gap="lg" pt="20">
        <Input
          type="text"
          placeholder="Skill 1"
          {...register("skill1")}
          w="33.33%"
          required
        />
        <Input
          type="text"
          placeholder="Skill 2"
          {...register("skill2")}
          w="33.33%"
          required
        />
        <Input
          type="text"
          placeholder="Skill 3"
          {...register("skill3")}
          w="33.33%"
        />
      </Flex>
      <Flex gap="md" pt="20" pb="20">
        <Input
          type="text"
          placeholder="Skill 4"
          {...register("skill4")}
          w="33.33%"
        />
        <Input
          type="text"
          placeholder="Skill 5"
          {...register("skill5")}
          w="33.33%"
        />
        <Input
          type="text"
          placeholder="Skill 6"
          {...register("skill6")}
          w="33.33%"
        />
      </Flex>

      {/* interest group */}
      <Title order={3}>Interest</Title>
      <Flex gap="lg" pt="20">
        <Input
          type="text"
          placeholder="Interest 1"
          {...register("Interest1")}
          w="33.33%"
          required
        />
        <Input
          type="text"
          placeholder="Interest 2"
          {...register("Interest2")}
          w="33.33%"
          required
        />
        <Input
          type="text"
          placeholder="Interest 3"
          {...register("Interest3")}
          w="33.33%"
        />
      </Flex>
      <Flex gap="lg" pt="20">
        <Input
          type="text"
          placeholder="Interest 4"
          {...register("Interest4")}
          w="33.33%"
        />
        <Input
          type="text"
          placeholder="Interest 5"
          {...register("Interest5")}
          w="33.33%"
        />
        <Input
          type="text"
          placeholder="Interest 6"
          {...register("Interest6")}
          w="33.33%"
        />
      </Flex>
    </>
  );
};
export default Form5;
