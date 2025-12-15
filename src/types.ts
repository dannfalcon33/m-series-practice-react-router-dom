export interface PageContent {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage: string;
  elementId?: string; // For potential GSAP targeting
}

export type PageId = "about" | "team" | "productions" | "plans" | "watch";
