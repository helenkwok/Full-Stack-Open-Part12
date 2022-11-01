import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
	const todo =
	{
		_id: '6356239580c26f1cdd8b3526',
		text: 'Fix the code',
		done: false
	}

	render(<Todo todo={todo} onClickDelete={() => {}} onClickComplete={() => {}} />)

	const element = screen.getByText('Fix the code')

	expect(element).toBeDefined()
})