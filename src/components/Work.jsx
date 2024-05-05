export function Work() {
    const phrases = [
        'Photography that transcends the time you have with the people you love',
        'I don’t trust words. I trust pictures',
        'Photography takes an instant out of time, altering life by holding it still'
    ];
    const getRandomIntBetween = function (a, b) {
        // Check if the parameters are valid
        if (typeof a !== 'number' || typeof b !== 'number' || a > b) {
        throw new Error('Invalid parameters. Please provide valid numbers with a <= b.');
        }
        // Calculate the range and generate a random integer within that range
        const min = Math.ceil(a);
        const max = Math.floor(b);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <div className='work'>
        <div className='work-container'>
            <div className='phrase'>{phrases[getRandomIntBetween(0,2)]}</div>
        </div>
        </div>
    )
}