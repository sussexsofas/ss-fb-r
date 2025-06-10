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
  const ACCESS_TOKEN = 'EAAKfNyEtz7cBOyUFxzB3QdquRbolfNO2PLUmY3Qn2FYGRfEmaHoRe7B2UW5NzEUkP7bpoSnkrQ85sa4W2GZAyvlZAq6rPafncQZCsZBYNS61oybpJ2k5gOexeZBEBTYv4TQ9k39wAAB3pRemnRNkig07ZCkP9HCWxnPIygPu2ZBnVll8WSDRpyDoHcE2UV501rMXB1umjtIDAQM3HjuICZBv22IR7zCZANzsZD';
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
