// 6. Get cart total - GET /api/cart/total
export async function GET(request: Request) {
  try {
    const sessionId = request.headers.get('X-Session-Id');

    if (!sessionId) {
      return Response.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const response = await fetch(
      'https://devday-aavn-d5284e914439.herokuapp.com/api/cart/total',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-Id': sessionId,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch cart total');
    }

    const data = await response.json();

    return Response.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Session-Id',
      },
    });
  } catch (error) {
    console.error('Error fetching cart total:', error);
    return Response.json(
      { error: 'Failed to fetch cart total' },
      { status: 500 }
    );
  }
}