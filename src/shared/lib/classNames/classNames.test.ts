import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe(classNames('someClass'));
    });

    test('with additional class', () => {
        const expected = 'someClass class class2';
        expect(classNames('someClass', {}, ['class', 'class2'])).toBe(classNames(expected));
    });

    test('with mods', () => {
        const expected = 'someClass class class2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class', 'class2'])).toBe(classNames(expected));
    });
    test('with mods one par = false', () => {
        const expected = 'someClass class class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class', 'class2'])).toBe(classNames(expected));
    });
    test('with mods one par = undefined', () => {
        const expected = 'someClass class class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class', 'class2'])).toBe(classNames(expected));
    });
});
