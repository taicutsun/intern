import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import { LoginPage } from './components/log/Log';
import { projects, labels } from './data';
import { Routes, Route } from 'react-router-dom';

const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

function Home() {
  const [query, setQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const handleSearch = debounce((query: string) => {
      const lowerCaseQuery = query.toLowerCase();

      const filtered = projects.filter(
        (project) =>
          project.title.toLowerCase().includes(lowerCaseQuery) ||
          project.description.toLowerCase().includes(lowerCaseQuery),
      );

      setFilteredProjects(filtered.length ? filtered : []);
    }, 300);

    handleSearch(query);
  }, [query]);

  return (
    <div>
      <Header labels={labels} />
      <main>
        <section className="intro">
          <h1>Projects</h1>
          <p>
            From configuration to security, web apps to big data—whatever the infrastructure needs
            of your application may be, there is a Spring Project to help you build it. Start small
            and use just what you need—Spring is modular by design.
          </p>
        </section>
        <SearchBar query={query} setQuery={setQuery} />
        <ProjectList projects={filteredProjects} />
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
