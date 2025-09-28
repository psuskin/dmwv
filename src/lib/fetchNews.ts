import { ApiNewsItem, PaginatedNewsResponse } from "@/types/news";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://dmwv-news.susko.ai";

export async function fetchNews(page = 1): Promise<ApiNewsItem[]> {
  const res = await fetch(`${API_BASE}/api/news?page=${page}`, {
    // cache on the server briefly for perf; adjust as needed
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const json = (await res.json()) as PaginatedNewsResponse;
  return json?.data || [];
}

export async function fetchNewsById(id: string): Promise<ApiNewsItem | null> {
  const res = await fetch(`${API_BASE}/api/news/${id}`, { next: { revalidate: 60 } });
  if (!res.ok) return null;
  return (await res.json()) as ApiNewsItem;
}
