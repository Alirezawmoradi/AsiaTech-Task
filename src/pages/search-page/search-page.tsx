import {Search} from "../../components/search";

export const SearchPage: React.FC = () => {

    return (
        <div className='flex flex-col gap-10 justify-center items-center text-xl h-full'>
            <div className='gap-5 justify-center items-center'>
                <img src='../../../public/images/logo.png' alt='Asiatech' className='w-full h-full'/>
            </div>
            <div className='relative w-10/12'>
                <Search/>
            </div>
        </div>
    );
};
