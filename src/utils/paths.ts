const isProd = process.env.NODE_ENV === "production";
const repoName = "medcore-premium-hospital";

export const getAssetPath = (path: string) => {
  if (!path.startsWith("/")) return path;
  return isProd ? `/${repoName}${path}` : path;
};
