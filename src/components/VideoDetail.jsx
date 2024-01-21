// import { useState, useEffect } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import ReactPlayer from 'react-player'
// import { Typography, Box, Stack } from '@mui/material'
// import { CheckCircle } from '@mui/icons-material'
// import { Bomma } from './'
// import { fetchFromAPI } from '../utils/fetchFromAPI'

// const VideoDetail = () => {
//   const [videoDetail, setVideoDetail] = useState(null)
//   const { id } = useParams()
//   useEffect(() => {
//     fetchFromAPI(`videos?part=snippet,statistics & id=${id}`).then((data) =>
//       setVideoDetail(data.items[0])
//     )
//   }, [id])
//   // const {
//   //   snippet: { title },
//   // } = videoDetail
//   return (
//     <Box>
//       <Stack direction={{ xs: 'column', md: 'row' }}>
//         <Box sx={{ width: '100px', position: 'sticky', top: '86px' }}>
//           <ReactPlayer
//             url={`https://www.youtube.com/watch?v=${id}`}
//             className="react-player"
//             controls
//           />
//           {/* <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
//             {title}
//           </Typography> */}
//           <Typography sx={{}}>{videoDetail.snippet.title}</Typography>
//         </Box>
//       </Stack>
//     </Box>
//   )
// }
// export default VideoDetail

// import { useState, useEffect } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import ReactPlayer from 'react-player'
// import { Typography, Box, Stack } from '@mui/material'
// import { CheckCircle } from '@mui/icons-material'
// import { Bomma } from './'
// import { fetchFromAPI } from '../utils/fetchFromAPI'

// const VideoDetail = () => {
//   const [videoDetail, setVideoDetail] = useState(null)
//   const { id } = useParams()

//   useEffect(() => {
//     fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
//       if (data.items && data.items.length > 0) {
//         setVideoDetail(data.items[0])
//       }
//     })
//   }, [id])

//   // Check if videoDetail is null or snippet is null before accessing properties
//   const title = videoDetail?.snippet?.title || 'Loading...'
//   const channelTitle = videoDetail?.snippet?.channelTitle || 'Loading...'
//   const channelId = videoDetail?.snippet?.channelId || 'Loading...'
//   const viewCount = videoDetail?.statistics?.viewCount || 'Loading'
//   const likeCount = videoDetail?.statistics?.likeCount || 'Loading'
//   return (
//     <Box flex={1}>
//       <Stack direction={{ xs: 'column', md: 'row' }}>
//         <Box sx={{ width: '100px', position: 'sticky', top: '86px' }}>
//           <ReactPlayer
//             url={`https://www.youtube.com/watch?v=${id}`}
//             className="react-player"
//             controls
//           />
//           <Typography
//             color="Black"
//             variant="h5"
//             fontWeight="bold"
//             p={2}
//             sx={{ justifyContent: 'left', width: '1044%', paddingLeft: '42px' }}
//           >
//             {title}
//           </Typography>

//           <Stack
//             direction="row"
//             justifyContent="space-between"
//             sx={{ color: 'pink' }}
//             py={2}
//             px={2}
//           >
//             <Box>
//             <Link
//               to={`/channel/${channelId}`}
//               sx={{
//                 justifyContent: 'left',
//                 width: '1044%',
//                 paddingLeft: '42px',
//               }}
//             >
//               <Typography
//                 variant={{ sm: 'subtitle1', md: 'h6' }}
//                 style={{ color: 'blue' }}
//                 sx={{
//                   justifyContent: 'left',
//                   width: '1044%',
//                   paddingLeft: '32px',
//                 }}
//               >
//                 {channelTitle}
//                 <CheckCircle sx={{ fontSize: '12px', ml: '5px' }} />
//               </Typography>
//             </Link>
//             <Stack>
//               <Typography variant="body1" sx={{ opacity: 0.7 }}>
//                 {viewCount}
//               </Typography>
//             </Stack>
//           </Stack>
//           </Box>
//         </Box>
//       </Stack>
//     </Box>
//   )
// }

// export default VideoDetail

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import { Bomma, Loader } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [bomma, setBomma] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setBomma(data.items)
    )
  }, [id])

  if (!videoDetail?.snippet) return <Loader />

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="Black" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: 'Black' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color="#Black"
                  sx={{ fontWeight: 'bold' }}
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: '12px', color: 'Blue', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  variant="body1"
                  sx={{ opacity: 1.7, color: 'blue' }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: 1.7, color: 'blue', marginRight: '2px' }}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={3}
          py={{ md: 2, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Bomma bomma={bomma} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
