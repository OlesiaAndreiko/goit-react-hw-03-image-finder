import axios from 'axios';

const imagesApi = axios.create({
    baseURL: 'https://pixabay.com/api/',
})

export const fetchImages = async (options={}) => {
    const response = await  imagesApi.get('', {
        params: {
            key:'31672084-87e680c1be7fd52a9d7861da9',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
            ...options,

            // page,            
            // q: searchWord,
        },
    });
    return response.data;
}