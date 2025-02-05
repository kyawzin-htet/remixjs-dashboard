import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { getThemeSession } from "~/utils/theme.server";

export async function action({ request }: ActionFunctionArgs) {
  const themeSession = await getThemeSession(request);
  const currentTheme = themeSession.getTheme();

  themeSession.setTheme(currentTheme === "dark" ? "light" : "dark");

  return redirect(request.headers.get("Referer") ?? "/", {
    headers: {
      "Set-Cookie": await themeSession.commit(),
    },
  });
} 