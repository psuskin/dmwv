export interface ApiNewsItem {
  _id: string;
  title: Record<string, string>;
  content: Record<string, string>;
  originalLang: string;
  coverImage?: string;
  translations: Record<string, { title: string; content: string }>;
  createdAt: string;
  updatedAt: string;
  views: number;
}

export interface PaginatedNewsResponse {
  data: ApiNewsItem[];
  totalPages?: number;
  currentPage?: number;
  total?: number;
}
