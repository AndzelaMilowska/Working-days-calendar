
export function rowLayout(rowClass) { return `<tr class=${rowClass}></tr>` }
export function dateCellLayout(date) { return `<td class="date">${date}</td>` }
export function convertClassToSelector(className) {return '.' + className}
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const CALENDAR_TABLE_ROWS_CLASS = 'calendar-table__row'
export const CALENDAR_TABLE_SELECTOR = '.calendar-table'
// export const CALENDAR_TABLE_ROWS_SELECTOR = '.'+ CALENDAR_TABLE_ROWS_CLASS
export const CURRENT_MONTH_SELECTOR = '.month-navigation__current-month'
export const NEXT_MONTH_BUTTON_SELECTOR = '.month-navigation__next'
export const PREVIOUS_MONTH_BUTTON_SELECTOR = '.month-navigation__previous'
export const DATE_SELECTOR = '.date'
export const DATE_TYPE_CLASSES = {
    workingDays: 'working_days',
    daysOff: 'days_off',
    weekends: 'weekends'
}
export const DATE_STYLE_CLASSES = {
    workingDays: "text-info",
    daysOff: "text-info",
    weekends: "text-info"
}
