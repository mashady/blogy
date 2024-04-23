"use client";

import { useEffect, useMemo, useState } from "react";
import SelectInput from "../SelectInput";
import TagsInput from "../Tags Inputs/TagsInput";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "@/app/ValidationSchemas";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";

type PostFormData = z.infer<typeof postSchema>;

const PostForm = ({ post }: any) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit((data, e) => {
    e?.preventDefault();
    console.log(data);
    console.log("submitted");
  });

  const selectedTags = (tags: any) => {
    // just take first tag
    setValue("tags", tags[0], { shouldValidate: true });
  };
  const sectionSelected = (value: any) => {
    console.log(value);

    setValue("section", value, { shouldValidate: true });
  };
  const preventEnterKeySubmission = (
    e: React.KeyboardEvent<HTMLFormElement>
  ) => {
    const target = e.target;
    if (e.key === "Enter" && target instanceof HTMLInputElement) {
      e.preventDefault();
    }
  };
  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    } as SimpleMDE.Options;
  }, []);
  return (
    <>
      <div className="max-w-[1280px] mx-auto px-4 mt-8">
        <div className="max-w-xl">
          <form
            className="space-y-3 mb-6"
            onSubmit={onSubmit}
            onKeyDown={preventEnterKeySubmission}
          >
            <input
              className="bg-gray-200 text-gray-700 placeholder-gray-700 outline-none rounded p-2 w-full mt-2"
              type="text"
              value={post?.title}
              {...register("title")}
              placeholder="Name your title"
            />
            <span>{errors.title?.message}</span>
            <input
              className="bg-gray-200 text-gray-700 placeholder-gray-700 outline-none rounded p-2 w-full mt-2"
              type="text"
              {...register("slug")}
              value={post?.slug}
              placeholder="Write your own link slug"
            />
            <span>{errors.slug?.message}</span>
            <input
              className="bg-gray-200 text-gray-700 placeholder-gray-700 outline-none rounded p-2 w-full mt-2"
              type="text"
              {...register("cover")}
              value={post?.cover}
              placeholder="Put your own cover link ex: http://example.com"
            />
            <span>{errors.cover?.message}</span>
            <div>
              <SelectInput sectionSelected={sectionSelected} />
              {}
            </div>

            <span>{errors.section?.message}</span>

            <TagsInput selectedTags={selectedTags} tagsP={[]} />

            <span>{errors.tags?.message}</span>

            <Controller
              name="description"
              control={control}
              defaultValue={post?.description}
              render={({ field }) => (
                <SimpleMDE
                  placeholder="Description"
                  options={autofocusNoSpellcheckerOptions}
                  {...field}
                />
              )}
            />
            <span>{errors.description?.message}</span>

            <button
              className="flex items-center justify-between gap-3 bg-[#1f4d78] text-white rounded w-full h-[50px] px-4"
              disabled={isSubmitting}
            >
              {post ? "Update Post" : "Submit New Post"}{" "}
              {isSubmitting && (
                <div className="inline-flex">
                  <span className="loader"></span>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostForm;
