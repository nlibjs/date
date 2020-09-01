import {isString} from '@nlib/typing';
import {getTimeZoneOffset} from './timezone';
import {defineReadOnlyProperties} from '@nlib/global';

export interface DateFormatter {
    readonly fragments?: ReadonlyArray<string | DateFormatter>,
    (date: Date): string,
}

export const normalizeFragments = (
    fragments: Array<string | DateFormatter>,
): Array<string | DateFormatter> => {
    const result: Array<string | DateFormatter> = [];
    for (const fragment of fragments) {
        if (isString(fragment)) {
            result.push(fragment);
        } else if (fragment.fragments) {
            result.push(...fragment.fragments);
        } else {
            result.push(fragment);
        }
    }
    return result;
};

export const createDateFormatter = (
    ...args: Array<string | DateFormatter>
): DateFormatter => {
    const fragments = normalizeFragments(args);
    return defineReadOnlyProperties(
        (date: Date) => fragments
        .map((fragment) => isString(fragment) ? fragment : fragment(date))
        .join(''),
        {fragments},
    );
};

const pad2 = (input: number | string) => `${input}`.padStart(2, '0');

export const Y: DateFormatter = (date) => `${date.getFullYear()}`;
export const YYYY: DateFormatter = (date) => Y(date).padStart(4, '0');
export const YY: DateFormatter = (date) => YYYY(date).slice(-2);
export const M: DateFormatter = (date) => `${date.getMonth() + 1}`;
export const MM: DateFormatter = (date) => pad2(M(date));
export const MonthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
export const MMMM: DateFormatter = (date) => MonthName[date.getMonth()];
export const MMM: DateFormatter = (date) => MMMM(date).slice(0, 3);
export const D: DateFormatter = (date) => `${date.getDate()}`;
export const DD: DateFormatter = (date) => pad2(D(date));
export const DayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
export const dddd: DateFormatter = (date) => DayName[date.getDay()];
export const ddd: DateFormatter = (date) => dddd(date).slice(0, 3);
export const ISO8601DATE = createDateFormatter(YYYY, '-', MM, '-', DD);

export const h: DateFormatter = (date) => `${date.getHours()}`;
export const hh: DateFormatter = (date) => pad2(h(date));
export const m: DateFormatter = (date) => `${date.getMinutes()}`;
export const mm: DateFormatter = (date) => pad2(m(date));
export const s: DateFormatter = (date) => `${date.getSeconds()}`;
export const ss: DateFormatter = (date) => pad2(s(date));
export const ISO8601TIME = createDateFormatter(hh, ':', mm, ':', ss);
export const Z: DateFormatter = (date) => {
    const tz = getTimeZoneOffset(date);
    return `${tz.sign}${tz.hour}:${pad2(tz.minute)}`;
};
export const ZZ: DateFormatter = (date) => {
    const tz = getTimeZoneOffset(date);
    return `${tz.sign}${pad2(tz.hour)}:${pad2(tz.minute)}`;
};
export const ZZZ: DateFormatter = (date) => {
    const tz = getTimeZoneOffset(date);
    return `${tz.sign}${pad2(tz.hour)}${pad2(tz.minute)}`;
};

export const ISO8601: DateFormatter = createDateFormatter(ISO8601DATE, 'T', ISO8601TIME, ZZZ);
