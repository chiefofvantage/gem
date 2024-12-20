import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>

                <title>
                    {headTitle ? headTitle : "Grey Matter Solutions"}
                </title>
            </Head>
        </>
    )
}

export default PageHead