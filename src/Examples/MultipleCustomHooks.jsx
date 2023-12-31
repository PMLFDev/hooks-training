import { useCounter,useFetch } from '../Hooks2'
import { LoadingQuote,Quote } from './'

export const MultipleCustomHooks = () => {
  const {counter, increment} = useCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const {author, quote} = !!data && data[0]
 

  return (
    <>
    <h1>BreakingBad Quotes</h1>

      {isLoading 
        ? <LoadingQuote />
        : <Quote author={author} quote={quote} />
  }

    <button 
    onClick={() => increment()} 
    className='btn btn-primary mt-2'
    disabled={isLoading}>Next</button>
    </>
  )
}
