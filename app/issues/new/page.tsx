"use client";
import { Flex, TextArea, TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
interface IIssueForm {
  title: string;
  description: string;
}
const NewIssuePage = () => {
    const { register, handleSubmit, control } = useForm<IIssueForm>();
    const router = useRouter();
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues")
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
  );
};
export default NewIssuePage;
