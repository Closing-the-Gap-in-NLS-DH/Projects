export function getPaths(basePath: string): string[] {
  const paths: string[] = [];

  for (const dirEntry of Deno.readDirSync(basePath)) {
    if (dirEntry.isDirectory) {
      const subPath = `${basePath}/${dirEntry.name}`;
      paths.push(...getPaths(subPath));
    } else {
      const fullPath = `${basePath}/${dirEntry.name}`;

      if (fullPath.endsWith(".json")) {
        paths.push(fullPath);
      }
    }
  }

  return paths;
}
