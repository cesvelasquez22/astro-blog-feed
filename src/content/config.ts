import { Formatter } from "@utils/formatter";
import { defineCollection, reference, z } from "astro:content";

// const blogCollection = defineCollection({
//   type: "content",
//   schema: z.object({
//     title: z.string(),
//     date: z.date(),
//     description: z.string(),
//     image: z.string(),
//     // TODO: Relation
//     author: z.string(),
//     // TODO: Relation
//     tags: z.array(z.string()),
//     // date: z
//     //   .string()
//     //   .refine((date) => !isNaN(Date.parse(Formatter.formatDate(date))), {
//     //     message: "Invalid date format",
//     //   }),
//   }),
// });

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image(),
      // TODO: Relation
      // author: z.string(),
      author: reference("author"),
      // TODO: Relation
      tags: z.array(z.string()),
      // date: z
      //   .string()
      //   .refine((date) => !isNaN(Date.parse(Formatter.formatDate(date))), {
      //     message: "Invalid date format",
      //   }),
      isDraft: z.boolean().default(false),
    }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      github: z.string().optional(),
      bio: z.string().optional(),
      subtitle: z.string().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
  author: authorCollection,
};
