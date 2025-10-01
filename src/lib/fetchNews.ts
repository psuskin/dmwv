import { ApiNewsItem, PaginatedNewsResponse } from "@/types/news";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://dmwv-news.susko.ai";

// Updated to fetch all news items
export async function fetchAllNews(): Promise<ApiNewsItem[]> {
  try {
    // First, get the total number of pages
    const firstPageRes = await fetch(`${API_BASE}/api/news?page=1`, {
      next: { revalidate: 60 },
    });
    
    if (!firstPageRes.ok) return [];
    
    const firstPageData = (await firstPageRes.json()) as PaginatedNewsResponse;
    const totalPages = firstPageData.totalPages || 1;
    
    // If there's only one page, return the data from the first page
    if (totalPages === 1) {
      return firstPageData.data || [];
    }
    
    // Fetch all pages
    const promises = [];
    for (let page = 1; page <= totalPages; page++) {
      promises.push(
        fetch(`${API_BASE}/api/news?page=${page}`, {
          next: { revalidate: 60 },
        }).then(res => res.json())
      );
    }
    
    const results = await Promise.all(promises);
    const allNews: ApiNewsItem[] = [];
    
    results.forEach(result => {
      const data = result as PaginatedNewsResponse;
      if (data.data) {
        allNews.push(...data.data);
      }
    });
    
    return allNews;
  } catch (error) {
    console.error("Error fetching all news:", error);
    return [];
  }
}

// Keep the original function for backward compatibility
export async function fetchNews(page = 1): Promise<PaginatedNewsResponse> {
  const res = await fetch(`${API_BASE}/api/news?page=${page}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return { data: [], totalPages: 0, currentPage: 0, total: 0 };
  const json = (await res.json()) as PaginatedNewsResponse;
  return json || { data: [], totalPages: 0, currentPage: 0, total: 0 };
}

export async function fetchNewsById(id: string): Promise<ApiNewsItem | null> {
  const res = await fetch(`${API_BASE}/api/news/${id}`, { next: { revalidate: 60 } });
  if (!res.ok) return null;
  return (await res.json()) as ApiNewsItem;
}