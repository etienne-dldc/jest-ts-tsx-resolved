module.exports = function resolverForTSJest(path, options) {
  const resolver = options.defaultResolver;

  const JAVASCRIPT_EXTENSION = /\.js$/i;

  if (JAVASCRIPT_EXTENSION.test(path)) {
    for (const extension of [".ts", ".tsx"]) {
      try {
        return resolver(path.replace(JAVASCRIPT_EXTENSION, extension), options);
      } catch {
        continue;
      }
    }
  }

  return resolver(path, options);
};
