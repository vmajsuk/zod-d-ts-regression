import { z } from "zod";

const allowedValue = z.object({
  property1: z.string(),
  property2: z.number(),
  property3: z.enum(["One", "Two", "Three"]),
});

export const schema = z
  .object({
    some: z
      .object({
        nested: z
          .object({
            property: z.object({}).catchall(allowedValue).passthrough(),
          })
          .passthrough(),
      })
      .passthrough(),
  })
  .passthrough();
