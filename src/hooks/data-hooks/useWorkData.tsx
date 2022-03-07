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
        `Led efforts to create a reusable React template as well as spearheaded
        efforts to rebuild our existing front-end for UHOne.com/shop from AngularJS
        to React/TypeScript.`,
        `Delivered a solution to migrate from a 20 year old in-house CMS to Adobe Experience Manager
        for our React application.`,
        `Delivered a Docusaurus website to house all documentation relating to our React template, 
        application and Adobe AEM CMS documentation.`,
        'Azure Pipelines yaml/terraforms experience for a CI/CD pipeline',
        'Active Admin/Contributor/Code Reviewer on our React repository on GitHub',
        `Extensive experience with AngularJS, React/Typescript, 
        .NET Core, and Microsoft SQL Server`,
        'Experience working with RESTful web API’s and large datasets',
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
