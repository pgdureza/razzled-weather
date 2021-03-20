import React from 'react'

import { render, screen } from '@testing-library/react'

import Loader from './Loader'

import '@testing-library/jest-dom'

describe('Loader', () => {
  it('displays loading text', () => {
    render(<Loader />)
    expect(screen.queryByText('LOADING...')).toBeInTheDocument()
  })
})
