import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Bomma, ChannelCard } from './'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [bomma, setBomma] = useState([])
  const { id } = useParams()
  console.log(channelDetail, Bomma)
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    )
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setBomma(data?.items)
    )
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(70,252,140,0.5187324929971988) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box
        display="flex>"
        flexWrap="wrap"
        p="2"
        style={{ marginLeft: '130px', alignContent: 'center' }}
      >
        <Box sx={{ marginLeft: '200px', alignContent: 'center' }} />
        <Bomma bomma={bomma} />
      </Box>
    </Box>
  )
}
export default ChannelDetail
