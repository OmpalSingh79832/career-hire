export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-[90%] px-6 ${className}`}>{children}</div>
  );
}
