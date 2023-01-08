import Layout from '../../components/layout';
import { getBlogsData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
    return (
        <Layout>
          <Head>
            <title>{postData.Title}</title>
          </Head>
          <article>
            <h1 className={utilStyles.headingXl}>{postData.Title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.BlogDate} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.Content }} />
          </article>
      </Layout>
    );
}

export async function getServerSideProps({ params }) {
  const postData = await getBlogsData(params.id);
  return {
    props: {
      postData,
    },
  };
}
