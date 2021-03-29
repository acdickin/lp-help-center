
import { render, waitFor } from '@testing-library/react'
import ContentHeader from '../components/content-header'


test("should show the title from props", async () => {
  const testData = {
    title: { value: 'test_title' },
    why_the_product_is_useful: { value: '<div>Product is useful test</div>' },
    post_tags: { value: [{ name: 'test-tag' }, { name: 'test-tag2' }] },
  }
  const { getByTestId } = render(<ContentHeader {...testData} />)
  expect(getByTestId('title')).toHaveTextContent(testData.title.value)
})

test("should loop though post tags value and show them", async () => {
  const testData = {
    title: { value: 'test_title' },
    why_the_product_is_useful: { value: '<div>Product is useful test</div>' },
    post_tags: { value: [{ name: 'test-tag' }, { name: 'test-tag2' }] },
  }
  const { getByTestId } = render(<ContentHeader {...testData} />)
  await waitFor(() => getByTestId('test-tag'))
  expect(getByTestId("test-tag")).toHaveTextContent(testData.post_tags.value[0].name)
})
test("should return nothing if there are not tags", async () => {
  const testData = {
    title: { value: 'test_title' },
    why_the_product_is_useful: { value: '<div>Product is useful test</div>' },
    post_tags: { value: null },
  }
  const { getByTestId } = render(<ContentHeader {...testData} />)
  await waitFor(() => getByTestId('tags'))
  expect(getByTestId('tags').child).toBe(undefined)
  // expect(getByTestId("tags")).toHaveTextContent(testData.post_tags.value[0].name)
})