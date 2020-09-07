import {defineReadOnlyProperties} from '@nlib/global';

const isString = (
    input: string | DateFormatter,
): input is string => typeof input === 'string';

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
