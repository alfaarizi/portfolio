const MONTH_ABBREVIATIONS: Record<string, string> = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec',
}

// Generate regex dynamically from month names
const monthRegex = new RegExp(Object.keys(MONTH_ABBREVIATIONS).join('|'), 'g')

export const formatDate = (date: string): string => {
  return date.replace(monthRegex, (month) => MONTH_ABBREVIATIONS[month])
}
