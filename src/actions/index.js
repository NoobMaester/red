export const incr = (num) => {
    return {
        type: 'increment',
        payload: num
    }
};

export const decr = () => {
    return {
        type: 'decrement'
    }
}