"use client";
import { Flex, TextArea, TextField, Button, Callout } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IIssueForm {
  title: string;
  description: string;
}
const NewIssuePage = () => {
  const { register, handleSubmit, control } = useForm<IIssueForm>();
  const router = useRouter();
  const [error, setError] = useState<string>();
  return (
    <div>
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            console.log(error);
            setError("somthing is occured accidently");
          }
        })}
        className="max-w-xl space-y-3 "
      >
        <Flex direction="column" gap="3">
          <TextField.Input {...register("title")} placeholder="Title" />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="description" {...field} />
            )}
          />
        </Flex>
        <Button>Submit New Issue</Button>
      </form>
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
    </div>
  );
};
export default NewIssuePage;
