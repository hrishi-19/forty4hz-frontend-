import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ErrPage() {
    const path = useParams()
    const messages = {
        '404': "Page Not found",
        '403': "Access Denied"
    }
    return (
        <div className='sm:p-5 p-2'>
            <Link to='/'>Back to Home</Link>
            <div className='text-center mx-auto mt-24 '>

                <p className='text-xl text-black'>
                    {
                        messages[path['*']]
                    }
                </p>

            </div>
        </div>
    )
}

export default ErrPage
