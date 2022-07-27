import React from 'react';

const EventItem = ({item}) =>{
    return(
        <div className='content'>
            <div className='content-inner'>
                <div className='content-front'>
                    <img src={item.thumbnail.path + '/portrait_xlarge.jpg'} alt='' />
                </div>
                <div className='content-back'>
                    <h1>{item.title}</h1>
                    <ul>
                        <li>
                            <strong>Title:</strong> {item.title}
                        </li>
                        <li>
                            <strong>Publication Date:</strong> {item.start}
                        </li>
                        <li>
                            <strong>Description:</strong> {item.description}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EventItem