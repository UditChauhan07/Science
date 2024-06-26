import Head from 'next/head';

function PageHead({ content }) {
    return (
        <Head>
            <meta charset="utf-8"/>
            <link rel="icon" href="/icon-bf.png"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>{content?.title}</title>
            <meta name="description" content={content?.description}/>
        </Head>
    );
}

export default PageHead;