import { Record } from 'immutable';

type StateParams = {
    numbers: Array<number>;
}

const defaultValues = <StateParams>{
    numbers: []
}

class State extends Record(defaultValues) {
    numbers: Array<number>;

    constructor(params: StateParams) {
        super(params);
    }
}

const initialState = new State({
    numbers: [1, 2, 3, 4, 5, 6]
});


const { numbers } = initialState;

console.log('initial state:', initialState);

const newState = initialState.set('numbers', numbers.filter((num: number) => num % 2 === 0));

console.log('after changes:', newState);