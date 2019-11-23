const KEY = '?client_id=7be6b9efb134a92e7d923f6c9f43d783bfd52e40c4994dc552561386e9733c56';
const URL = 'https://api.unsplash.com/photos/'

const fetchImages = async page  => {
    const res = await fetch(`${URL}${KEY}&per_page=3&page=${page}`)
    const data = await res.json()
    if (res.status >= 400 ){
        throw new Error(data.errors)
    }
    return data
}

export {fetchImages}