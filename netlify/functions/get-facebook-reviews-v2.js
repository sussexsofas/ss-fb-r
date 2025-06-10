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
  const ACCESS_TOKEN = 'EAAKfNyEtz7cBO2yplFZCou8JxHI3Pn6DCtcU0JEKEfuG1QcOOHveE1LIXav8aavr7yghaUdmbyZAuaTym8Yt38LSgGyFbX7PvQo3T32lN6pSMZAIaPs2DPdMA2FBErj08eGYj1zMeWzItPlZAtnZBFpZAJ2MOk51QLz7JRySN4VLUGZAz1dWY5KdoXBXtFYise4i66EgY3ow1Tjyio7H3Az009iX91T';
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
