import colorsArray from "./colors.json"

console.log("forEach" in colorsArray)

const array2  = colorsArray.map(el => el) 


type Color = typeof array2 as const

// const col: Color = "redsd"
