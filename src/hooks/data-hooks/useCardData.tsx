import {
  AgileTeamsLogo,
  AgileTeamsVideo,
  IndieCoffeeLogo,
  IndieCoffeeVideo,
  PortfolioLogo,
  PortfolioVideo,
  UHOneLogo,
  UHOneShopLogo,
  UHOneShopVideo,
  UHOneVideo,
} from '../../assets';

export const useCardData = () => {
  const data = [
    {
      src: UHOneVideo,
      svg: UHOneLogo,
      cardTitle: 'UHOne',
      cardSubtitle: 'JavaScript/JQuery/HTML/Less/AEM',
      frontEndSubtitle: 'JavaScript/JQuery/HTML/Less/AEM',
      cardBody: `I was brought on to assist with this project, where our marketing team was working 
        to rebuild our UHOne site as well as convert it from Sitecore to 
        Adobe Experience Manager (AEM).`,
      modalBody: `The above video highlights many of the features I helped implement on the 
        rework of UHOne.com. These incldue the header component, footer component, 
        and several cards/carousel components.`,
      link: 'https://www.uhone.com/',
    },
    {
      src: UHOneShopVideo,
      svg: UHOneShopLogo,
      cardTitle: 'UHOne Shop',
      cardSubtitle: 'AngularJS/JavaScript/HTML/Bootstrap/SCSS/C#/SQLServer',
      frontEndSubtitle: 'AngularJS/JavaScript/HTML/Bootstrap/SCSS',
      backEndSubtitle: 'C# ASP.NET Core/SQLServer',
      cardBody: `UHOne Shop is a full-stack website built off of ASP.NET Core/C# with Microsoft SQL 
        Server for the back-end. Front-end utilizes AngularJS, JavaScript, 
        custom Boostrap components, HTML, and SCSS.`,
      modalBody: `The above video highlights some of the key features 
        I've worked on within UHOne Shop, these include the compare tool, 
        add to cart highlight feature, chat animations, ACA Landing page, and much more.`,
      link: 'https://www.uhone.com/shop',
    },
    {
      src: PortfolioVideo,
      svg: PortfolioLogo,
      cardTitle: 'Portfolio',
      cardSubtitle: 'React.js/TypeScript/Material UI',
      frontEndSubtitle: 'React.js/TypeScript/Material UI',
      cardBody: `My portfolio site built from the ground up using the React.js 
        framework, JavaScript, and basic HTML and SCSS styling.`,
      modalBody: `Purpose of this portfolio app is to demonstrate strong front end 
        and UI/UX capabilities. The full static app is hosted via GitHub Pages.`,
      link: 'https://helloimkevingombos.com',
      repositoryLink: 'https://github.com/KGombos45/portfolio-site',
    },
    {
      src: AgileTeamsVideo,
      svg: AgileTeamsLogo,
      cardTitle: 'AgileTeams',
      cardSubtitle: 'Angular/TypeScript/HTML/Angular Material/SCSS/C#/SQLServer',
      frontEndSubtitle: 'Angular/TypeScript/HTML/Angular Material/SCSS',
      backEndSubtitle: 'C# .NET Core/SQLServer',
      cardBody: `A full-stack website built off of .NET Core/C# with Microsoft SQL 
        Server for the back-end. Front-end utilizes Angular 7, Angular Material, HTML, and SCSS.`,
      modalBody: `The purpose of this app is to be a demonstration of full-stack development 
      capabilities. AgileTeams is a software platform offering small teams all the 
      way to enterprises a way to collaborate, communicate, and track the overall 
      progress of project lifecycles. AgileTeams API is hosted on Azure Web App 
      Services, and the database is hosted on Azure SQL Serve; the front-end is a static 
      site hosted on GitHub Pages.`,
      link: 'https://agileteams.dev',
      backEndRepositoryLink: 'https://github.com/KGombos45/AgileTeamsBE',
      frontEndRepositoryLink: 'https://github.com/KGombos45/AgileTeamsFE',
    },
    {
      src: IndieCoffeeVideo,
      svg: IndieCoffeeLogo,
      cardTitle: 'Indie Coffee Roasters',
      cardSubtitle: 'React.js/JavaScript/HTML/SCSS',
      frontEndSubtitle: 'React.js/JavaScript/HTML/SCSS',
      cardBody: `A recreation with my own touch of my favorite local coffee shop's website 
        using React.js, JavaScript, and basic HTML and SCSS styling`,
      modalBody: `The purpose of this app is to demonstrate when given a template, or design, 
        I can recreate that design for the web. I achieve that using my favorite local coffee shop, 
        Indie Coffee Roaster's, website where I spend most of my time doing my work.`,
      link: 'https://indiecoffeeroasters.dev',
      originalLink: 'https://www.indiecoffeeroasters.com/',
      repositoryLink: 'https://github.com/KGombos45/coffee-shop',
    },
  ];

  return data;
};
