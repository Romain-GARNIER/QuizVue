export async function GetSettings() : Promise<any>{
    const response = await fetch('/settings.json') 
    if (response.ok) {
        return response.json()
    }
    throw new Error('An error occured when trying to get json file')
}