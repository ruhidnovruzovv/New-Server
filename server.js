const express = require('express');
const app = express();

app.use(cors());

// Sadə məlumat nümunəsi
const data = [
  {
    "id": "top1",
    "rank": 1,
    "year": 1994,
    "genre": [
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "title": "The Shawshank Redemption",
    "imdbid": "tt0111161",
    "rating": "9.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@",
    "imdb_link": "https://www.imdb.com/title/tt0111161",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    "id": "top2",
    "rank": 2,
    "year": 1972,
    "genre": [
      "Crime",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    "title": "The Godfather",
    "imdbid": "tt0068646",
    "rating": "9.2",
    "big_image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR8,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0068646",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
    "description": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son."
  },
  {
    "id": "top3",
    "rank": 3,
    "year": 2008,
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "The Dark Knight",
    "imdbid": "tt0468569",
    "rating": "9.0",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0468569",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    "id": "top4",
    "rank": 4,
    "year": 1974,
    "genre": [
      "Crime",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "title": "The Godfather Part II",
    "imdbid": "tt0071562",
    "rating": "9.0",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0071562",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
    "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
  },
  {
    "id": "top5",
    "rank": 5,
    "year": 1957,
    "genre": [
      "Crime",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    "title": "12 Angry Men",
    "imdbid": "tt0050083",
    "rating": "9.0",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0050083",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict."
  },
  {
    "id": "top6",
    "rank": 6,
    "year": 1993,
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "title": "Schindler's List",
    "imdbid": "tt0108052",
    "rating": "9.0",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0108052",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
  },
  {
    "id": "top7",
    "rank": 7,
    "year": 2003,
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "The Lord of the Rings: The Return of the King",
    "imdbid": "tt0167260",
    "rating": "9.0",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0167260",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
  },
  {
    "id": "top8",
    "rank": 8,
    "year": 1994,
    "genre": [
      "Crime",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "title": "Pulp Fiction",
    "imdbid": "tt0110912",
    "rating": "8.9",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0110912",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    "id": "top9",
    "rank": 9,
    "year": 2001,
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "imdbid": "tt0120737",
    "rating": "8.8",
    "big_image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@",
    "imdb_link": "https://www.imdb.com/title/tt0120737",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
  },
  {
    "id": "top10",
    "rank": 10,
    "year": 1966,
    "genre": [
      "Adventure",
      "Western"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "title": "The Good, the Bad and the Ugly",
    "imdbid": "tt0060196",
    "rating": "8.8",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0060196",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."
  },
  {
    "id": "top11",
    "rank": 11,
    "year": 1994,
    "genre": [
      "Drama",
      "Romance"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    "title": "Forrest Gump",
    "imdbid": "tt0109830",
    "rating": "8.8",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR4,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0109830",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
  },
  {
    "id": "top12",
    "rank": 12,
    "year": 1999,
    "genre": [
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "title": "Fight Club",
    "imdbid": "tt0137523",
    "rating": "8.8",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@",
    "imdb_link": "https://www.imdb.com/title/tt0137523",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more."
  },
  {
    "id": "top13",
    "rank": 13,
    "year": 2002,
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "title": "The Lord of the Rings: The Two Towers",
    "imdbid": "tt0167261",
    "rating": "8.8",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0167261",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard."
  },
  {
    "id": "top14",
    "rank": 14,
    "year": 2010,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Inception",
    "imdbid": "tt1375666",
    "rating": "8.7",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt1375666",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster."
  },
  {
    "id": "top15",
    "rank": 15,
    "year": 1980,
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "imdbid": "tt0080684",
    "rating": "8.7",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0080684",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett."
  },
  {
    "id": "top16",
    "rank": 16,
    "year": 1999,
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "title": "The Matrix",
    "imdbid": "tt0133093",
    "rating": "8.7",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0133093",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
  },
  {
    "id": "top17",
    "rank": 17,
    "year": 1990,
    "genre": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "title": "Goodfellas",
    "imdbid": "tt0099685",
    "rating": "8.7",
    "big_image": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0099685",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate."
  },
  {
    "id": "top18",
    "rank": 18,
    "year": 2023,
    "genre": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Spider-Man: Across the Spider-Verse",
    "imdbid": "tt9362722",
    "rating": "8.7",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt9362722",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@.._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero."
  },
  {
    "id": "top19",
    "rank": 19,
    "year": 2014,
    "genre": [
      "Adventure",
      "Drama",
      "Sci-Fi"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Interstellar",
    "imdbid": "tt0816692",
    "rating": "8.7",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0816692",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    "id": "top20",
    "rank": 20,
    "year": 1975,
    "genre": [
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "title": "One Flew Over the Cuckoo's Nest",
    "imdbid": "tt0073486",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@",
    "imdb_link": "https://www.imdb.com/title/tt0073486",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse."
  },
  {
    "id": "top21",
    "rank": 21,
    "year": 1995,
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "title": "Se7en",
    "imdbid": "tt0114369",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0114369",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
  },
  {
    "id": "top22",
    "rank": 22,
    "year": 1946,
    "genre": [
      "Drama",
      "Family",
      "Fantasy"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "title": "It's a Wonderful Life",
    "imdbid": "tt0038650",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0038650",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed."
  },
  {
    "id": "top23",
    "rank": 23,
    "year": 1954,
    "genre": [
      "Action",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_QL75_UY562_CR11,0,380,562_.jpg",
    "title": "Seven Samurai",
    "imdbid": "tt0047478",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_QL75_UY562_CR11,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0047478",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNWQ3OTM4ZGItMWEwZi00MjI5LWI3YzgtNTYwNWRkNmIzMGI5XkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_UY67_CR1,0,45,67_AL_.jpg",
    "description": "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him. As the samurai teach the peasants how to defend themselves, the village is attacked by an army of bandits."
  },
  {
    "id": "top24",
    "rank": 24,
    "year": 1991,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "title": "The Silence of the Lambs",
    "imdbid": "tt0102926",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0102926",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
  },
  {
    "id": "top25",
    "rank": 25,
    "year": 1998,
    "genre": [
      "Drama",
      "War"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "title": "Saving Private Ryan",
    "imdbid": "tt0120815",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0120815",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."
  },
  {
    "id": "top26",
    "rank": 26,
    "year": 2002,
    "genre": [
      "Crime",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "title": "City of God",
    "imdbid": "tt0317248",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0317248",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin."
  },
  {
    "id": "top27",
    "rank": 27,
    "year": 1997,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "title": "Life Is Beautiful",
    "imdbid": "tt0118799",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0118799",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp."
  },
  {
    "id": "top28",
    "rank": 28,
    "year": 1999,
    "genre": [
      "Crime",
      "Drama",
      "Fantasy"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "The Green Mile",
    "imdbid": "tt0120689",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0120689",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift."
  },
  {
    "id": "top29",
    "rank": 29,
    "year": 1977,
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_QL75_UX380_CR0,9,380,562_.jpg",
    "title": "Star Wars: Episode IV - A New Hope",
    "imdbid": "tt0076759",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_QL75_UX380_CR0,9,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0076759",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
  },
  {
    "id": "top30",
    "rank": 30,
    "year": 1991,
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "title": "Terminator 2: Judgment Day",
    "imdbid": "tt0103064",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@",
    "imdb_link": "https://www.imdb.com/title/tt0103064",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg."
  },
  {
    "id": "top31",
    "rank": 31,
    "year": 2001,
    "genre": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Spirited Away",
    "imdbid": "tt0245429",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0245429",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts."
  },
  {
    "id": "top32",
    "rank": 32,
    "year": 2023,
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Oppenheimer",
    "imdbid": "tt15398776",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt15398776",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb."
  },
  {
    "id": "top33",
    "rank": 33,
    "year": 1962,
    "genre": [
      "Action",
      "Drama",
      "Mystery"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
    "title": "Harakiri",
    "imdbid": "tt0056058",
    "rating": "8.6",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY562_CR17,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0056058",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_UY67_CR2,0,45,67_AL_.jpg",
    "description": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity."
  },
  {
    "id": "top34",
    "rank": 34,
    "year": 1985,
    "genre": [
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "title": "Back to the Future",
    "imdbid": "tt0088763",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0088763",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown."
  },
  {
    "id": "top35",
    "rank": 35,
    "year": 2002,
    "genre": [
      "Biography",
      "Drama",
      "Music"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    "title": "The Pianist",
    "imdbid": "tt0253474",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR14,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0253474",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR2,0,45,67_AL_.jpg",
    "description": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II."
  },
  {
    "id": "top36",
    "rank": 36,
    "year": 1960,
    "genre": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "title": "Psycho",
    "imdbid": "tt0054215",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@",
    "imdb_link": "https://www.imdb.com/title/tt0054215",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother."
  },
  {
    "id": "top37",
    "rank": 37,
    "year": 2019,
    "genre": [
      "Drama",
      "Thriller"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Parasite",
    "imdbid": "tt6751668",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt6751668",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
  },
  {
    "id": "top38",
    "rank": 38,
    "year": 1994,
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Gladiator",
    "imdbid": "tt0172495",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0172495",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery."
  },
  {
    "id": "top39",
    "rank": 39,
    "year": 1994,
    "genre": [
      "Animation",
      "Adventure",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "title": "The Lion King",
    "imdbid": "tt0110357",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@",
    "imdb_link": "https://www.imdb.com/title/tt0110357",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
  },
  {
    "id": "top40",
    "rank": 40,
    "year": 1994,
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "title": "Léon: The Professional",
    "imdbid": "tt0110413",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0110413",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade."
  },
  {
    "id": "top41",
    "rank": 41,
    "year": 2000,
    "genre": [
      "Crime",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "title": "American History X",
    "imdbid": "tt0120586",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@",
    "imdb_link": "https://www.imdb.com/title/tt0120586",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did."
  },
  {
    "id": "top42",
    "rank": 42,
    "year": 1998,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "title": "The Departed",
    "imdbid": "tt0407887",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0407887",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
  },
  {
    "id": "top43",
    "rank": 43,
    "year": 2014,
    "genre": [
      "Drama",
      "Music"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Whiplash",
    "imdbid": "tt2582802",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt2582802",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential."
  },
  {
    "id": "top44",
    "rank": 44,
    "year": 2006,
    "genre": [
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "The Prestige",
    "imdbid": "tt0482571",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0482571",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other."
  },
  {
    "id": "top45",
    "rank": 45,
    "year": 1995,
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "title": "The Usual Suspects",
    "imdbid": "tt0114814",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0114814",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup."
  },
  {
    "id": "top46",
    "rank": 46,
    "year": 1988,
    "genre": [
      "Animation"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "title": "Grave of the Fireflies",
    "imdbid": "tt0095327",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0095327",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "A young boy and his little sister struggle to survive in Japan during World War II."
  },
  {
    "id": "top47",
    "rank": 47,
    "year": 1942,
    "genre": [
      "Drama",
      "Romance",
      "War"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    "title": "Casablanca",
    "imdbid": "tt0034583",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0034583",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco."
  },
  {
    "id": "top48",
    "rank": 48,
    "year": 2011,
    "genre": [
      "Biography",
      "Comedy",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "The Intouchables",
    "imdbid": "tt1675434",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt1675434",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver."
  },
  {
    "id": "top49",
    "rank": 49,
    "year": 1936,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    "title": "Modern Times",
    "imdbid": "tt0027977",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0027977",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman."
  },
  {
    "id": "top50",
    "rank": 50,
    "year": 1988,
    "genre": [
      "Drama",
      "Romance"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Cinema Paradiso",
    "imdbid": "tt0095765",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0095765",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist."
  },
  {
    "id": "top51",
    "rank": 51,
    "year": 1968,
    "genre": [
      "Western"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "title": "Once Upon a Time in the West",
    "imdbid": "tt0064116",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0064116",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad."
  },
  {
    "id": "top52",
    "rank": 52,
    "year": 1954,
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "title": "Rear Window",
    "imdbid": "tt0047396",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0047396",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend."
  },
  {
    "id": "top53",
    "rank": 53,
    "year": 1979,
    "genre": [
      "Horror",
      "Sci-Fi"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
    "title": "Alien",
    "imdbid": "tt0078748",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,6,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0078748",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission."
  },
  {
    "id": "top54",
    "rank": 54,
    "year": 1931,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "title": "City Lights",
    "imdbid": "tt0021749",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0021749",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BY2I4MmM1N2EtM2YzOS00OWUzLTkzYzctNDc5NDg2N2IyODJmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically."
  },
  {
    "id": "top55",
    "rank": 55,
    "year": 2012,
    "genre": [
      "Drama",
      "Western"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Django Unchained",
    "imdbid": "tt1853728",
    "rating": "8.5",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt1853728",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi."
  },
  {
    "id": "top56",
    "rank": 56,
    "year": 1979,
    "genre": [
      "Drama",
      "Mystery",
      "War"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    "title": "Apocalypse Now",
    "imdbid": "tt0078788",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,11,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0078788",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god."
  },
  {
    "id": "top57",
    "rank": 57,
    "year": 2000,
    "genre": [
      "Mystery",
      "Thriller"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "title": "Memento",
    "imdbid": "tt0209144",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR2,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0209144",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZTcyNjk1MjgtOWI3Mi00YzQwLWI5MTktMzY4ZmI2NDAyNzYzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A man with short-term memory loss attempts to track down his wife's murderer."
  },
  {
    "id": "top58",
    "rank": 58,
    "year": 1981,
    "genre": [
      "Action",
      "Adventure"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "title": "Indiana Jones and the Raiders of the Lost Ark",
    "imdbid": "tt0082971",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0082971",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "Archaeology professor Indiana Jones ventures to seize a biblical artefact known as the Ark of the Covenant. While doing so, he puts up a fight against Renee and a troop of Nazis."
  },
  {
    "id": "top59",
    "rank": 59,
    "year": 2008,
    "genre": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "WALL·E",
    "imdbid": "tt0910970",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0910970",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind."
  },
  {
    "id": "top60",
    "rank": 60,
    "year": 2006,
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "title": "The Lives of Others",
    "imdbid": "tt0405094",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX380_CR0,3,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0405094",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNmQyNmJjM2ItNTQzYi00ZjMxLWFjMDYtZjUyN2YwZDk5YWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives."
  },
  {
    "id": "top61",
    "rank": 61,
    "year": 1950,
    "genre": [
      "Drama",
      "Film-Noir"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    "title": "Sunset Blvd.",
    "imdbid": "tt0043014",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_QL75_UX380_CR0,5,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0043014",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return."
  },
  {
    "id": "top62",
    "rank": 62,
    "year": 1957,
    "genre": [
      "Drama",
      "War"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    "title": "Paths of Glory",
    "imdbid": "tt0050825",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0050825",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTI5Nzc0OTMtYzBkMS00NjkxLThmM2UtNjM2ODgxN2M5NjNkXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them."
  },
  {
    "id": "top63",
    "rank": 63,
    "year": 2018,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Avengers: Infinity War",
    "imdbid": "tt4154756",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt4154756",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
  },
  {
    "id": "top64",
    "rank": 64,
    "year": 1980,
    "genre": [
      "Drama",
      "Horror"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,8,380,562_.jpg",
    "title": "The Shining",
    "imdbid": "tt0081505",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,8,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0081505",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
  },
  {
    "id": "top65",
    "rank": 65,
    "year": 1940,
    "genre": [
      "Comedy",
      "Drama",
      "War"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "title": "The Great Dictator",
    "imdbid": "tt0032553",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0032553",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime."
  },
  {
    "id": "top66",
    "rank": 66,
    "year": 1957,
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    "title": "Witness for the Prosecution",
    "imdbid": "tt0051201",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0051201",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "A veteran British barrister must defend his client in a murder trial that has surprise after surprise."
  },
  {
    "id": "top67",
    "rank": 67,
    "year": 2018,
    "genre": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    "title": "Spider-Man: Into the Spider-Verse",
    "imdbid": "tt4633694",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@",
    "imdb_link": "https://www.imdb.com/title/tt4633694",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities."
  },
  {
    "id": "top68",
    "rank": 68,
    "year": 1986,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "title": "Aliens",
    "imdbid": "tt0090605",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0090605",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators."
  },
  {
    "id": "top69",
    "rank": 69,
    "year": 2009,
    "genre": [
      "Adventure",
      "Drama",
      "War"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Inglourious Basterds",
    "imdbid": "tt0361748",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0361748",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same."
  },
  {
    "id": "top70",
    "rank": 70,
    "year": 2012,
    "genre": [
      "Action",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "The Dark Knight Rises",
    "imdbid": "tt1345836",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt1345836",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Selina Kyle, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane."
  },
  {
    "id": "top71",
    "rank": 71,
    "year": 1964,
    "genre": [
      "Comedy",
      "War"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "imdbid": "tt0057012",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,14,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0057012",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "An insane American general orders a bombing attack on the Soviet Union, triggering a path to nuclear holocaust that a war room full of politicians and generals frantically tries to stop."
  },
  {
    "id": "top72",
    "rank": 72,
    "year": 2003,
    "genre": [
      "Action",
      "Drama",
      "Mystery"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Oldboy",
    "imdbid": "tt0364569",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0364569",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days."
  },
  {
    "id": "top73",
    "rank": 73,
    "year": 2017,
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "title": "Coco",
    "imdbid": "tt2380307",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt2380307",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UY67_CR1,0,45,67_AL_.jpg",
    "description": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer."
  },
  {
    "id": "top74",
    "rank": 74,
    "year": 1984,
    "genre": [
      "Biography",
      "Drama",
      "Music"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    "title": "Amadeus",
    "imdbid": "tt0086879",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX380_CR0,15,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0086879",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him."
  },
  {
    "id": "top75",
    "rank": 75,
    "year": 1981,
    "genre": [
      "Drama",
      "War"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_QL75_UX380_CR0,7,380,562_.jpg",
    "title": "The Boat",
    "imdbid": "tt0082096",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_QL75_UX380_CR0,7,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0082096",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNDBjMWUxNTUtNjZiNi00YzJhLTgzNzUtMTRiY2FkZmMzYTNjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "A German U-boat stalks the frigid waters of the North Atlantic as its young crew experience the sheer terror and claustrophobic world of a submariner in World War II."
  },
  {
    "id": "top76",
    "rank": 76,
    "year": 2019,
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Avengers: Endgame",
    "imdbid": "tt4154796",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt4154796",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
  },
  {
    "id": "top77",
    "rank": 77,
    "year": 2019,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Joker",
    "imdbid": "tt7286456",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt7286456",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain."
  },
  {
    "id": "top78",
    "rank": 78,
    "year": 2016,
    "genre": [
      "Animation",
      "Drama",
      "Fantasy"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Your Name.",
    "imdbid": "tt5311514",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt5311514",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?"
  },
  {
    "id": "top79",
    "rank": 79,
    "year": 2009,
    "genre": [
      "Comedy",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    "title": "3 Idiots",
    "imdbid": "tt1187043",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt1187043",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR1,0,45,67_AL_.jpg",
    "description": "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them \"idiots\"."
  },
  {
    "id": "top80",
    "rank": 80,
    "year": 1963,
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZGQ1NWZlYjctNDJmOS00MmU2LTg1ODItNmZiM2ZkNzJhNDI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    "title": "High and Low",
    "imdbid": "tt0057565",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZGQ1NWZlYjctNDJmOS00MmU2LTg1ODItNmZiM2ZkNzJhNDI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0057565",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZGQ1NWZlYjctNDJmOS00MmU2LTg1ODItNmZiM2ZkNzJhNDI0XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UY67_CR1,0,45,67_AL_.jpg",
    "description": "An executive of a Yokohama shoe company becomes a victim of extortion when his chauffeur's son is kidnapped by mistake and held for ransom."
  },
  {
    "id": "top81",
    "rank": 81,
    "year": 2018,
    "genre": [
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "title": "Capernaum",
    "imdbid": "tt8267604",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt8267604",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BY2Y3OWNkMTctYzNjYS00NWVkLTg4OWEtY2YxN2I3NDhlYzE0XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_UY67_CR1,0,45,67_AL_.jpg",
    "description": "While serving a five-year sentence for a violent crime, a 12-year-old boy sues his parents for neglect."
  },
  {
    "id": "top82",
    "rank": 82,
    "year": 1985,
    "genre": [
      "Drama",
      "Thriller",
      "War"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    "title": "Come and See",
    "imdbid": "tt0091251",
    "rating": "8.4",
    "big_image": "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,10,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0091251",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX100_CR0,3,100,148_.jpg",
    "description": "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II."
  },
  {
    "id": "top83",
    "rank": 83,
    "year": 1995,
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "title": "Toy Story",
    "imdbid": "tt0114709",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0114709",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom."
  },
  {
    "id": "top84",
    "rank": 84,
    "year": 1999,
    "genre": [
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "American Beauty",
    "imdbid": "tt0169547",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0169547",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend."
  },
  {
    "id": "top85",
    "rank": 85,
    "year": 1995,
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "title": "Braveheart",
    "imdbid": "tt0112573",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY562_CR1,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0112573",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England."
  },
  {
    "id": "top86",
    "rank": 86,
    "year": 1997,
    "genre": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "title": "Princess Mononoke",
    "imdbid": "tt0119698",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0119698",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime."
  },
  {
    "id": "top87",
    "rank": 87,
    "year": 1997,
    "genre": [
      "Drama",
      "Romance"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,9,380,562_.jpg",
    "title": "Good Will Hunting",
    "imdbid": "tt0119217",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,9,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0119217",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life."
  },
  {
    "id": "top88",
    "rank": 88,
    "year": 1984,
    "genre": [
      "Crime",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "title": "Once Upon a Time in America",
    "imdbid": "tt0087843",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,16,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0087843",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan 35 years later, where he must once again confront the ghosts and regrets of his old life."
  },
  {
    "id": "top89",
    "rank": 89,
    "year": 1952,
    "genre": [
      "Comedy",
      "Musical",
      "Romance"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "title": "Singin' in the Rain",
    "imdbid": "tt0045152",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY562_CR3,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0045152",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A silent film star falls for a chorus girl just as he and his delusionally jealous screen partner are trying to make the difficult transition to talking pictures in 1920s Hollywood."
  },
  {
    "id": "top90",
    "rank": 90,
    "year": 2000,
    "genre": [
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "title": "Requiem for a Dream",
    "imdbid": "tt0180093",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0180093",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep."
  },
  {
    "id": "top91",
    "rank": 91,
    "year": 2010,
    "genre": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    "title": "Toy Story 3",
    "imdbid": "tt0435761",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_QL75_UY562_CR9,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0435761",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_UY67_CR1,0,45,67_AL_.jpg",
    "description": "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home."
  },
  {
    "id": "top92",
    "rank": 92,
    "year": 1983,
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX380_CR0,13,380,562_.jpg",
    "title": "Star Wars: Episode VI - Return of the Jedi",
    "imdbid": "tt0086190",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX380_CR0,13,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0086190",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap."
  },
  {
    "id": "top93",
    "rank": 93,
    "year": 2004,
    "genre": [
      "Drama",
      "Romance",
      "Sci-Fi"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "Eternal Sunshine of the Spotless Mind",
    "imdbid": "tt0338013",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0338013",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories."
  },
  {
    "id": "top94",
    "rank": 94,
    "year": 1968,
    "genre": [
      "Adventure",
      "Sci-Fi"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "title": "2001: A Space Odyssey",
    "imdbid": "tt0062622",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0062622",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000."
  },
  {
    "id": "top95",
    "rank": 95,
    "year": 2012,
    "genre": [
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "title": "The Hunt",
    "imdbid": "tt2106476",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_QL75_UY562_CR7,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt2106476",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_UY67_CR1,0,45,67_AL_.jpg",
    "description": "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie."
  },
  {
    "id": "top96",
    "rank": 96,
    "year": 1992,
    "genre": [
      "Crime",
      "Thriller"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "title": "Reservoir Dogs",
    "imdbid": "tt0105236",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX380_CR0,2,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0105236",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant."
  },
  {
    "id": "top97",
    "rank": 97,
    "year": 1952,
    "genre": [
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BYWM1YmZkNTctZDAwNy00ZTY4LWFjMTktYzU4ZjViMmU1OTJmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "title": "Ikiru",
    "imdbid": "tt0044741",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYWM1YmZkNTctZDAwNy00ZTY4LWFjMTktYzU4ZjViMmU1OTJmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0044741",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYWM1YmZkNTctZDAwNy00ZTY4LWFjMTktYzU4ZjViMmU1OTJmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "A bureaucrat tries to find meaning in his life after he discovers he has terminal cancer."
  },
  {
    "id": "top98",
    "rank": 98,
    "year": 1962,
    "genre": [
      "Adventure",
      "Biography",
      "Drama"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    "title": "Lawrence of Arabia",
    "imdbid": "tt0056172",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_QL75_UY562_CR5,0,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0056172",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYWY5ZjhjNGYtZmI2Ny00ODM0LWFkNzgtZmI1YzA2N2MxMzA0XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY67_CR0,0,45,67_AL_.jpg",
    "description": "The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks."
  },
  {
    "id": "top99",
    "rank": 99,
    "year": 1941,
    "genre": [
      "Drama",
      "Mystery"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "title": "Citizen Kane",
    "imdbid": "tt0033467",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0033467",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud.'"
  },
  {
    "id": "top100",
    "rank": 100,
    "year": 1931,
    "genre": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "image": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "title": "M",
    "imdbid": "tt0022100",
    "rating": "8.3",
    "big_image": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    "imdb_link": "https://www.imdb.com/title/tt0022100",
    "thumbnail": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_UX45_CR0,0,45,67_AL_.jpg",
    "description": "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt."
  }
]


app.get('/data', (req, res) => {
  const { title } = req.query; // Query parametrləri alırıq
  if (title) {
    // Title-ə görə filter tətbiq edirik (kiçik-böyük hərf həssas deyil)
    const filteredData = data.filter(item =>
      item.title.toLowerCase().includes(title.toLowerCase())
    );
    res.json(filteredData);
  } else {
    res.json(data); // Əgər title yoxdursa, bütün məlumatları qaytarırıq
  }
});

// ID ilə məlumat üçün endpoint
app.get('/data/:id', (req, res) => {
  const id = req.params.id;
  const item = data.find(d => d.id === id);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Məlumat tapılmadı' });
  }
});

// Dinamik port istifadə edin
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server port ${port} üzərində işləyir`);
});