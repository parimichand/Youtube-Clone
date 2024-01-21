import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Bomma from './Bomma'
import { useParams } from 'react-router-dom'
const SearchFeed = () => {
  const [bomma, setBomma] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()
  const { searchTerm } = useParams()
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setBomma(data.items)
    )
  }, [searchTerm])

  return (
    // <Stack sx={{ flexDirection: { sx: 'Column', md: 'Row' } }}>
    //   <Box
    //     sx={{
    //       height: { sx: 'auto', md: '92vh' },
    //       borderRight: '1px solid #3d3d3d',
    //       paddingX: { sx: 0, md: 2 },
    //     }}
    //   >
    //     <SideBar
    //       selectedCategory={selectedCategory}
    //       setSelectedCategory={setSelectedCategory}
    //     />
    //     <Typography
    //       className="copyright"
    //       variant="body2"
    //       sx={{ mt: 1.5, color: '#3d3d3d' }}
    //     >
    //       copyright 2024 Chandra Sekhar
    //     </Typography>
    //   </Box>

    //   <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
    //     <Typography
    //       variant="h4"
    //       fontweight="bold"
    //       mb={2}
    //       sx={{ color: 'blue' }}
    //     >
    //       {selectedCategory} <span style={{ color: 'red' }}>Videos</span>
    //     </Typography>
    //     <Bomma bomma={bomma} />
    //   </Box>

    <Box
      p={2}
      sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2,
        marginLeft: '80px',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" fontweight="bold" mb={2} sx={{ color: 'blue' }}>
        Search Results for : <span style={{ color: 'red' }}>{searchTerm}</span>
        Videos
      </Typography>
      <Bomma bomma={bomma} />
    </Box>
    // </Stack>
  )
}
export default SearchFeed
