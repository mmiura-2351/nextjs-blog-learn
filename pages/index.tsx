import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData, PostData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

interface HomeProps {
  allPostsData: PostData[];
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
          <li className={utilStyles.listItem}>
            <Link href={`/apiForms`}>API Forms</Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/registered`}>Registered Users</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

const siteTitle = "Next.js Sample Website";
