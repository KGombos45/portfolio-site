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
        `Led efforts to create a reusable React template as well as spearheaded efforts
         to rebuild our existing front-end for UHOne.com/shop from AngularJS to React/TypeScript.`,
        `Delivered a solution to migrate from an old in-house CMS to Adobe Experience Manager 
        for our React application.`,
        'Active Admin/Contributor/Code Reviewer on our React repository on GitHub',
        `Created a React/TypeScript code assessment and sat in during interviews when resources 
        were not available`,
        `Helped rebuild the front-end/UI of UHOne.com and assisted the conversion from 
        Sitecore to Adobe Experience Manager (AEM)`,
        `Delivered a solution to migrate from a 20 year old in-house CMS to Adobe Experience 
        Manager (AEM) for our React application which cut our existing network requests for 
        content on a single page from 100+ requests to 1.`,
        'Azure Pipelines yaml/terraforms experience for a CI/CD pipeline',
        `Extensive experience with AngularJS, React/Typescript, 
        .NET Core, and Microsoft SQL Server`,
        'Experience working with RESTful web API’s and large datasets',
        `Great experience with debugging and testing, at one point our React application
         had some major performance issues (10+ seconds to repaint the page on window 
         resize) which I was able to thoroughly debug and correct.`,
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
