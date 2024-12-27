import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import RepositoryList from "../repositoryList/RepositoryList";

const users = [
  {
    name: "UtkarshDhairyaP...",
    repositories: [
      {
        name: "design-system",
        type: "Public",
        size: "7320 KB",
        language: "React",
        updated: "1 day ago",
      },
      {
        name: "codeant-ci-app",
        type: "Private",
        size: "5871 KB",
        language: "JavaScript",
        updated: "2 days ago",
      },
      {
        name: "analytics-dashboard",
        type: "Private",
        size: "4521 KB",
        language: "Python",
        updated: "5 days ago",
      },
      {
        name: "mobile-app",
        type: "Public",
        size: "3096 KB",
        language: "Swift",
        updated: "3 days ago",
      },
      {
        name: "web-crawler",
        type: "Private",
        size: "5000 KB",
        language: "Java",
        updated: "1 day ago",
      },
      {
        name: "auth-service",
        type: "Public",
        size: "3124 KB",
        language: "Node.js",
        updated: "7 days ago",
      },
      {
        name: "e-commerce-platform",
        type: "Private",
        size: "6210 KB",
        language: "Java",
        updated: "6 days ago",
      },
      {
        name: "blog-website",
        type: "Public",
        size: "1876 KB",
        language: "HTML/CSS",
        updated: "4 days ago",
      },
      {
        name: "face detection",
        type: "Private",
        size: "6485 KB",
        language: "Python",
        updated: "4 days ago",
      },
      {
        name: "weather-app",
        type: "Private",
        size: "5432 KB",
        language: "PHP",
        updated: "8 days ago",
      },
      {
        name: "json-genrator",
        type: "Private",
        size: "5432 KB",
        language: "Javascript",
        updated: "2 days ago",
      },
      {
        name: "workout-tracker",
        type: "Private",
        size: "5432 KB",
        language: "Typescript",
        updated: "6 days ago",
      },
      {
        name: "snake-io",
        type: "Private",
        size: "5432 KB",
        language: "Python",
        updated: "1 days ago",
      },
      {
        name: "CLI-chat",
        type: "Private",
        size: "5432 KB",
        language: "Go",
        updated: "9 days ago",
      },
      {
        name: "npm tool",
        type: "Private",
        size: "5432 KB",
        language: "Ruby",
        updated: "7 days ago",
      },
    ],
  },
  {
    name: "JaneSmith",
    repositories: [
      {
        name: "blog-website",
        type: "Public",
        size: "1876 KB",
        language: "HTML/CSS",
        updated: "4 days ago",
      },
      {
        name: "social-network",
        type: "Private",
        size: "5432 KB",
        language: "PHP",
        updated: "7 days ago",
      },
      {
        name: "data-analyzer",
        type: "Public",
        size: "4000 KB",
        language: "Python",
        updated: "2 days ago",
      },
      {
        name: "web-crawler",
        type: "Private",
        size: "5000 KB",
        language: "Java",
        updated: "1 day ago",
      },
      {
        name: "auth-service",
        type: "Public",
        size: "3124 KB",
        language: "Node.js",
        updated: "7 days ago",
      },
      {
        name: "landing-page",
        type: "Private",
        size: "2755 KB",
        language: "HTML/CSS",
        updated: "4 days ago",
      },
      {
        name: "design-tokens",
        type: "Public",
        size: "1532 KB",
        language: "SCSS",
        updated: "3 days ago",
      },
    ],
  },
  {
    name: "JohnDoe",
    repositories: [
      {
        name: "frontend-lib",
        type: "Public",
        size: "2901 KB",
        language: "TypeScript",
        updated: "1 day ago",
      },
      {
        name: "serverless-deploy",
        type: "Private",
        size: "4350 KB",
        language: "Python",
        updated: "3 days ago",
      },
      {
        name: "image-optimizer",
        type: "Public",
        size: "2102 KB",
        language: "Go",
        updated: "2 days ago",
      },
      {
        name: "kubernetes-configs",
        type: "Private",
        size: "6401 KB",
        language: "YAML",
        updated: "5 days ago",
      },
    ],
  },
  {
    name: "AnotherUser",
    repositories: [
      {
        name: "data-analyzer",
        type: "Public",
        size: "4000 KB",
        language: "Python",
        updated: "2 days ago",
      },
      {
        name: "web-crawler",
        type: "Private",
        size: "5000 KB",
        language: "Java",
        updated: "1 day ago",
      },
    ],
  },
];

function Home() {
  const [selectedUser, setSelectedUser] = useState(users[0].name);
  const [searchTerm, setSearchTerm] = useState("");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleUserChange = (userName) => {
    setSelectedUser(userName);
    setSearchTerm(""); // Clear search term when switching users
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleRefresh = () => {
    setSearchTerm(""); // Clear the search term
  };

  const currentUser = users.find((user) => user.name === selectedUser);

  const filteredRepositories = currentUser.repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <Sidebar
        users={users}
        selectedUser={selectedUser}
        onUserChange={handleUserChange}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      {isMobileMenuOpen && (
        <div
          onClick={toggleMobileMenu}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}
      <div className="flex-1 flex flex-col overflow-y-auto bg-[#fafafa] p-6 gap-2 md:ml-64">
        <div className=" border border-[#e9eaeb] rounded-xl bg-white shadow-sm">
          <Header
            repositoryCount={filteredRepositories.length}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onRefresh={handleRefresh}
            toggleMobileMenu={toggleMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
          />
          <RepositoryList repositories={filteredRepositories} />
        </div>
      </div>
    </div>
  );
}

export default Home;
