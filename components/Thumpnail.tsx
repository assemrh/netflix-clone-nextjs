import Image from 'next/image'
import React from 'react'
import { Movie } from '../typings'
interface Props {
    movie: Movie
}
function Thumpnail({ movie }: Props) {
    return (
        <div className='relative h-28 min-w-[180px] cursor-pointer duration-200 transition ease-out md:h-36 md:min-'>
            <Image
                className='rounded-sm object-cover md:rounded'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
                layout='fill' />
        </div>
    )
}

export default Thumpnail
