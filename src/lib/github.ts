import { unstable_cache } from "next/cache";

// Replace with your actual GitHub username
const GITHUB_USERNAME = "sdiv0503"; // <-- CHANGE THIS TO YOUR USERNAME

export async function getGithubStats() {
  try {
    // 1. Fetch User Data (Followers, Repos)
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!userRes.ok) throw new Error("GitHub user not found");
    const user = await userRes.json();

    // 2. Fetch Recent Events (To calculate "Active Status")
    const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=1`, {
      next: { revalidate: 3600 },
    });
    const events = eventsRes.ok ? await eventsRes.json() : [];
    
    // Check if pushed code in the last 24 hours
    const lastPush = events[0]?.created_at;
    const isActive = lastPush 
      ? (new Date().getTime() - new Date(lastPush).getTime()) < 24 * 60 * 60 * 1000 
      : false;

    return {
      followers: user.followers,
      public_repos: user.public_repos,
      isActive,
      avatar: user.avatar_url,
      url: user.html_url,
    };
  } catch (error) {
    console.error("GitHub Fetch Error:", error);
    return null;
  }
}