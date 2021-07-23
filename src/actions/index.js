export const petIncrement = (number) => {
  return {
    type: "PET_INCREASED",
    payload:number,
  }
} 

export const petDecrement = () => {
  return{
    type: "PET_DECREASED"
  }
}
export const petFavIncrement = (r) => {
  return {
    type: "PET_FAVORITE_INCREASED"
  }
} 

export const petFavDecrement = () => {
  return{
    type: "PET_FAVORITE_DECREASED"
  }
}
