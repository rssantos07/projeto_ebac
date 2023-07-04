class Dish {
  id: number
  image: string
  country: string
  title: string
  rank: number
  description: string

  constructor(
    id: number,
    image: string,
    country: string,
    title: string,
    rank: number,
    description: string
  ) {
    this.id = id
    this.image = image
    this.country = country
    this.title = title
    this.rank = rank
    this.description = description
  }
}

export default Dish
