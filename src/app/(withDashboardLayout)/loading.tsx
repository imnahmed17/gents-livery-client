const DLoadingPage = () => {
    return (
        <div className="flex justify-center items-center w-full h-[calc(100vh-92px)]">
            <p className='text-7xl font-thin'>L</p>
            <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-gray-400'></div>
            <p className='text-7xl font-thin'>ading....</p>
        </div>
    );
};

export default DLoadingPage;