import "../../globals.css";

export const metadata = {
  title: "Codevolution Tutorial - Next.js",
};

export default function ArticleLayout({ children }) {
  return (
    <>
      <div className="text-4xl">
        Welcome to article page (always will be in the /article/[articleId]
        route)
      </div>
      {children}
    </>
  );
}
