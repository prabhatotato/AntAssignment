import React from 'react';
import AuthButton from './AuthButton'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

import githubIcon from '../../../../../assets/githubIcon.png';
import bitBucketIcon from '../../../../../assets/bitBucketIcon.png';
import azureIcon from '../../../../../assets/AzureIcon.png';
// import gitLabIcon from '/src/assets/GitLabIcon.png';
import gitLabIcon from './GitlabIcon.png';
import ssoIcon from '../../../../../assets/SSOIcon.png';

function AuthOptions({ activeTab }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home'); // Redirect to /home
  };

  const saasButtons = [
    { icon: githubIcon, text: 'Sign in with Github' },
    { icon: bitBucketIcon, text: 'Sign in with Bitbucket' },
    { icon: azureIcon, text: 'Sign in with Azure DevOps' },
    { icon: gitLabIcon, text: 'Sign in with GitLab' },
  ];
  
  const selfHostedButtons = [
    { icon: gitLabIcon, text: 'Self Hosted GitLab' },
    { icon: ssoIcon, text: 'Sign in with SSO' },
  ];
  

  const buttons = activeTab === 'SAAS' ? saasButtons : selfHostedButtons;

  return (
    <div className="flex flex-col items-center py-2">
      {buttons.map((button, index) => (
        <AuthButton key={index} icon={button.icon} text={button.text} onClick={handleClick} />
      ))}
      
    </div>
  );
}

export default AuthOptions;
