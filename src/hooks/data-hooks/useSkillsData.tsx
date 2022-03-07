import {
  AngularLogo,
  CSS3Logo,
  CSharpLogo,
  HTML5Logo,
  JQueryLogo,
  JavaScriptLogo,
  NetCoreLogo,
  NodeLogo,
  OracleLogo,
  ReactLogo,
  SqlServerLogo,
  TypeScriptLogo,
} from '../../assets';

export const useSkillsData = () => {
  const data = [
    {
      src: AngularLogo,
      alt: 'Angular',
      text: 'Angular and AngularJS',
    },
    {
      src: ReactLogo,
      alt: 'React',
      text: 'React',
    },
    {
      src: JavaScriptLogo,
      alt: 'JavaScript',
      text: 'JavaScript',
    },
    {
      src: TypeScriptLogo,
      alt: 'TypeScript',
      text: 'TypeScript',
    },
    {
      src: JQueryLogo,
      alt: 'JQuery',
      text: 'JQuery',
    },
    {
      src: HTML5Logo,
      alt: 'HTML5',
      text: 'HTML5',
    },
    {
      src: CSS3Logo,
      alt: 'CSS3',
      text: 'CSS3',
    },
    {
      src: NodeLogo,
      alt: 'Node.js',
      text: 'Node.js',
    },
    {
      src: CSharpLogo,
      alt: 'C#',
      text: 'C#',
    },
    {
      src: NetCoreLogo,
      alt: '.Net Core',
      text: '.Net Core',
    },
    {
      src: SqlServerLogo,
      alt: 'SQLServer',
      text: 'MS SQLServer',
    },
    {
      src: OracleLogo,
      alt: 'Oracle',
      text: 'Oracle',
    },
  ];

  return data;
};
