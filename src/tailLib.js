const readFile = (filePath) => Deno.readTextFileSync(filePath);

export const tail = (filePath) =>
  readFile(filePath).split("\n").slice(-10).join("\n");
