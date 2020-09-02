import {testFunction} from '@nlib/test';
import {Date} from '@nlib/global';
import {
    lZZ,
    lZ,
    lZZZ,
    lYYYY,
    lYY,
    lY,
    lMM,
    lM,
    lMMMM,
    lMMM,
    lDD,
    lD,
    ldddd,
    lddd,
    lISO8601DATE,
    uYYYY,
    uYY,
    uY,
    uMM,
    uM,
    uMMMM,
    uMMM,
    uDD,
    uD,
    udddd,
    uddd,
    uISO8601DATE,
    lhh,
    lh,
    lmm,
    lm,
    lss,
    ls,
    lISO8601TIME,
    lISO8601,
    lms,
    uhh,
    uh,
    umm,
    um,
    uss,
    us,
    uISO8601TIME,
    uISO8601,
    ums,
} from './formatter';

const Date0999 = '0999-12-31T23:45:01.023Z';
const Date2020 = '2020-12-31T23:45:01.023Z';

testFunction(lZZZ, {input: new Date(Date2020), expected: '+0900'});
testFunction(lZZ, {input: new Date(Date2020), expected: '+09:00'});
testFunction(lZ, {input: new Date(Date2020), expected: '+9:00'});

testFunction(lYYYY, {input: new Date(Date0999), expected: '1000'});
testFunction(lYY, {input: new Date(Date0999), expected: '00'});
testFunction(lY, {input: new Date(Date0999), expected: '1000'});
testFunction(lYYYY, {input: new Date(Date2020), expected: '2021'});
testFunction(lYY, {input: new Date(Date2020), expected: '21'});
testFunction(lY, {input: new Date(Date2020), expected: '2021'});
testFunction(lMM, {input: new Date(Date2020), expected: '01'});
testFunction(lM, {input: new Date(Date2020), expected: '1'});
testFunction(lMMMM, {input: new Date(Date2020), expected: 'January'});
testFunction(lMMM, {input: new Date(Date2020), expected: 'Jan'});
testFunction(lDD, {input: new Date(Date2020), expected: '01'});
testFunction(lD, {input: new Date(Date2020), expected: '1'});
testFunction(ldddd, {input: new Date(Date2020), expected: 'Friday'});
testFunction(lddd, {input: new Date(Date2020), expected: 'Fri'});
testFunction(lISO8601DATE, {input: new Date(Date2020), expected: '2021-01-01'});


testFunction(uYYYY, {input: new Date(Date0999), expected: '0999'});
testFunction(uYY, {input: new Date(Date0999), expected: '99'});
testFunction(uY, {input: new Date(Date0999), expected: '999'});
testFunction(uYYYY, {input: new Date(Date2020), expected: '2020'});
testFunction(uYY, {input: new Date(Date2020), expected: '20'});
testFunction(uY, {input: new Date(Date2020), expected: '2020'});
testFunction(uMM, {input: new Date(Date2020), expected: '12'});
testFunction(uM, {input: new Date(Date2020), expected: '12'});
testFunction(uMMMM, {input: new Date(Date2020), expected: 'December'});
testFunction(uMMM, {input: new Date(Date2020), expected: 'Dec'});
testFunction(uDD, {input: new Date(Date2020), expected: '31'});
testFunction(uD, {input: new Date(Date2020), expected: '31'});
testFunction(udddd, {input: new Date(Date2020), expected: 'Thursday'});
testFunction(uddd, {input: new Date(Date2020), expected: 'Thu'});
testFunction(uISO8601DATE, {input: new Date(Date2020), expected: '2020-12-31'});

testFunction(lhh, {input: new Date(Date2020), expected: '08'});
testFunction(lh, {input: new Date(Date2020), expected: '8'});
testFunction(lmm, {input: new Date(Date2020), expected: '45'});
testFunction(lm, {input: new Date(Date2020), expected: '45'});
testFunction(lss, {input: new Date(Date2020), expected: '01'});
testFunction(ls, {input: new Date(Date2020), expected: '1'});
testFunction(lms, {input: new Date(Date2020), expected: '023'});
testFunction(lISO8601TIME, {input: new Date(Date2020), expected: '08:45:01.023'});
testFunction(lISO8601, {input: new Date(Date2020), expected: '2021-01-01T08:45:01.023+0900'});

testFunction(uhh, {input: new Date(Date2020), expected: '23'});
testFunction(uh, {input: new Date(Date2020), expected: '23'});
testFunction(umm, {input: new Date(Date2020), expected: '45'});
testFunction(um, {input: new Date(Date2020), expected: '45'});
testFunction(uss, {input: new Date(Date2020), expected: '01'});
testFunction(us, {input: new Date(Date2020), expected: '1'});
testFunction(ums, {input: new Date(Date2020), expected: '023'});
testFunction(uISO8601TIME, {input: new Date(Date2020), expected: '23:45:01.023'});
testFunction(uISO8601, {input: new Date(Date2020), expected: '2020-12-31T23:45:01.023Z'});
