export interface Project {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}
export const projects:Project[]= [
    {
      imgSrc: '/img/spring-boot.svg',
      imgAlt: 'boot',
      title: 'Spring Boot',
      description:
        'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.',
    },
    {
      imgSrc: '/img/spring-framework.svg',
      imgAlt: 'Framework',
      title: 'Spring Framework',
      description:
        'Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.',
    },
    {
      imgSrc: '/img/spring-data.svg',
      imgAlt: 'data',
      title: 'Spring Data',
      description:
        'Provides a consistent approach to data access - relational, non-relational, map-reduce, and beyond.',
    },
    {
      imgSrc: '/img/spring-cloud.svg',
      imgAlt: 'Cloud',
      title: 'Spring Cloud',
      description:
        'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
    },
    {
      imgSrc: '/img/spring-data-flow.svg',
      imgAlt: 'spring-data-flow',
      title: 'Spring Cloud Data Flow',
      description:
        'An orchestration service for composable data microservice applications on modern runtimes.',
    },
    {
      imgSrc: '/img/spring-security.svg',
      imgAlt: 'security',
      title: 'Spring Security',
      description:
        'Protects your application with comprehensive and extensible authentication and authorization support.',
    },
  ];
  

  export const labels:Array<string> = ['Why Spring', 'Learn', 'Projects', 'Training', 'Support', 'Community'];
