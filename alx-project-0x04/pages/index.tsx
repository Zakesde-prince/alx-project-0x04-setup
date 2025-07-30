import React from "react";
import { PageRouteProps } from "@/interface";

const HomePage: React.FC<PageRouteProps> = ({ pageRoute }) => {
  return (
    <div>
      <h1>Welcome to Splash App</h1>
      <p>Current page route: {pageRoute}</p>
    </div>
  );
};

// You can pass the pageRoute prop when rendering this component
// For Next.js, you might use getStaticProps or getServerSideProps to provide it,
// or just hardcode for now:

export default function Index() {
  return <HomePage pageRoute="/" />;
}

