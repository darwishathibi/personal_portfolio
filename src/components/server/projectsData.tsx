import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[_type == "post"] {
        title,
        "imageUrl": image.asset->url,
        desc,
        frameworks,
        githubUrl,
        liveUrl
      }`;

export async function getProjects() {
  return client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    { next: { revalidate: 30 } }
  );
}
