"use client";

import { useEffect, useMemo, useState } from "react";
import SelectInput from "../SelectInput";
import TagsInput from "../Tags Inputs/TagsInput";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";

import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "@/app/ValidationSchemas";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import ErrorMessage from "./ErrorMessage";
import prisma from "@/prisma/client";
import { currentUser } from "@/lib/auth";
import { useCurrentUser } from "../hooks/useCurrentUser";
type PostFormData = z.infer<typeof postSchema>;

const PostForm = ({ post, postTags }: any) => {
  const user = useCurrentUser();
  const router = useRouter();
  const { toast } = useToast();
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
  const [thePostTags, setPostTags] = useState<any>(null);
  useEffect(() => {
    console.log(user);
    setValue("user", user?.id!);
  }, [user]);

  const onSubmit = handleSubmit(async (data, e) => {
    try {
      // handle images upload
      const modifiedData = {
        ...data,
        title: "static content",
      };
      console.log(modifiedData);
      setSubmitting(true);
      if (post) await axios.patch("/api/posts" + post.id, data);
      else await axios.post("/api/posts", data);
      console.log("new post added successfully");
      setSubmitting(false);
      toast({
        title: "New post added successfully",
        description: "Friday, February 10, 2023 at 5:57 PM",
      });
      router.push("/");
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occurred.");
      console.log(error);
    }
  });

  const selectedTags = (tags: any) => {
    // just take first tag
    console.log(tags);
    //setValue("tags", tags, { shouldValidate: true });
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
    };
  }, []);
  return (
    <>
      <div className="max-w-xl">
        <div className="text-3xl mb-4">New post</div>
        <form
          className="space-y-3 mb-6"
          onSubmit={onSubmit}
          onKeyDown={preventEnterKeySubmission}
        >
          <input
            className={`bg-inherit  border-[#4242423b]  dark:border-[#fff] text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[1px] outline-none rounded p-2 w-full mt-2`}
            type="text"
            value={post?.title}
            {...register("title")}
            placeholder="Name your title"
          />
          {errors.title && (
            <ErrorMessage message={errors.title?.message as string} />
          )}

          <input
            className={`bg-inherit border-[#4242423b]  dark:border-[#fff] text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[1px] outline-none rounded p-2 w-full mt-2`}
            type="text"
            {...register("slug")}
            value={post?.slug}
            placeholder="Write your own link slug"
          />
          {errors.slug && (
            <ErrorMessage message={errors.slug?.message as string} />
          )}
          <input
            className={`bg-inherit border-[#4242423b]  dark:border-[#fff] text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white border-[1px] outline-none rounded p-2 w-full mt-2`}
            type="text"
            {...register("cover")}
            value={post?.cover}
            placeholder="Put your own cover link ex: http://example.com"
          />
          {errors.cover && (
            <ErrorMessage message={errors.cover?.message as string} />
          )}
          <div>
            <SelectInput
              sectionSelected={sectionSelected}
              defaultValue={post?.section}
            />
            {}
          </div>
          {errors.section && (
            <ErrorMessage message={errors.section?.message as string} />
          )}

          {/**
           * this feature will be disabled for now and will be activated in another versions
          <TagsInput
            selectedTags={selectedTags}
            tagsP={[]}
            defaultValue={postTags}
          />
          {errors.tags && (
            <ErrorMessage message={errors.tags?.message as string} />
          )}
           * 
           * 
           */}

          <Controller
            name="description"
            control={control}
            defaultValue={post?.description}
            render={({ field }) => (
              <SimpleMDE
                placeholder=""
                options={autofocusNoSpellcheckerOptions}
                {...field}
              />
            )}
          />
          {errors.description && (
            <ErrorMessage message={errors.description?.message as string} />
          )}
          {errors.user?.message}
          <button
            className="flex items-center justify-center gap-3 bg-[#1f4d78] text-white rounded w-[100px] h-[50px] px-4"
            disabled={isSubmitting}
          >
            {post ? "Update" : "Post"}{" "}
            {isSubmitting && (
              <div className="inline-flex">
                <span className="loader"></span>
              </div>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default PostForm;
