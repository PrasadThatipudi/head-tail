const dbg = function (arg) {
  console.log(arg);
  return arg;
};

const readFile = function (filePath) {
  try {
    return Deno.readTextFileSync(filePath);
  } catch {
    throw `${filePath}: No such file or directory`;
  }
};

const toNumber = (numberInString) => +numberInString;

const parseNoLinesAndFilePath = function (args) {
  if (!args[0].startsWith("-n")) return [10, ...args];

  const noOfLines = args[0].slice(2);
  const [lines, filesStart] =
    noOfLines.length !== 0 ? [noOfLines, 1] : [args[1], 2];

  return [toNumber(lines) || lines, ...args.slice(filesStart)];
};

const head = function (args) {
  const [lines, filePath] = parseNoLinesAndFilePath(args);

  return readFile(filePath).split("\n").slice(0, lines).join("\n");
};

export { head, parseNoLinesAndFilePath };
