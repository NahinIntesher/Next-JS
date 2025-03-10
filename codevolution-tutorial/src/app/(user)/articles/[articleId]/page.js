import Link from "next/link";

export const generateMetadata = ({ params }) => {
  const { articleId } = params;
  return {
    title: `News Article #${articleId}`,
  };
};

export default async function NewsArticle({ params, searchParams }) {
  const { articleId } = params;
  const { lang = "en" } = searchParams;

  return (
    <div>
      <h1>News Article #{articleId}</h1>
      <p>Reading in: {lang.toUpperCase()}</p>

      <div className="language-options min-h-screen flex flex-col">
        <br />
        <h2>Choose a language:</h2>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Español</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>Français</Link>
      </div>
    </div>
  );
}
