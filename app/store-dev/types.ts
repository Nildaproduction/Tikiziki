export type Product = {
  id: string
  name: string
  price: number
  category: "Music" | "TShirt" | "Merch"  // Music included, Vinyl removed
  images: string[]
  stock: number
  description: string
  type: "digital" | "physical"  // Music is digital, merch is physical
}
