import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Principal Functionality Consultant</title>
          <meta
            property="og:title"
            content="test-page - Principal Functionality Consultant"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_q2imwf) => (
            <>
              <h1>{context_q2imwf?.Name}</h1>
            </>
          )}
          initialData={props.contextQ2imwfProp}
          persistDataDuringLoading={true}
          key={props?.contextQ2imwfProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextQ2imwfProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextQ2imwfProp: contextQ2imwfProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
