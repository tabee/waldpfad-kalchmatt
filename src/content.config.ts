import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Content model for the digital forest learning trail.
 *
 * Markdown files are the source of truth (see content-model.instructions.md).
 * All public text lives in Markdown; field names/comments stay English.
 */

// Reusable sub-schemas ------------------------------------------------------

const imageSchema = z
  .object({
    src: z.string(),
    alt: z.string().min(1, "image.alt is required when an image exists"),
    source: z.string().optional(),
    author: z.string().optional(),
    license: z.string().optional(),
    attribution: z.string().optional(),
  })
  .optional();

const externalLinkSchema = z.object({
  label: z.string().min(1),
  url: z.string().url(),
  sourceType: z
    .enum(["official", "forestry", "science", "education", "other"])
    .default("other"),
});

// Fields shared by every station -------------------------------------------

const baseStationFields = {
  title: z.string().min(1),
  slug: z.string().min(1),
  status: z.enum(["planned", "active", "archived"]).default("planned"),
  draft: z.boolean().default(true),
  summary: z.string().min(1),
  keyMessage: z.string().min(1),
  order: z.number(),
  locationLabel: z.string().optional(),
  qrLabel: z.string().optional(),
  image: imageSchema,
  externalLinks: z.array(externalLinkSchema).default([]),
};

// Collections ---------------------------------------------------------------

const baeume = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/baeume" }),
  schema: z.object({
    type: z.literal("baum"),
    ...baseStationFields,
    germanName: z.string().min(1),
    latinName: z.string().min(1),
    treeStatus: z
      .enum(["existing", "newly-planted", "planned", "unknown"])
      .default("unknown"),
    approximateAge: z.string().optional(),
    ecologicalFunction: z.string().optional(),
    climateRelevance: z.string().optional(),
    foresterNote: z.string().optional(),
  }),
});

const objekte = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/objekte" }),
  schema: z.object({
    type: z.literal("objekt"),
    ...baseStationFields,
    objectType: z.enum([
      "asthaufen",
      "steinhaufen",
      "totholz",
      "wildhecke",
      "benjeshecke",
      "nistkasten",
      "insektenhotel",
      "waldlichtung",
      "other",
    ]),
    ecologicalFunction: z.string().optional(),
    doNotDisturb: z.string().optional(),
  }),
});

const seiten = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/seiten" }),
  schema: z.object({
    title: z.string().min(1),
    slug: z.string().min(1),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { baeume, objekte, seiten };
