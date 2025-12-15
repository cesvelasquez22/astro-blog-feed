import { Formatter } from "@utils/formatter";
import { defineCollection, z } from "astro:content";

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
      author: z.string(),
      // TODO: Relation
      tags: z.array(z.string()),
      // date: z
      //   .string()
      //   .refine((date) => !isNaN(Date.parse(Formatter.formatDate(date))), {
      //     message: "Invalid date format",
      //   }),
    }),
});

export const collections = {
  blog: blogCollection,
};
