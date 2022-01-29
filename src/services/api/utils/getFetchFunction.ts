// Function used to detect whether the app is being rendered from the server or
// the browser and return the correct fetch function based on that. Note that we
// use a polyfill (whatwg-fetch) to inject fetch into the window object when running on a
// browser.
export default function getFetchFunction() {
  return typeof window !== 'undefined' ? window.fetch : fetch;
}
