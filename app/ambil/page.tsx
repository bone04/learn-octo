import { Octokit } from "@octokit/rest";
// https://raw.githubusercontent.com/bone04/learn-octo/main/items.json

export default async function AmbilPage() {

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN || undefined
  });
  
 const owner: string = process.env.GITHUB_OWNER || "bone04"
  const repo: string = process.env.GITHUB_REPO || "learn-octo"
  const path: string = process.env.GITHUB_FILE_PATH || "items.json"

  const response = await octokit.rest.repos.getContent({
      owner,
      repo,
      path
    });
    if (!data) {
    return {
      notFound: true,
    }
  }
  return (
    <div>
      <h1>Hello Next.js! Ambil Page</h1>
      <p>This is a basic page in Next.js.</p>
    </div>
  );
}
