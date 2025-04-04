import { defineCollection, z } from "astro:content";

type Image = {
	image: () => z.ZodTypeAny;
};

const membersCollection = defineCollection({
	type: "data",
	schema: ({ image }: Image) =>
		z.object({
			id: z.number(),
			group: z.number(),
			name: z.string(),
			position: z.string(),
			department: z.string(),
			photo: image(),
		}),
});

const universitiesCollection = defineCollection({
	type: "data",
	schema: ({ image }: Image) =>
		z.object({
			id: z.number(),
			name: z.string(),
			logo: image(),
		}),
});

export const collections = {
	"members": membersCollection,
	"unis": universitiesCollection,
};
