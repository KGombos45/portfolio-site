export type EducationDataType = {
  location: string;
  time: string;
  degree: string[];
};

export const useEducationData = () => {
  const data = [
    {
      location: 'Depaul University - Graduate',
      time: 'January 2018 - June 2021',
      degree: ['Masters of Science in Database Administration'],
    },
    {
      location: 'Depaul University - Undergraduate',
      time: 'January 2012 - June 2016',
      degree: [
        'Bachelor of Arts in Philosophy',
        'Bachelor of Arts in Political Science',
        'Concentration in Greek Philosophy, Logic, and Foreign Affairs',
      ],
    },
  ];

  return data;
};
