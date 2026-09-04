export default function Container({ as: Tag = "div", className = "", children }) {
  return (
    <Tag className={`w-full max-w-content mx-auto px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
