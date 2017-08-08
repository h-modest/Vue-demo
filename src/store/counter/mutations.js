export const increment = state => {
  state.count = state.count + 5
}

export const decrement = state => {
  API.post('product', { 'count': 0 })
  .then(count => state.count = count.count)
}
