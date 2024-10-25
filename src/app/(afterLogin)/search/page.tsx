import BackButton from "@/app/components/BackButton/BackButton";
import ExTab from "./_components/ExTab/ExTab";
import ExTabProvider from "./_components/ExTab/ExTabProvider";
import MainSearch from "@/app/components/MainSearch/MainSearch";

type Props = {
  searchParams: {
    q: string;
    f?: string;
    pf?: string;
  };
};

export default function page({ searchParams }: Props) {
  console.log(searchParams.q);

  return (
    <div>
      <BackButton />
      검색 결과 페이지
      <ExTabProvider>
        <ExTab />
        <MainSearch q={searchParams.q} />
      </ExTabProvider>
    </div>
  );
}
