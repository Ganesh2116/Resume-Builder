import { useFormContext } from "react-hook-form";
import { Flex, Input } from "@mantine/core";

const Form1 = () => {
  const { register } = useFormContext();

  return (
    <>
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
    </>
  );
};
export default Form1;
