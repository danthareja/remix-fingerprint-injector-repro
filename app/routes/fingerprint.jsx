const { FingerprintInjector } = require("fingerprint-injector");

export function loader() {
  try {
    new FingerprintInjector();
  } catch (e) {
    console.error(e);
    return {
      error: e.message,
      stack: e.stack,
    };
  }

  return {
    success: true,
  };
}
