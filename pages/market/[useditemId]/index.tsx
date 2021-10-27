import MarketDetail from "../../../src/components/unit/codecamp/market/detail/MarketDetail.container";
import QuestionList from "../../../src/components/unit/codecamp/marketComment/questionList/questionList.container";
import QuestionWrite from "../../../src/components/unit/codecamp/marketComment/questionWrite/questionWrite.container";
import Head from "next/head";
import { request, gql } from "graphql-request";
const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export default function BoardsDetailPage(props: any) {
  return (
    <>
      <Head>
        <meta property="og:name" content={props.fetchUseditem.name} />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
        <meta
          property="og:images"
          content={`https://storage.googleapis.com/${props.fetchUseditem.images[0]}`}
        />
      </Head>
      <MarketDetail />
      <QuestionWrite />
      <QuestionList />
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const result = await request(
    "https://backend02.codebootcamp.co.kr/graphql04",
    FETCH_USEDITEM,
    {
      useditemId: context.query.useditemId,
    }
  );

  return { props: { fetchUseditem: result.fetchUseditem } };
};
