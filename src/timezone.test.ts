import {testFunction} from '@nlib/test';
import {parseTimeZoneOffset, getTimeZoneOffset} from './timezone';
import {Date} from '@nlib/global';

testFunction(parseTimeZoneOffset, {
    input: -754,
    expected: {sign: '+', hour: 12, minute: 34},
});
testFunction(parseTimeZoneOffset, {
    input: 754,
    expected: {sign: '-', hour: 12, minute: 34},
});
testFunction(getTimeZoneOffset, {
    input: new Date(),
    expected: {sign: '+', hour: 9, minute: 0},
});
