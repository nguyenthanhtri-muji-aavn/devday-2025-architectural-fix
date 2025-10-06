// 3. Update item quantity - PUT /api/cart/[id]
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const sessionId = request.headers.get('X-Session-Id');
    const body = await request.json();
    const productId = params.id;

    if (!sessionId) {
      return Response.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://devday-aavn-d5284e914439.herokuapp.com/api/cart/${productId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-Id': sessionId,
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to update item quantity');
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
    console.error('Error updating item quantity:', error);
    return Response.json(
      { error: 'Failed to update item quantity' },
      { status: 500 }
    );
  }
}

// 4. Remove item - DELETE /api/cart/[id]
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const sessionId = request.headers.get('X-Session-Id');
    const productId = params.id;

    if (!sessionId) {
      return Response.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://devday-aavn-d5284e914439.herokuapp.com/api/cart/${productId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-Session-Id': sessionId,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to remove item from cart');
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
    console.error('Error removing item from cart:', error);
    return Response.json(
      { error: 'Failed to remove item from cart' },
      { status: 500 }
    );
  }
}