import { navigate } from "../hooks/usePath";

// Internal link: a normal <a href> (works with right-click / new tab / SEO)
// that navigates without reloading the page on a plain left click.
export default function Link({ href, onClick, children, ...rest }) {
  const handle = (e) => {
    onClick?.(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    )
      return;
    e.preventDefault();
    navigate(href);
  };
  return (
    <a href={href} onClick={handle} {...rest}>
      {children}
    </a>
  );
}
