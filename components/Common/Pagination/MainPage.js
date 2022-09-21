import { CaretLeft, CaretRight } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import MainStructure from './MainStructure'
import { useFetch } from './useFetch'
function MainPage() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 0) {
        prevPage = data.length - 1
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage(index)
  }

  return (
    <main>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => {
            return <MainStructure key={follower.id} {...follower} />
          })}
        </div>
        {!loading && (
          <div className='pagination-container flex items-center justify-end gap-4 mt-8'>
            <button className='rounded-full border text-sm w-6 lg:w-11 h-6 lg:h-11 text-[#151515] flex items-center justify-center cursor-pointer' onClick={prevPage}>
                <CaretLeft size={32} color="#151515" weight="thin" />
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`${index === page ? 'bg-[#151515] text-white border-0' : null} pagination-item rounded-full border text-sm w-6 lg:w-11 h-6 lg:h-11 text-[#151515] flex items-center justify-center cursor-pointer hover:bg-[#151515] hover:text-white hover:border-0`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='rounded-full border text-sm w-6 lg:w-11 h-6 lg:h-11 text-[#151515] flex items-center justify-center cursor-pointer' onClick={nextPage}>
            <CaretRight size={32} color="#151515" weight="thin" />
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default MainPage