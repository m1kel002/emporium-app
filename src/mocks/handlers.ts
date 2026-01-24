import { http, HttpResponse } from 'msw';
import mockProductList  from '../mocks/data/product-list.json'

export const handlers = [
    http.get('http://localhost:8000/api/product', ({ request }) => {
        const url = new URL(request.url);
        console.log('Mocked GET request to /api/product. query params:', url.searchParams.toString());
        console.log(mockProductList)
        return HttpResponse.json(mockProductList);
    })
]