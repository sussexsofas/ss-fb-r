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

  const PAGE_ID = '470026866204994';
  const ACCESS_TOKEN = 'EAARvxYSNLa8BO99BaMrWQDo8A6tC0xgBLjsyzALjGyw8ZAiuy1wj7A8SzUDZCIaXN5cN2jPBnbxQhU9GwXjUZAtYwHlnN0ocaWOjNWvZC915MRVxgb3owvqsrXZASkpDMVi1Gls5iCzuaEABDaECoh2btM0xDeCRhtnxFAj15nZCgyiPY0CxiVJZCc09lxLTUoVZClEY4rGe8fIDZA55caZC2WARoMWdTX';
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
