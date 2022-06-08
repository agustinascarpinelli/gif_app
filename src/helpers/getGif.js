

export const getGif =  async(category) => {
const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=BLEB4R9MYZX5YBQScmm0WPzhqZwhtsQH`
   
    const res=await fetch(url)
    const {data}=await res.json()
    const gifs= data.map(gif=>{
        return {
            id:gif.id,
            title:gif.title,
            url:gif.images.downsized_medium.url
        }
    }

        )


      return (gifs)
      
   
}
