export type WorkDataType = {
  location: string;
  time: string;
  title: string;
  experience: string[];
};

export const useWorkData = () => {
  const data = [
    {
      location: 'United Healthcare/Optum Tech',
      time: 'January 2019 - Present',
      title: 'Software Engineer',
      experience: [
        `Helped rebuild the front-end/UI of UHOne.com and assisted the 
        conversion from Sitecore to Adobe Experience Manager (AEM)`,
        'Implemented modern UI enhancements to UHOne.com/shop working alongside our UI/UX designer',
        'Extensive work with AngularJS, .NET Core, and Microsoft SQL Server',
        'Experience working with RESTful web API’s and large datasets',
        'Assisted with the implementation of newly configured microservices',
        'Worked with large and small dev teams in an Agile software development lifecycle',
      ],
    },
    {
      location: 'Wintrust Financial',
      time: 'May 2018 - January 2019',
      title: 'Quality Control Analyst',
      experience: [
        'Assisted with the development of BIC reports (SAP/SQL)',
        'Helped build a foundation for a more efficient QC workflow process',
      ],
    },
  ];

  return data;
};
