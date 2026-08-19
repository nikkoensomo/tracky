import useDocumentTitle from "../hooks/useDocumentTitle";

const HelpPage = () => {
    useDocumentTitle('Help - Tracky');

    return (
        <>
            <main className="flex flex-col gap-4">
                <section>
                    <span>This page is under development.</span>
                </section>
            </main>
        </>
    )
}

export default HelpPage;