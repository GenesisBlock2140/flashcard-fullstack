import * as z from "zod"

export const deckSchema = z.object({
  name: z.string().min(3).max(64),
  theme: z.string().min(3).max(32),
  flashcard: z.array(z.object({
    textRecto: z.string().min(1).max(400),
    textVerso: z.string().min(1).max(400)
  })).max(50)
})