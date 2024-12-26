import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import RepositoryList from '../repositoryList/RepositoryList';

const users = [
  {
    name: 'UtkarshDhairyaP...',
    repositories: [
      { name: 'design-system', type: 'Public', size: '7320 KB', language: 'React', updated: '1 day ago' },
      { name: 'codeant-ci-app', type: 'Private', size: '5871 KB', language: 'JavaScript', updated: '2 days ago' },
      { name: 'analytics-dashboard', type: 'Private', size: '4521 KB', language: 'Python', updated: '5 days ago' },
      { name: 'mobile-app', type: 'Public', size: '3096 KB', language: 'Swift', updated: '3 days ago' },
      { name: 'e-commerce-platform', type: 'Private', size: '6210 KB', language: 'Java', updated: '6 days ago' },
      { name: 'blog-website', type: 'Public', size: '1876 KB', language: 'HTML/CSS', updated: '4 days ago' },
      { name: 'social-network', type: 'Private', size: '5432 KB', language: 'PHP', updated: '7 days ago' },
    ],
  },
  {
    name: 'AnotherUser',
    repositories: [
      { name: 'data-analyzer', type: 'Public', size: '4000 KB', language: 'Python', updated: '2 days ago' },
      { name: 'web-crawler', type: 'Private', size: '5000 KB', language: 'Java', updated: '1 day ago' },
    ],
  },
];

function Home() {
  const [selectedUser, setSelectedUser] = useState(users[0].name);
  const [searchTerm, setSearchTerm] = useState('');

  const handleUserChange = (userName) => {
    setSelectedUser(userName);
    setSearchTerm(''); // Clear search term when switching users
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleRefresh = () => {
    setSearchTerm(''); // Clear the search term
  };

  const currentUser = users.find((user) => user.name === selectedUser);

  const filteredRepositories = currentUser.repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <Sidebar users={users} selectedUser={selectedUser} onUserChange={handleUserChange} />
      <div className="ml-64 flex-1 flex flex-col overflow-y-auto bg-[#fafafa] p-6 gap-2">
        <div className=" border border-[#e9eaeb] rounded-xl bg-white shadow-sm">
          <Header
            repositoryCount={filteredRepositories.length}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onRefresh={handleRefresh}
          />
          <RepositoryList repositories={filteredRepositories} />
        </div>
      </div>
    </div>
  );
}


export default Home;
