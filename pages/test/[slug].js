import dynamic from "next/dynamic";

const Message = dynamic(() => import("../../components/DynamicMessage"));

function TestPage({slug}) {
    return <div>
        <h2>You are on {slug}</h2>
        <h4>Try these links</h4>

        <Message/>

        <ul>
            <li><a href="/test/working">I'm healthy</a></li>
            <li><a href="/test/broken">I'm broken</a></li>
        </ul>
    </div>;
}

export default TestPage;

export async function getStaticProps(context) {
    let {slug} = context.params;

    return {
        props: {
            slug: slug,
        },
    };
}


export async function getStaticPaths() {
    return {
        paths: [
            {params: {slug: "working"}},
        ],
        fallback: true,
    };
}
