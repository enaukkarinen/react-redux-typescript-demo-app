type State = {
    numbers: Array<number>;
}

const initialState: State = {
    numbers: [1, 2, 3, 4, 5, 6]
}

const { numbers } = initialState;

console.log('initial state:', initialState);

initialState.numbers = numbers.filter((num: number) => num % 2 === 0);

console.log('after changes:', initialState);