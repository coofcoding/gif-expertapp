const api_key = 'PHqTmq8KtxdZn8mKydPE5fw4Ucq3V9RH';

const gifs = (data) => {
    return (
        data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }))
    )
};

export const getGifs = async (category) => {

    const random_offset = Math.floor((Math.random() * 4999) + 1);

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=21&offset=${random_offset}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = (data.length == 0) ? await getGifs(category) : gifs(data);

    return gif;
};

