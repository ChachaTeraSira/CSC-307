mut = require ('./module.js'); // MUT = Module Under Test

// SUM
test('Testing sum(+,+) -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing sum(-,-) -- success', () => {
    expect(mut.sum(-9,-1)).toBe(-10);
});

test('Testing sum(-,+) -- success', () => {
    expect(mut.sum(-1,21)).toBe(20);
});

test('Testing sum(0,#) -- success', () => {
    expect(mut.sum(0,5911)).toBe(5911);
});

test('Testing sum(0,0) -- success', () => {
    expect(mut.sum(0,0)).toBe(0);
});

// DIV
test('Testing div_1 (+,+) -- success', () => {
    const expected = 5;
    const got = mut.div(25,5);
    expect(got).toBe(expected);
});

test('Testing div_2 (-,-) -- success', () => {
    const expected = 10;
    const got = mut.div(-100,-10);
    expect(got).toBe(expected);
});

test('Testing div_3 (+,-) -- success', () => {
    expect(mut.div(16,-4)).toBe(-4);
});

test('Testing div_4 (0,#) -- success', () => {
    expect(mut.div(0,101230)).toBe(0);
});

test('Testing div_5 (decimal) -- success', () => {
    expect(mut.div(5.5,2)).toBeCloseTo(2.75);
});

// ContainNumbers
test('Testing ContainNumbers_1 -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("Hello123");
    expect(got).toBe(expected);
});

test('Testing ContainNumbers_2 -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("Hello");
    expect(got).toBe(expected);
});

test('Testing ContainNumbers_3 -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("");
    expect(got).toBe(expected);
});

test('Testing ContainNumbers_4 -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("^&*()");
    expect(got).toBe(expected);
});

test('Testing ContainNumbers_5 -- success', () => {
    const expected = true;
    const got = mut.containsNumbers("123456789");
    expect(got).toBe(expected);
});

test('Testing ContainNumbers_6 -- success', () => {
    const expected = false;
    const got = mut.containsNumbers("o-o-o");
    expect(got).toBe(expected);
});