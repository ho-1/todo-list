let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  // eslint-disable-next-line no-unused-vars
  backendHost = "http://localhost:8082";
}

export const API_BASE_URL = `&{backendHost}`;