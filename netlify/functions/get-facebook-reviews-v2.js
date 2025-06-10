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
  const ACCESS_TOKEN = 'EAAKfNyEtz7cBOZBQqgcHnRFQVfrzmJf1PtEIP49JRXjhwpOjJqwKJ2Pb1cPIYE4GfMBiZAZCGCZCOqLkvN6lOEOJAfhYcfJGBv7QN1AJBTrZALXt1WsNKjgCD2p2yCsTKknmdtZBOxlyGS00HUewCtFpfzBQKaCXTkV4arEBeNaHIoKZAhnU6HDrzhOZBt8C8yZAHG8kjrCW2WcbonFMgvaZBy6EPSigsrDOMZD';
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
