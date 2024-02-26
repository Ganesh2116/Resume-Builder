import { useFormContext } from "react-hook-form";
import { Flex, Input, Title } from "@mantine/core";

const Form3 = () => {
  const { register } = useFormContext();

  return (
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
          type="number"
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
          {...register("institue2")}
        />
        <Input
          type="text"
          placeholder="Position"
          {...register("institue2position")}
        />
        <Input
          type="number"
          placeholder="Duration"
          {...register("institue2duration")}
        />
        <Input
          type="text"
          placeholder="Description"
          {...register("institue2description")}
        />
      </Flex>
    </Flex>
  );
};
export default Form3;
