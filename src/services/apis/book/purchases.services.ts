import { PurchaseAPIResponse } from '@app-types/Purchase';
import config from './config';

const { BASE_BOOKS_API_URL } = config;

async function getPurchases(): Promise<PurchaseAPIResponse.Purchase[]> {
  try {
    const response = await fetch(`${BASE_BOOKS_API_URL}/purchases`);
    const purchases = await response.json();
    return purchases;
  } catch (error) {
    throw error;
  }
}

export { getPurchases };
