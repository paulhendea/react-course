export const checkWinner = ({ rows, cols, diagonals }) => {
  return [rows, cols, diagonals].some((direction) =>
    direction.some((element) => element === 3)
  )
}
