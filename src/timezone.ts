export interface TimeZoneOffset {
    sign: '+' | '-',
    hour: number,
    minute: number,
}

export const parseTimeZoneOffset = (
    offset: number,
): TimeZoneOffset => {
    let sign: '+' | '-' = '-';
    let absolute = offset;
    if (absolute < 0) {
        sign = '+';
        absolute = -absolute;
    }
    const minute = absolute % 60;
    return {sign, hour: (absolute - minute) / 60, minute};
};

export const getTimeZoneOffset = (
    date: Date,
): TimeZoneOffset => parseTimeZoneOffset(date.getTimezoneOffset());
