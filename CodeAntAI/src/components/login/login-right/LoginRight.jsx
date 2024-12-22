import React from "react";

function LoginRight() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center bg-[#fafafa]">
      <div className="flex space-x-4 mb-6">
        <button className="flex-1 py-2 text-center border-b-2 border-black font-bold">SAAS</button>
        <button className="flex-1 py-2 text-center border-b-2 border-transparent">Self Hosted</button>
      </div>
      <div className="space-y-4 w-full max-w-xs">
        <button className="w-full py-3 bg-gray-800 text-white rounded-lg font-bold">
          Sign in with GitHub
        </button>
        <button className="w-full py-3 bg-blue-800 text-white rounded-lg font-bold">
          Sign in with Bitbucket
        </button>
        <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-bold">
          Sign in with Azure DevOps
        </button>
        <button className="w-full py-3 bg-orange-600 text-white rounded-lg font-bold">
          Sign in with GitLab
        </button>
      </div>
      <p className="text-gray-500 text-sm mt-6">
        By signing up you agree to the{" "}
        <a href="/privacy" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>.
      </p>
    </div>
  );
}

export default LoginRight;
