/**
 * @param {HTMLElement} rootEl The parent el acting as root
 * @param {function} filter el filter cb, which gets called w/ element to filter
 *
 * Usage example:
 * ```js
elWalker(menuEl, (el) => el.getAttribute('role') == 'menuitem' && !el.disabled)
 * ```
 */
export function elWalker(rootEl: HTMLElement, filter: Function): TreeWalker;
