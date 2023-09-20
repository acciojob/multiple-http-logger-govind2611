const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

// Function to make an HTTP request and return the response JSON
async function fetchUrl(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return { url, data };
    } else {
      throw new Error(`Error fetching ${url}: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error fetching ${url}: ${error.message}`);
  }
}

// Function to fetch all URLs and log the responses
async function fetchAllUrls(urls) {
  try {
    const responses = await Promise.all(urls.map(fetchUrl));
    responses.forEach((response) => {
      console.log(`Response from ${response.url}:`, response.data);
    });
  } catch (error) {
    console.error(error.message);
  }
}

// Start fetching the URLs
fetchAllUrls(urls);
