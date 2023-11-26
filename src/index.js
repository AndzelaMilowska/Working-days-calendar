// import { Tooltip, Toast, Popover } from 'bootstrap';
import './styles/main.scss'
import { DateArrangements } from './app/date_arrangements';
import { CalendarRendering } from './app/calendar_rendering';
import { CalendarArrangements } from './app/calendar_arrangements';

// DateArrangements.date.setMonth(1)
CalendarRendering.runMonthRender(DateArrangements.month(), DateArrangements.year())
CalendarArrangements.changeMonthListener()
