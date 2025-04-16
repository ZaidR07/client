import axios from 'axios';

const response = await axios.get('https://api.unsplash.com/search/photos', {
  params: {
    client_id: '2oSZUWFpzQznWst8O2DB0_p4jF1sXOMZLFwMQHgsu3Q',
    query: 'gym',
    per_page: 10,
    page: 1,
  },
});

const photos = response.data.results;

console.log(photos);

const Slidesdata = photos.map((photo, index) => {
    const imgUrl = `${photo.urls.raw}?rand=${Math.random()}`;
    console.log('Image URL:', imgUrl);
    return {
        id: `00${index + 1}`,
        img: imgUrl,
    };
});


export default Slidesdata;
