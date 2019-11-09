export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  listCreatorText: 'Add new list',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  defaultHeaderIcon: 'cat',
  search: {
    defaultText: '',
    icon: 'search',
  },
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Places to visit <sup>obligatorily!</sup>',
    description: 'Interesting places I want to see',
    image: 'https://i.postimg.cc/wT19ZBKD/location-4496459-1280.png',
  },
  {
    id: 'list-3',
    title: 'Albums to listen <sup>definitely!</sup>',
    description: 'Interesting albums I want to know',
    image: 'https://i.postimg.cc/D0L3fS7N/fuchs-2923467-1280.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

export const info = {
  title: 'Info',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://i.postimg.cc/JzJf9Jrm/background-bit-bytes-2004161.jpg',
};

export const faq = {
  title: 'FAQ',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://i.postimg.cc/tgrG5bRV/board-game-car-cards-1634213.jpg',
};

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
