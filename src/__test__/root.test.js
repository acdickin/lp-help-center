import { render } from '@testing-library/react'
import Root from '../components/root'

test("should show the root title", async () => {
  const { getByTestId } = render(<Root />)
  expect(getByTestId('root-title')).toHaveTextContent('Our new Help Center')
})