import KeyFeaturesList from "./keyfeatureslist"

const KeyFeatures = () => {
    return (
        <section className="flex flex-col items-center justify-center mx-6 md:mx-12 lg:mx-24 py-16">
            <div className="flex">
                <div className="flex flex-col items-center justify-center text-white mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Key Features</h1>
                    <p className="text-lg text-zinc-400 font-medium my-4 max-w-xl">
                        Explore the powerful features that make our platform unique and effective.
                    </p>
                    <KeyFeaturesList />
                </div>
            </div>
        </section>
    )
}

export default KeyFeatures
