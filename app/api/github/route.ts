import { NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";
export const dynamic = 'force-static';
export async function GET(request: Request) {
  const url = new URL(request.url);
  const owner = url.searchParams.get("owner");
  const repo = url.searchParams.get("repo");
  const path = url.searchParams.get("path");

  if (!owner || !repo || !path) {
    return NextResponse.json(
      { error: "Missing query params: owner, repo, and path are required" },
      { status: 400 }
    );
  }

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN || undefined
  });

  try {
    const response = await octokit.rest.repos.getContent({
      owner,
      repo,
      path
    });

    // If it's a file, octokit returns an object with a 'content' field (base64)
    // @ts-ignore
    if ("content" in response.data && response.data.content) {
      // @ts-ignore
      const contentBase64: string = response.data.content;
      const raw = Buffer.from(contentBase64, "base64").toString("utf8");

      try {
        const parsed = JSON.parse(raw);
        return NextResponse.json({ data: parsed });
      } catch {
        // not JSON — return raw text
        return NextResponse.json({ data: raw });
      }
    }

    // Directory or other metadata
    return NextResponse.json({ data: response.data });
  } catch (err: any) {
    const status = err.status || 500;
    const message = err.message || "Unknown error fetching file from GitHub";
    return NextResponse.json({ error: message }, { status });
  }
}
