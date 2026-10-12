// Each category has a title and an array of movie objects
const categories = [
  {
    title: 'Trending Now',
    movies: [
      { id: 1, title: 'Midnight Horizon', posterUrl: 'https://picsum.photos/seed/movie1/200/300', year: 2025 },
      { id: 2, title: 'Crimson Depths', posterUrl: 'https://picsum.photos/seed/movie2/200/300', year: 2024 },
      { id: 3, title: 'The Last Signal', posterUrl: 'https://picsum.photos/seed/movie3/200/300', year: 2026 },
      { id: 4, title: 'Shadow Protocol', posterUrl: 'https://picsum.photos/seed/movie4/200/300', year: 2025 },
      { id: 5, title: 'Neon Divide', posterUrl: 'https://picsum.photos/seed/movie5/200/300', year: 2026 },
      { id: 6, title: 'Beyond the Veil', posterUrl: 'https://picsum.photos/seed/movie6/200/300', year: 2024 },
      { id: 7, title: 'Iron Cascade', posterUrl: 'https://picsum.photos/seed/movie7/200/300', year: 2025 },
      { id: 8, title: 'Frozen Meridian', posterUrl: 'https://picsum.photos/seed/movie8/200/300', year: 2026 },
    ],
  },
  {
    title: 'Top Rated',
    movies: [
      { id: 9, title: 'Echoes of Tomorrow', posterUrl: 'https://picsum.photos/seed/movie9/200/300', year: 2025 },
      { id: 10, title: 'The Quiet Storm', posterUrl: 'https://picsum.photos/seed/movie10/200/300', year: 2024 },
      { id: 11, title: 'Starfall', posterUrl: 'https://picsum.photos/seed/movie11/200/300', year: 2026 },
      { id: 12, title: 'Obsidian Heart', posterUrl: 'https://picsum.photos/seed/movie12/200/300', year: 2025 },
      { id: 13, title: 'Drift City', posterUrl: 'https://picsum.photos/seed/movie13/200/300', year: 2024 },
      { id: 14, title: 'Apex Predator', posterUrl: 'https://picsum.photos/seed/movie14/200/300', year: 2026 },
      { id: 15, title: 'Glass Empire', posterUrl: 'https://picsum.photos/seed/movie15/200/300', year: 2025 },
      { id: 16, title: 'Velvet Revolver', posterUrl: 'https://picsum.photos/seed/movie16/200/300', year: 2024 },
    ],
  },
    {
    title: 'Action Movies',
    movies: [
      { id: 17, title: 'Thunder Force', posterUrl: 'https://picsum.photos/seed/movie17/200/300', year: 2025 },
      { id: 18, title: 'Rogue Element', posterUrl: 'https://picsum.photos/seed/movie18/200/300', year: 2026 },
      { id: 19, title: 'Steel Rain', posterUrl: 'https://picsum.photos/seed/movie19/200/300', year: 2024 },
      { id: 20, title: 'Warpath', posterUrl: 'https://picsum.photos/seed/movie20/200/300', year: 2025 },
      { id: 21, title: 'Ground Zero', posterUrl: 'https://picsum.photos/seed/movie21/200/300', year: 2026 },
      { id: 22, title: 'Dead Reckoning', posterUrl: 'https://picsum.photos/seed/movie22/200/300', year: 2024 },
      { id: 23, title: 'Firestorm', posterUrl: 'https://picsum.photos/seed/movie23/200/300', year: 2025 },
      { id: 24, title: 'Blackout', posterUrl: 'https://picsum.photos/seed/movie24/200/300', year: 2026 },
    ],
  },
  {
    title: 'Comedy Movies',
    movies: [
      { id: 25, title: 'The Awkward Age', posterUrl: 'https://picsum.photos/seed/movie25/200/300', year: 2025 },
      { id: 26, title: 'Plan B Squared', posterUrl: 'https://picsum.photos/seed/movie26/200/300', year: 2024 },
      { id: 27, title: 'Oops Again', posterUrl: 'https://picsum.photos/seed/movie27/200/300', year: 2026 },
      { id: 28, title: 'My Robot Roommate', posterUrl: 'https://picsum.photos/seed/movie28/200/300', year: 2025 },
      { id: 29, title: 'Love and WiFi', posterUrl: 'https://picsum.photos/seed/movie29/200/300', year: 2024 },
      { id: 30, title: 'Disaster Chef', posterUrl: 'https://picsum.photos/seed/movie30/200/300', year: 2026 },
      { id: 31, title: 'The Intern Returns', posterUrl: 'https://picsum.photos/seed/movie31/200/300', year: 2025 },
      { id: 32, title: 'Accidental Hero', posterUrl: 'https://picsum.photos/seed/movie32/200/300', year: 2024 },
    ],
  },
];

export default categories;