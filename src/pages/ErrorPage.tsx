import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <h1 className="text-5xl">Error</h1>
      <p className="my-3">This page doesn't exist at the moment</p>
      <div>
        Go back to{" "}
        <span className="font-semibold underline">
          <Link to="/">Home</Link>
        </span>
      </div>
    </div>
  );
};

export default ErrorPage;
