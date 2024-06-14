import { z } from "zod";

const tagSchema = z.object({
  name: z.string(),
});

export const postSchema = z.object({
  title: z.string().min(1, "title is required").max(255),
  slug: z
    .string()
    .min(1, "slug is required")
    .refine((s) => !s.includes(" "), "No Spaces!"),
  cover: z
    .string()
    .url()
    .refine((s) => !s.includes(" "), "Enter a valid URL"),
  section: z.string().min(1, "section is required").max(255),
  //tags: z.string(),
  tags: z.array(tagSchema).min(1, "tags is required"),
  description: z.string().min(1, "Description is required.").max(65535),
  //user: z.string().min(1, "User is required"),
});
export const testSchema = z.object({
  title: z.string().min(1, "title is required").max(255),
});
export const updatePostSchema = z.object({
  title: z.string().min(1, "title is required").max(255).optional(),
  slug: z.string().min(1, "slug is required").max(255).optional(),
  cover: z.string().url().min(1, "cover is required").optional(),
  section: z.string().min(1, "section is required").max(255).optional(),
  tags: z.string().min(1, "section is required").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65535)
    .optional(),
});
