import { useRouter } from "next/router";

export default function Page() {
  const { q } = useRouter().query;
  return <div>검색결과 : {q}</div>;
}
