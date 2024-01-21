import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'
import Bomma from './Bomma'
import { fetchFromAPI } from '../utils/fetchFromAPI'
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [bomma, setBomma] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setBomma(data.items)
    )
  }, [selectedCategory])
  const var = "var"
  return (
    <Stack sx={{ flexDirection: { sx: 'Column', md: 'Row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          paddingX: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#3d3d3d' }}
        >
          copyright 2024 Chandra Sekhar
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontweight="bold"
          mb={2}
          sx={{ color: 'blue' }}
        >
          {selectedCategory} <span style={{ color: 'red' }}>Videos</span>
        </Typography>
        <Bomma bomma={bomma} />
      </Box>
    </Stack>
  )
}
export default Feed
