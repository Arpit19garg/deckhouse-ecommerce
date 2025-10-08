// Serverless function for product API
export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    // Sample products data
    const products = [
      { id: 1, name: 'Sample Product 1', price: 29.99 },
      { id: 2, name: 'Sample Product 2', price: 49.99 },
      { id: 3, name: 'Sample Product 3', price: 19.99 },
    ];
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
