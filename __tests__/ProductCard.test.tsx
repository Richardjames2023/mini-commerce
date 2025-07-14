import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '@/components/productCard';
import { Product } from '@/lib/products';

// Create a mock function
const mockAddToCart = jest.fn();

// Correctly mock the useCartStore hook
jest.mock('@/lib/store', () => ({
  useCartStore: () => ({
    addToCart: mockAddToCart, // returns a function, as expected
  }),
}));

// Mock the toast function if used (optional)
jest.mock('react-hot-toast', () => ({
  success: jest.fn(),
}));

const mockProduct: Product = {
  id: 1,
  name: 'Test Product',
  description: 'Great product',
  price: 99.99,
  image: '/test.jpg',
  category: 'Test Category',
};

describe('ProductCard', () => {
  beforeEach(() => {
    mockAddToCart.mockClear();
  });

  it('renders product info and adds to cart on click', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/\$99.99/)).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
