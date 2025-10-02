import React, { useState } from 'react'

const NewsList = () => {

    const [search , setSearch] = useState<string>('');
    const [category , setCategory] = useState<string>('all');

  return (
    <div>News List</div>
  )
}

export default NewsList