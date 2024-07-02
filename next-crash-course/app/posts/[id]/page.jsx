import React from 'react'

export default function SinglePostPage({params}) {
  const {id} = params;
  return (
    <div>
      <p>Post id is: {id}</p>
    </div>
  )
}
