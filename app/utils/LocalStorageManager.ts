/** Provide utilities to manage local storage */
const KEY = "keyStarredPhrases"

/** Adds every phrase on the given list to the list of starred phrases */
export function AddStarredPhrases(phrases: string[]){
    //Retrieve the starred phrases
    const data = localStorage.getItem(KEY)
    
    // No data on local storage
    if(data === null){
        localStorage.setItem(KEY,JSON.stringify(phrases))
    }
    else{
        let allPhrases: string[] = JSON.parse(data) // Old phrases
        allPhrases = allPhrases.concat(phrases) // Old and new phrases
        localStorage.setItem(KEY,JSON.stringify(allPhrases))
    }
}
/** Returns a list of starred phrases from local storage. */
export function GetStarredPhrases(){
    const data = localStorage.getItem(KEY)
    let phrases: string[] = []
    if(data != null){  
        phrases = JSON.parse(data)
    }
    return phrases
}