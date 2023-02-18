const Score = {
    getScore() {
        const score = window.localStorage.getItem('score')
        return Number.parseInt(score | 0);
    },

    setScore(score) {
        window.localStorage.setItem('score', score)
    }
}

export default Score;