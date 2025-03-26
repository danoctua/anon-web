import { cookies } from "next/headers";

export async function getLocaleFromCookie() {
    const cookieStore = await cookies();
    return cookieStore.get("NEXT_LOCALE")?.value || "en"; // Default to English
}
