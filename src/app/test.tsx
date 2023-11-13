import type { InferGetServerSidePropsType, GetServerSideProps} from "next";
type boole = {
    xStatus: boolean;
}

async function getServerSideProps(): Promise<boole["xStatus"]>{
    const res = await fetch('https://google.com');
    if(res.status === 200){
        return true;
    }
    else
        return false;
}
export default function Page({
    boole,}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <section>
            <h1>{boole}</h1>
        </section>
    );
}
