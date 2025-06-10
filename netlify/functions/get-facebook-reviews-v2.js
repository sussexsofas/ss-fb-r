exports.handler = async function (event, context) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
      },
      body: ''
    };
  }

  const PAGE_ID = '61552186662245';
  const ACCESS_TOKEN = 'EAAKfNyEtz7cBO9NEn4UE3bYxothl2sVWe5vKaNzT5KwLy5JhFQnqgbQxy1g3D89ZB0cdhiEXoFhpWfxLeWsHSSnOgOKkwhY0chaNZB0gTfdAcOhB8JBidPWFsGyGEAnl3V4ewoGSZA0C7AVTsuUuN9pFkVvVNCHWNnVUr7PnQKw5gujKNHZAqjcZBVqtUIZBbtcEZBSRVWkT9AxlZCdm2sDGWCIXg8MZD';
  const url = `https://graph.facebook.com/v19.0/${PAGE_ID}/ratings?access_token=${ACCESS_TOKEN}`;

  try {
    const fbRes = await fetch(url);
    const fbJson = await fbRes.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fbJson.data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Facebook fetch failed', details: err.message })
    };
  }
};
