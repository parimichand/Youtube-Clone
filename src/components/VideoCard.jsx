import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: '320px', xs: '100%' },
        boxShadow: 'none',
        borderRadius: '0',
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '1e1e1e', height: '160px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="black">
            {snippet?.title.slice(0, 55) || demoVideoTitle.slice(0, 55)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="gray"
            sx={{ fontsize: 90 }}
          >
            {snippet?.channelTitle.slice(0, 55) ||
              demoChannelTitle.slice(0, 55)}
            <CheckCircle
              sx={{ fontsize: 6, color: 'gray', ml: '4px', paddingUp: 6 }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}
export default VideoCard
