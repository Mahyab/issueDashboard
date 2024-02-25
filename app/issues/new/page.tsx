"use client";
import { Flex, TextArea, TextField, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3 ">
      <Flex direction="column" gap="3">
        <TextField.Input placeholder="Title" />
        <TextArea placeholder="description" />
      </Flex>
      <Button>Submit New Issue</Button>
    </div>
  );
};
export default NewIssuePage;
