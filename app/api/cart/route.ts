// 1. Get cart - GET /api/cart
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
      'https://devday-aavn-d5284e914439.herokuapp.com/api/cart',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-Id': sessionId,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch cart');
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
    console.error('Error fetching cart:', error);
    return Response.json(
      { error: 'Failed to fetch cart' },
      { status: 500 }
    );
  }
}

// 2. Add item to cart - POST /api/cart
export async function POST(request: Request) {
  try {
    const sessionId = request.headers.get('X-Session-Id');
    const body = await request.json();

    if (!sessionId) {
      return Response.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const response = await fetch(
      'https://devday-aavn-d5284e914439.herokuapp.com/api/cart',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-Id': sessionId,
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to add item to cart');
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
    console.error('Error adding item to cart:', error);
    return Response.json(
      { error: 'Failed to add item to cart' },
      { status: 500 }
    );
  }
}

// 5. Clear cart - DELETE /api/cart
export async function DELETE(request: Request) {
  try {
    const sessionId = request.headers.get('X-Session-Id');

    if (!sessionId) {
      return Response.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const response = await fetch(
      'https://devday-aavn-d5284e914439.herokuapp.com/api/cart',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-Id': sessionId,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to clear cart');
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
    console.error('Error clearing cart:', error);
    return Response.json(
      { error: 'Failed to clear cart' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Session-Id',
    },
  });
}