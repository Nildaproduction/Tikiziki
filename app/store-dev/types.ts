// /app/store-dev/types.ts
export type Product = {
  id: string
  name: string
  price: number
  category: "Music" | "TShirt" | "Merch"
  images: string[]
  description: string
  type: "digital" | "physical"
  stock: number
}
