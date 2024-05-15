/** Response format from zenquotes.io */
interface Quote{
    q: string,
    a: string,
    h: string
}
/** Retrieves 10 random phrases from zenquotes.io */
export default async function FetchPhrases(){
    // Retrieve 50 random quotes
    const res: Quote[] = await fetch("https://zenquotes.io/api/quotes").then( (value: Response) => value.json())
    // Retrive the quotes as string
    const quotes: string[] = res.map((quote: Quote) => quote.q )
    // Return the first 10
    return quotes.slice(0,10);
}