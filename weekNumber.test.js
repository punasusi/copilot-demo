const assert = require('assert');
const { getWeekNumber } = require('./weekNumber');

describe('getWeekNumber', function() {
  it('should return 53 for January 1st, 2021 (ISO week 53)', function() {
    const date = new Date('2021-01-01');
    const weekNumber = getWeekNumber(date);
    assert.strictEqual(weekNumber, 53);
  });

  it('should return 52 for December 31st, 2021 (ISO week 52)', function() {
    const date = new Date('2021-12-31');
    const weekNumber = getWeekNumber(date);
    assert.strictEqual(weekNumber, 52);
  });

  it('should return 53 for January 3rd, 2021 (ISO week 53)', function() {
    const date = new Date('2021-01-03');
    const weekNumber = getWeekNumber(date);
    assert.strictEqual(weekNumber, 53);
  });

  it('should return 52 for January 2nd, 2022 (ISO week 52)', function() {
    const date = new Date('2022-01-02');
    const weekNumber = getWeekNumber(date);
    assert.strictEqual(weekNumber, 52);
  });

  it('should return 51 for December 26th, 2021 (ISO week 51)', function() {
    const date = new Date('2021-12-26');
    const weekNumber = getWeekNumber(date);
    assert.strictEqual(weekNumber, 51);
  });

  it('should return 52 for December 27th, 2020 (ISO week 52)', function() {
    const date = new Date('2020-12-27');
    const weekNumber = getWeekNumber(date);
    assert.strictEqual(weekNumber, 52);
  });

  it('should return 1 for January 4th, 2021 (ISO week 1)', function() {
    const date = new Date('2021-01-04');
    const weekNumber = getWeekNumber(date);
    assert.strictEqual(weekNumber, 1);
  });

  it('should return 52 for January 1st, 2017 (ISO week 52)', function() {
    const date = new Date('2017-01-01');
    const weekNumber = getWeekNumber(date);
    assert.strictEqual(weekNumber, 52);
  });
});