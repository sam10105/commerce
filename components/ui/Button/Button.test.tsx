import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button Component', () => {
  it('displays content', () => {
    render(
      <Button
        type="button"
        className={
          'py-1 px-3 border border-secondary rounded-md shadow-sm hover:bg-primary-hover'
        }
      >
        Add to Cart
      </Button>
    )

    expect(
      screen.getByRole('button', { name: 'Add to Cart' })
    ).toBeInTheDocument()
  })
})
