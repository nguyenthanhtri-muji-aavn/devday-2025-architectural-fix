export async function GET() {
  try {
    const response = await fetch(
      'https://devday-aavn-d5284e914439.herokuapp.com/api/products',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();

    return Response.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return Response.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
