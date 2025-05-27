function Movie(name, genre, year, imdb, review) {
    this.name = name
    this.genre = genre
    this.year = year
    this.imdb = imdb
    this.review = review
    this.getSummary = function() {
        return `${this.name} (${this.year}) is a ${this.genre} series. IMDb rating: ${this.imdb}/10 Review: ${this.review}`
    }
}
const alice = new Movie("Alice in Borderland", "triller", 2020, 10.0, "dramatic and interesting")
const squidGame = new Movie("Squid Game", "Survival and Drama", 2021, 9.0, "dark twists 😔")
const final = new Movie("final destination", "triller", 2002, 10.0, "How about your fears wake up?")
console.log(alice.getSummary())
console.log(squidGame.getSummary())
console.log(final.getSummary())