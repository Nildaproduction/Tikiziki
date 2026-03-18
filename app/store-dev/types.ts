// Tikiziki/app/store-dev/types.ts
export type Product = {
  id: string
  name: string
  price: number
  category: "Vinyl" | "TShirt" | "Merch"
  images: string[]
  stock: number
}
