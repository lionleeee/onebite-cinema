import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { p } = router.query;
  return <div>{p} 영화 상세 페이지</div>;
}
