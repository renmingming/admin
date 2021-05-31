import defaultSettings from "@/setting";

const title = defaultSettings.title || "Vue Admin";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
