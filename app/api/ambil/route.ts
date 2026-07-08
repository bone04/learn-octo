import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";
export const dynamic = 'force-static';
// https://raw.githubusercontent.com/bone04/learn-octo/main/items.json

export async function GET(request: Request) {
  
  const owner: string = process.env.GITHUB_OWNER || "bone04"
  const repo: string = process.env.GITHUB_REPO || "learn-octo"
  const path: string = process.env.GITHUB_FILE_PATH || "items.json"

  const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN || undefined
    });
    
  const response = await octokit.rest.repos.getContent({
      owner,
      repo,
      path
    });
  
return NextResponse.json("response route");
}
