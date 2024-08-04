//PROJ
const projects = [
  {
    imgSrc: 'img/spring-boot.svg',
    imgAlt: 'boot',
    title: 'Spring Boot',
    description:
      'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.',
  },
  {
    imgSrc: 'img/spring-framework.svg',
    imgAlt: 'Framework',
    title: 'Spring Framework',
    description:
      'Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.',
  },
  {
    imgSrc: 'img/spring-data.svg',
    imgAlt: 'data',
    title: 'Spring Data',
    description:
      'Provides a consistent approach to data access - relational, non-relational, map-reduce, and beyond.',
  },
  {
    imgSrc: 'img/spring-cloud.svg',
    imgAlt: 'Cloud',
    title: 'Spring Cloud',
    description:
      'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
  },
  {
    imgSrc: 'img/spring-data-flow.svg',
    imgAlt: 'spring-data-flow',
    title: 'Spring Cloud Data Flow',
    description:
      'An orchestration service for composable data microservice applications on modern runtimes.',
  },
  {
    imgSrc: 'img/spring-security.svg',
    imgAlt: 'security',
    title: 'Spring Security',
    description:
      'Protects your application with comprehensive and extensible authentication and authorization support.',
  },
];



/*
function renderProjects(projects) {
  const projectsContainer = document.querySelector('.listOfProject');
  projectsContainer.innerHTML = '';

  projects.forEach((project) => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    projectElement.innerHTML = `
        <img src="${project.imgSrc}" alt="${project.imgAlt}" />
        <div class="info">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
        </div>
      `;

    projectsContainer.appendChild(projectElement);
  });
}

renderProjects(projects);
*/

function renderProjects(filteredProjects) {
    const projectContainer = document.querySelector('.listOfProject');
    projectContainer.innerHTML = '';

    if (filteredProjects.length === 0) {
      projectContainer.innerHTML = '<p class="no-results">No results</p>';
      return;
    }

    filteredProjects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.className = 'project';

      const img = document.createElement('img');
      img.src = project.imgSrc;
      img.alt = project.imgAlt;

      const infoDiv = document.createElement('div');
      infoDiv.className = 'info';

      const title = document.createElement('h2');
      title.textContent = project.title;

      const description = document.createElement('p');
      description.textContent = project.description;

      infoDiv.appendChild(title);
      infoDiv.appendChild(description);
      projectDiv.appendChild(img);
      projectDiv.appendChild(infoDiv);
      projectContainer.appendChild(projectDiv);
    });
  }

  function filterProjects(query) {
    return projects.filter(project => {
      const lowerCaseQuery = query.toLowerCase();
      return (
        project.title.toLowerCase().includes(lowerCaseQuery) ||
        project.description.toLowerCase().includes(lowerCaseQuery)
      );
    });
  }

  function debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);//saving "this" value
    };
  }

  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search');
    renderProjects(projects);

    const handleSearch = debounce((e) => {
      const query = e.target.value;
      const filteredProjects = filterProjects(query);
      renderProjects(filteredProjects);
    }, 300);

    searchInput.addEventListener('input', handleSearch);
  });



//PROJ

//LABELS
const labels = ['Why Spring', 'Learn', 'Projects', 'Training', 'Support', 'Community'];

function renderLabels(labels) {
  const container = document.querySelector('.navBar');
  container.innerHTML = '';

  const hambContainer = document.querySelector('#hamb');

  labels.forEach((label) => {
    const labelElement = document.createElement('li');
    labelElement.classList.add('dropBtn');

    labelElement.innerHTML = `
          <a href="#">${label}</a>
            <div class="content">
              <a href="#">Microservices</a>
              <a href="#">Reactive</a>
              <a href="#">Event Driven </a>
            </div>
        `;

    const hambElement = document.createElement('li');
    hambElement.classList.add('hambContent');
    hambElement.innerHTML = `<a href="#">${label}</a>`;

    container.appendChild(labelElement);
    hambContainer.appendChild(hambElement);
  });
}

renderLabels(labels);
//LABELS

//for dropbtns
const dropBtns = document.querySelectorAll('.dropBtn');
const hamburger = document.querySelectorAll('.hamburger');

function closeAllDrop() {
  dropBtns.forEach((dropBtn) => {
    dropBtn.querySelector('.content').style.display = 'none';
  });

  hamburger.forEach((ham) => {
    console.log(ham.querySelector('.navBar').querySelectorAll('.hambContent'));
    ham
      .querySelector('.navBar')
      .querySelectorAll('.hambContent')
      .forEach((el) => (el.style.display = 'none'));
  });
}

document.addEventListener('DOMContentLoaded', () => {

  dropBtns.forEach((dropBtn) => {
    dropBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeAllDrop();

      dropBtn.querySelector('.content').style.display = 'block';
    });
  });

  hamburger.forEach((ham) => {
    ham.addEventListener('click', (e) => {
      e.stopPropagation();

      ham.querySelector('#hamb').style = `display:block; `;

      ham
        .querySelector('.navBar')
        .querySelectorAll('.hambContent')
        .forEach((el) => (el.style.display = 'block'));
    });
  });
});

window.onclick = function (event) {
  closeAllDrop();
};

//for dropbtns
