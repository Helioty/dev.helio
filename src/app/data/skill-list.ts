export type Skill = {
  name: string;
  learneYear: number;
  rate: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

export const skills: Skill[] = [
  {
    name: 'Angular',
    learneYear: 2018,
    rate: 8,
  },
  {
    name: 'Ionic',
    learneYear: 2018,
    rate: 8,
  },
  {
    name: 'Node.js',
    learneYear: 2019,
    rate: 7,
  },
  {
    name: 'Javascript',
    learneYear: 2018,
    rate: 8,
  },
  {
    name: 'Nest.js',
    learneYear: 2020,
    rate: 7,
  },
  {
    name: 'React.js',
    learneYear: 2020,
    rate: 5,
  },
  {
    name: 'Java',
    learneYear: 2020,
    rate: 4,
  },
  {
    name: 'Oracle DB',
    learneYear: 2020,
    rate: 6,
  },
];
