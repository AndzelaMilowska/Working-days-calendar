// import { Tooltip, Toast, Popover } from 'bootstrap';
import './styles/main.scss'
import { DateArrangements } from './app/date_arrangements';
import { CalendarRendering } from './app/calendar_rendering';
import { CalendarArrangements } from './app/calendar_arrangements';
import { DateTypeSetter } from './app/set_date_type';
import { CalendarExport } from './app/calendar_export';


DateTypeSetter.setDateType()
CalendarRendering.runMonthRender(DateArrangements.month(), DateArrangements.year())
CalendarArrangements.changeMonthListener()
CalendarExport.exportToPdf()

