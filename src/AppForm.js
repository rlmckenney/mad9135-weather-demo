import React from 'react'

function AppForm ({ searchTerm, setSearchTerm }) {
  const searchRef = React.useRef()

  function handleSubmit (event) {
    event.preventDefault()
    setSearchTerm(searchRef.current.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' defaultValue={searchTerm} ref={searchRef} />
      <button className='button' type='submit'>
        Get Forecast
      </button>
    </form>
  )
}

export default AppForm
