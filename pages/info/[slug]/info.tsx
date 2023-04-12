import { useRouter } from "next/router";

const Info = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Info</h1>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default Info;