import {testFunction} from '@nlib/test';
import {Date} from '@nlib/global';
import {
    YYYY,
    YY,
    Y,
    MM,
    M,
    DD,
    D,
    ISO8601DATE,
    hh,
    h,
    mm,
    m,
    ss,
    s,
    ISO8601TIME,
    MMMM,
    MMM,
    dddd,
    ddd,
    Z,
    ZZ,
    ISO8601,
} from './formatter';

const Date0999 = '0999-09-01T03:04:05+0900';
const Date2020 = '2020-09-01T03:04:05+0900';

testFunction(YYYY, {input: new Date(Date0999), expected: '0999'});
testFunction(YYYY, {input: new Date(Date2020), expected: '2020'});
testFunction(YY, {input: new Date(Date2020), expected: '20'});
testFunction(Y, {input: new Date(Date0999), expected: '999'});
testFunction(MM, {input: new Date(Date2020), expected: '09'});
testFunction(M, {input: new Date(Date2020), expected: '9'});
testFunction(MMMM, {input: new Date(Date2020), expected: 'September'});
testFunction(MMM, {input: new Date(Date2020), expected: 'Sep'});
testFunction(DD, {input: new Date(Date2020), expected: '01'});
testFunction(D, {input: new Date(Date2020), expected: '1'});
testFunction(dddd, {input: new Date(Date2020), expected: 'Tuesday'});
testFunction(ddd, {input: new Date(Date2020), expected: 'Tue'});
testFunction(ISO8601DATE, {input: new Date(Date2020), expected: '2020-09-01'});

testFunction(hh, {input: new Date(Date2020), expected: '03'});
testFunction(h, {input: new Date(Date2020), expected: '3'});
testFunction(mm, {input: new Date(Date2020), expected: '04'});
testFunction(m, {input: new Date(Date2020), expected: '4'});
testFunction(ss, {input: new Date(Date2020), expected: '05'});
testFunction(s, {input: new Date(Date2020), expected: '5'});
testFunction(ISO8601TIME, {input: new Date(Date2020), expected: '03:04:05'});

testFunction(ZZ, {input: new Date(Date2020), expected: '+09:00'});
testFunction(Z, {input: new Date(Date2020), expected: '+9:00'});

testFunction(ISO8601, {input: new Date(Date2020), expected: '2020-09-01T03:04:05+0900'});
