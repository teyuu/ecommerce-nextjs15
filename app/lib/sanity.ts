import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
    projectId: "6sded5n9",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource ) {
    return builder.image(source)
}