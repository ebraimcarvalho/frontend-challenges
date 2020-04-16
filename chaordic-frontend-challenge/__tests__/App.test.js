import { hello, add, removeSNames } from '../src/App';

const hi = () => 'Hi there!';

describe('Testing App.js', () => {
  test('Should exist a function hello()', () => {
    expect(hello()).toBeTruthy;
  });
});

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(0, 2)).toBe(2);
    expect(add(2, 2)).toBe(4);
    expect(add(12, 2)).toBe(14);
    expect(add(-2, 2)).toBe(0);
    expect(add(-2, -2)).toBe(-4);
  });
  it('should not add strings', () => {
    expect(add(2, '2')).toBe(null);
  });
  it('should not add objects', () => {
    expect(add(2, {})).toBe(null);
  });
  it('should not add arrays', () => {
    expect(add(2, [])).toBe(null);
  });
});

describe('removeSNames', () => {
  it('should remove all s names', () => {
    const names = ['Scott', 'Courtney', 'Steve'];
    expect(removeSNames(names)).not.toContain('Scott');
    expect(removeSNames(names)).not.toContain('Steve');
  });
  it('should not remove other names', () => {
    const names = ['Scott', 'Courtney', 'Wes'];
    expect(removeSNames(names)).toContain('Courtney');
    expect(removeSNames(names)).toContain('Wes');
  });
  it('should account for case', () => {
    const names = ['Scott', 'Courtney', 'Wes', 'scott'];
    expect(removeSNames(names)).not.toContain('Scott');
    expect(removeSNames(names)).not.toContain('scott');
  });
});

describe('Test mock', () => {
  test('should to call a mock', () => {
    const hiTest = jest.fn();
    hiTest('hi');
    expect(hiTest).toHaveBeenCalledWith('hi');
  });
  test('should to call a mock with a implementation', () => {
    const foo = jest.fn().mockImplementation( () => 'bar');
    const bar = foo();
    expect(bar).toBe('bar');
  }); 
})