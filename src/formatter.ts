import {getTimeZoneOffset} from './timezone';
import {DateFormatter, createDateFormatter} from './createDateFormatter';
import {MonthName, DayName} from './constants';

const pad2 = (input: number | string) => `${input}`.padStart(2, '0');

export const lY: DateFormatter = (date) => `${date.getFullYear()}`;
export const lYYYY: DateFormatter = (date) => lY(date).padStart(4, '0');
export const lYY: DateFormatter = (date) => lYYYY(date).slice(-2);
export const lM: DateFormatter = (date) => `${date.getMonth() + 1}`;
export const lMM: DateFormatter = (date) => pad2(lM(date));
export const lMMMM: DateFormatter = (date) => MonthName[date.getMonth()];
export const lMMM: DateFormatter = (date) => lMMMM(date).slice(0, 3);
export const lD: DateFormatter = (date) => `${date.getDate()}`;
export const lDD: DateFormatter = (date) => pad2(lD(date));
export const ldddd: DateFormatter = (date) => DayName[date.getDay()];
export const lddd: DateFormatter = (date) => ldddd(date).slice(0, 3);
export const lISO8601DATE = createDateFormatter(lYYYY, '-', lMM, '-', lDD);

export const uY: DateFormatter = (date) => `${date.getUTCFullYear()}`;
export const uYYYY: DateFormatter = (date) => uY(date).padStart(4, '0');
export const uYY: DateFormatter = (date) => uYYYY(date).slice(-2);
export const uM: DateFormatter = (date) => `${date.getUTCMonth() + 1}`;
export const uMM: DateFormatter = (date) => pad2(uM(date));
export const uMMMM: DateFormatter = (date) => MonthName[date.getUTCMonth()];
export const uMMM: DateFormatter = (date) => uMMMM(date).slice(0, 3);
export const uD: DateFormatter = (date) => `${date.getUTCDate()}`;
export const uDD: DateFormatter = (date) => pad2(uD(date));
export const udddd: DateFormatter = (date) => DayName[date.getUTCDay()];
export const uddd: DateFormatter = (date) => udddd(date).slice(0, 3);
export const uISO8601DATE = createDateFormatter(uYYYY, '-', uMM, '-', uDD);

export const lh: DateFormatter = (date) => `${date.getHours()}`;
export const lhh: DateFormatter = (date) => pad2(lh(date));
export const lm: DateFormatter = (date) => `${date.getMinutes()}`;
export const lmm: DateFormatter = (date) => pad2(lm(date));
export const ls: DateFormatter = (date) => `${date.getSeconds()}`;
export const lss: DateFormatter = (date) => pad2(ls(date));
export const lms: DateFormatter = (date) => `${date.getMilliseconds()}`.padStart(3, '0');
export const lISO8601TIME = createDateFormatter(lhh, ':', lmm, ':', lss, '.', lms);

export const uh: DateFormatter = (date) => `${date.getUTCHours()}`;
export const uhh: DateFormatter = (date) => pad2(uh(date));
export const um: DateFormatter = (date) => `${date.getUTCMinutes()}`;
export const umm: DateFormatter = (date) => pad2(um(date));
export const us: DateFormatter = (date) => `${date.getUTCSeconds()}`;
export const uss: DateFormatter = (date) => pad2(us(date));
export const ums: DateFormatter = (date) => `${date.getUTCMilliseconds()}`.padStart(3, '0');
export const uISO8601TIME = createDateFormatter(uhh, ':', umm, ':', uss, '.', ums);

export const lZ: DateFormatter = (date) => {
    const tz = getTimeZoneOffset(date);
    return `${tz.sign}${tz.hour}:${pad2(tz.minute)}`;
};
export const lZZ: DateFormatter = (date) => {
    const tz = getTimeZoneOffset(date);
    return `${tz.sign}${pad2(tz.hour)}:${pad2(tz.minute)}`;
};
export const lZZZ: DateFormatter = (date) => {
    const tz = getTimeZoneOffset(date);
    return `${tz.sign}${pad2(tz.hour)}${pad2(tz.minute)}`;
};
export const lISO8601: DateFormatter = createDateFormatter(lISO8601DATE, 'T', lISO8601TIME, lZZZ);
export const uISO8601: DateFormatter = createDateFormatter(uISO8601DATE, 'T', uISO8601TIME, 'Z');
