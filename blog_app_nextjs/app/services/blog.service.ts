import { env } from "@/env";

const API_URL = env.API_URL;
interface GetBlogsParams {
  isFeatured?: boolean;
  search?: string;
}
interface serviceOptions {
  cache?: RequestCache;
  revalidate?: number;
}
export const blogService = {
  getBlogPost: async function (
    params?: GetBlogsParams,
    options?: serviceOptions,
  ) {
    try {
      const url = new URL(`${API_URL}/posts`);
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }
      const config: RequestInit = {};
      if (options?.cache) {
        config.cache = options.cache;
      }
      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }
      const res = await fetch(url.toString(), config);
      const data = await res.json();
      return { data: data, error: null };
    } catch (error: any) {
      return {
        data: null,
        error: {
          message: "something went wrong",
        },
      };
    }
  },
};
