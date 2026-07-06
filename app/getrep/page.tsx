import { Octokit } from '@octokit/rest';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;
const path = process.env.GITHUB_FILE_PATH;

export default async function oktozPage() {
  
  const response = await octokit.rest.repos.getContent({
  mediaType: {
    format: "raw",
  },
  owner,
  repo,
  path,
});
  //, JSON.parse(data).title
console.log("package title: %s");
  
 return (
   <>
     <div>Oktoz Page</div>
   </>
 )
   
}
