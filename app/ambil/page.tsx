import { Octokit } from "@octokit/rest";

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN || undefined
  });

export default function AmbilPage() {
  const response = await octokit.rest.repos.getContent({
      owner,
      repo,
      path
    });
  
  return (
    <div>
      <h1>Hello Next.js! Ambil Page</h1>
      <p>This is a basic page in Next.js.</p>
    </div>
  );
}
