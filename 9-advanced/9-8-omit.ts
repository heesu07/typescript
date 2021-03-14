{
  type Video ={
    id: string;
    title: string;
    url: string;
    data: string;
  };
  function getVideo(id: string):Video{
    return{
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }
  type VideoMetadata = Omit<Video, 'id' | 'data'>; 
  function getVideoMetadata(id:string):VideoMetadata{
    return{
      title: "video",
      url: 'https://..'
    };
  }
  const video = getVideo('id');
  const meta = getVideoMetadata('id');
  console.log(video);
  console.log(meta);
  
  
}