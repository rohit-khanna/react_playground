export function* takeElements<T>(arr: T[], numElements: number): Generator<T[], void, unknown> {
    let index = 0;
    while (index < arr.length) {
        yield arr.slice(index, index + numElements);
        index += numElements;
    }
}