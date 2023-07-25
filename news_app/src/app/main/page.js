import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import getNews from '../../../utils';


const Main = async () => {
    let Styles = {
        imgcss: "h-[160px] w-full rounded-md",
        flex: " md:grid grid-cols-3 sm:block"
    }
    let news = await getNews()

    return (
        <div className='w-[85%] m-auto bg-gray-100 p-6 shadow-2xl rounded-md'>
            <div className='shadow-2xl m-2 p-2  space-x-5 mt-5'>
                <h1 className='text-2xl font-bold text-center text-sky-500 p-2'>[ <span className='text-black'>Latest News</span> ]</h1>

            </div>
            <ul className=" md:grid grid-cols-3 sm:block"  >
                {
                    news.map((e) => {
                        return (
                            <div className='m-4 justify-center bg-white hover:shadow-2xl p-2 rounded-md w-[90%] h-auto cursor-pointer text-left' key={e.url}>
                                <img className="h-[160px] w-full rounded-md" src={e.urlToImage}
                                />
                                <li className='m-1 p-2 text-lg'>{e.title.slice(0, 80)}</li>
                                <Link href={e.url} target="_blank">
                                    <Button />
                                </Link>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Main;