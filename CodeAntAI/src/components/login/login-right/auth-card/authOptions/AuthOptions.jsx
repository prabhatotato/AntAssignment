import React from 'react';

function AuthOptions({ activeTab }) {
  if (activeTab === 'SAAS') {
    return (
      <div className="space-y-4">
        <button className="flex items-center justify-center w-full py-3 px-4 border rounded-lg bg-gray-50 hover:bg-gray-100">
          <img src="/path-to-github-icon.png" alt="Github" className="w-6 h-6 mr-3" />
          <span>Sign in with Github</span>
        </button>
        <button className="flex items-center justify-center w-full py-3 px-4 border rounded-lg bg-gray-50 hover:bg-gray-100">
          <img src="/path-to-bitbucket-icon.png" alt="Bitbucket" className="w-6 h-6 mr-3" />
          <span>Sign in with Bitbucket</span>
        </button>
        <button className="flex items-center justify-center w-full py-3 px-4 border rounded-lg bg-gray-50 hover:bg-gray-100">
          <img src="/path-to-azure-icon.png" alt="Azure DevOps" className="w-6 h-6 mr-3" />
          <span>Sign in with Azure DevOps</span>
        </button>
        <button className="flex items-center justify-center w-full py-3 px-4 border rounded-lg bg-gray-50 hover:bg-gray-100">
          <img src="/path-to-gitlab-icon.png" alt="GitLab" className="w-6 h-6 mr-3" />
          <span>Sign in with GitLab</span>
        </button>
      </div>
    );
  }

  if (activeTab === 'Self Hosted') {
    return (
      <div className="space-y-4">
        <button className="flex items-center justify-center w-full py-3 px-4 border rounded-lg bg-gray-50 hover:bg-gray-100">
          <img src="/path-to-gitlab-icon.png" alt="Self Hosted GitLab" className="w-6 h-6 mr-3" />
          <span>Self Hosted GitLab</span>
        </button>
        <button className="flex items-center justify-center w-full py-3 px-4 border rounded-lg bg-gray-50 hover:bg-gray-100">
          <img src="/path-to-sso-icon.png" alt="SSO" className="w-6 h-6 mr-3" />
          <span>Sign in with SSO</span>
        </button>
      </div>
    );
  }

  return null;
}

export default AuthOptions;
