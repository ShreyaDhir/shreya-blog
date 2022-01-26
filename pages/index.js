import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m <b>Shreya</b>. I’m a junior at <b>KIIT, Bhubaneshwar</b> and a <b>ReactJS</b> and <b>React Native</b> developer. You can contact me on <a href="https://twitter.com/ShreyaDhir">Twitter</a>, <a href="https://github.com/ShreyaDhir">Github</a> and <a href="https://www.linkedin.com/in/shreya-dhir/">LinkedIn</a>.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link> 
                <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
            </li>
            
          ))}
        </ul>
      </section>
    </Layout>
  )
}
