import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Header } from "./components/Header"
import { VideoCard } from "./components/VideoCard"
import { Footer } from "./components/Footer"

interface Videos {
  id: string
  //
}

export type State = {
  videos: Videos[],
  error: unknown,
  isLoading: boolean
}

function App() {
  const [state, setState] = useState<State>({
    videos: [],
    error: null,
    isLoading: true
  })
  
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
        const response = await axios.request<{ items: Videos[] }>(options);
        setState({ 
          videos: response.data.items,
          error: null, 
          isLoading: false
        });
      } catch (error) {
        console.error('Error al obtener datos de YouTube', error);
        setState({
          videos: [],
          error,
          isLoading:false
        });
      }  
    }
  
    getVideos()
  }, [])


  return (
    <>
      <Header />
      <VideoCard 
        videos={ state.videos }
        error={ state.error }
        isLoading={state.isLoading}
      />
      <Footer />
    </>
  )
}

export default App
