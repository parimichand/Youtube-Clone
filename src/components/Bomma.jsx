import { Stack, Box } from '@mui/material'
import { VideoCard } from './'
import { ChannelCard } from './'
const Bomma = ({ bomma, direction }) => {
  if (!bomma?.length) return 'Loading..'
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {bomma.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Bomma
