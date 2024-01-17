import { useEffect } from 'react';
import axios from 'axios';

// type Video = {

// }

export const VideoCard = (): JSX.Element => {

  useEffect(() => {
    const getVideos = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube138.p.rapidapi.com/channel/videos/',
        params: {
          id: 'UC1gKBgknwlQagEnq4Q-UnCg',
          filter: 'videos_latest',
          hl: 'en',
          gl: 'US'
        },
        headers: {
          'X-RapidAPI-Key': '79549650c5msh124b1a59b60adcdp15c721jsn476c40792292',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }  
    }
  
    getVideos()
  }, [])
  
  return (
    <article className="flex h-44 w-80 justify-center bg-gray-700 rounded-lg mx-auto">
      <span className="bg-white w-20">
        <a 
          className=""
          href="https://www.youtube.com/watch?v=x7tnCF3shYU">
          <img className="w-10" src="" alt="" />
        </a>
      </span>
    </article>
  )
}