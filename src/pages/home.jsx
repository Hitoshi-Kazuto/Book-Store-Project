import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/spinner.jsx';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksCard from '../components/home/booksCard.jsx'
import BookTable from '../components/home/booksTable.jsx';


const home = props => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showState, setShowState] = useState('table');
    const [searchBook, setSearch] = useState('');
    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then((response) => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8 head'>Books List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            <div className='flex justify-center items-center gap-x-4 my-4'>
                <button
                    className='bg-sky-200 hover:bg-sky-400 px-4 py-1 rounded'
                    onClick={() => setShowState('table')}
                >
                    Table
                </button>
                <button
                    className='bg-sky-200 hover:bg-sky-400 px-4 py-1 rounded'
                    onClick={() => setShowState('card')}
                >
                    Card
                </button>
            </div>
            <div>
                <input 
                    type='text' 
                    className='border border-gray-500 rounded px-4 py-2 my-6  w-full' 
                    placeholder='Book Name' 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {/* {books = books.filter((item) => {
                return searchBook.toLowerCase() === '' ? books : item.title.toLowerCase().includes(searchBook);
            })} */}
            {loading ? (
                <Spinner />
            ) : showState === 'table' ?
            (<BookTable books={books.filter((item) => {
                return searchBook.toLowerCase() === '' ? books : 
                    (item.title.toLowerCase().includes(searchBook));
            })} />) 
            : 
            (<BooksCard books={books.filter((item) => {
                return searchBook.toLowerCase() === '' ? books : item.title.toLowerCase().includes(searchBook);
            })}/>)
            }
        </div>
    )
}

export default home;