"use client";
import React from "react";
import ChipsInput from "./ChipsInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { testSchema } from "../ValidationSchemas";
import { z } from "zod";
type testSchemaData = z.infer<typeof testSchema>;
const {
  register,
  control,
  handleSubmit,
  setValue,
  formState: { errors },
} = useForm<testSchemaData>({
  resolver: zodResolver(testSchema),
});
const page = () => {
  return (
    <div>
      <h1>Chips Input Example</h1>
      <ChipsInput name="title" control={control} />
    </div>
  );
};

export default page;
