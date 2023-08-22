import { useCounter,useFetch } from '../Hooks2'


export const MultipleCustomHooks = () => {
  const {counter, increment} = useCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const {author, quote} = !!data && data[0]
 

  return (
    <>
    <h1>BreakingBad Quotes</h1>

      {isLoading ?(
        <div className='alert alert-info text-center'>Loading...</div>
        )
        :(

      <blockquote className='blockquote text-end'>

        <p className='mb-01'>{quote} </p>
        <footer className='blockquote-footer'> {author}</footer>

      </blockquote> 
      )}

    <button 
    onClick={() => increment()} 
    className='btn btn-primary mt-2'
    disabled={isLoading}>Next</button>
    </>
  )
}