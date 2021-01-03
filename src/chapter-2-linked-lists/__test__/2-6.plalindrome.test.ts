import buildLinkedList from '../../util/buildLinkedList'
import { isPlalindrome } from '../2-6.plalindrome'

test('能正确的判断是否是回文链表', () => {
  const head1 = buildLinkedList([1, 2, 1])
  const head2 = buildLinkedList([1])
  const head3 = buildLinkedList([1, 1, 1])
  const head4 = buildLinkedList([1, 2, 2])
  const head5 = buildLinkedList([1, 2])
  const head6 = buildLinkedList([1, 2, 2, 1])
  const head7 = buildLinkedList([1, 2, 3, 1])

  expect(isPlalindrome(head1)).toBeTruthy()
  expect(isPlalindrome(head2)).toBeTruthy()
  expect(isPlalindrome(head3)).toBeTruthy()
  expect(isPlalindrome(head4)).toBeFalsy()
  expect(isPlalindrome(head5)).toBeFalsy()
  expect(isPlalindrome(head6)).toBeTruthy()
  expect(isPlalindrome(head7)).toBeFalsy()
})
