import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";
export const dynamic = 'force-static';
// https://raw.githubusercontent.com/bone04/learn-octo/main/items.json

export async function GET() {
  
  const owner: string = process.env.GITHUB_OWNER || "bone04"
  const repo: string = process.env.GITHUB_REPO || "learn-octo"
  const path: string = process.env.GITHUB_FILE_PATH || "items.json"
 if (!owner) {
      throw new Error("OWNER environment variable is required.");
    }
return NextResponse.json({ message: "Data received" });
}
