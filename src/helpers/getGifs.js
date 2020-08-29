export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=2&q=${encodeURI(category)}&api_key=wQUlLL9jjvzDw7o54cdPtkRHU83MFIna`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    return data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
};