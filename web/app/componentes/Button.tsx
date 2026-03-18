export default function Button ({ text, onClick }: { text: string, onClick: () => void }) {
    return (
        <button onClick={onClick} className='bg-greenDark text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-greenDark/90 transition-colors duration-300'>
            {text}
        </button>
    )
};

