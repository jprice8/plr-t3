export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export const usdTwoDigits = (dollars: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  })

  return formatter.format(dollars)
}