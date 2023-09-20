const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Function to make an HTTP request to a URL and log the response
async function fetchAndLog(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(`Response from ${url}:`, data);
    } else {
      console.error(`Error fetching ${url}: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error fetching ${url}: ${error.message}`);
  }
}

// Loop through the URLs and make asynchronous requests
async function fetchUrls() {
  for (const url of urls) {
    await fetchAndLog(url);
  }
}

// Start fetching the URLs
fetchUrls();
