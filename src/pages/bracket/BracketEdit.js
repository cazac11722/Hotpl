
import { ReactComponent as KeyArrowUp } from '../../assets/svg/keyArrowUp.svg';
import { ReactComponent as FactCheck } from '../../assets/svg/FactCheck.svg';
import { ReactComponent as Add } from '../../assets/svg/Add.svg';
import { useState } from 'react';



const BracketEdit = () => {

    return (
        <main className="w-screen h-screen">
            <div className="absolute left-5 top-3 hidden">
                <div className="w-64 shadow-lg rounded-md p-2">
                    <div className="flex items-center justify-between h-10">
                        <div className='flex items-center'><span className='text-xs mr-2'>로고</span> <KeyArrowUp className='w-4 rotate-180' /></div>
                        <FactCheck className='w-5' />
                    </div>
                    <div className="flex flex-wrap items-center  justify-between mb-6">
                        <div className='w-full flex items-center mb-1'><span className='text-sm font-black mr-2'>김도윤님</span> <KeyArrowUp className='w-4 rotate-180' /></div>
                        <div className='w-full flex items-center'>
                            <button type='button' className='text-xs bg-red-500 text-white p-1 rounded mr-2'>무료</button>
                            <button type='button' className='text-xs '>구독자</button>
                        </div>
                    </div>
                    <ul >
                        <li className='flex items-center justify-between mb-2 px-2 py-1 rounded cursor-pointer bg-red-300'><p className='text-xs font-bold'>Page1</p><Add className='w-4' /></li>
                        <li className='flex items-center justify-between mb-2 px-2 py-1 rounded cursor-pointer'><p className='text-xs font-bold'>Page1</p><Add className='w-4' /></li>
                        <li className='flex items-center justify-between mb-2 px-2 py-1 rounded cursor-pointer'><p className='text-xs font-bold'>Page1</p><Add className='w-4' /></li>
                    </ul>

                </div>
            </div>

        </main>
    );
}

export default BracketEdit;