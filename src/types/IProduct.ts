export default interface IProduct {
  id: string | number,
  title: string,
  images: [string],
  price: number,
  oldPrice: number,
  rating: number,
  description: string,
  isFavourite: boolean
}