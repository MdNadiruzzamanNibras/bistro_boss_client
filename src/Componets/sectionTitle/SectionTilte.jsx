

// eslint-disable-next-line react/prop-types
const SectionTilte = ({subheading, heading}) => {
    return (
        <div className="w-4/12 mx-auto text-center">
            <p className="text-lg text-yellow-600 mb-5">{subheading}</p>
            <h4 className="border-y-2 py-4 border-gray-300 text-3xl font-semibold">{ heading}</h4>
        </div>
    );
};

export default SectionTilte;