import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <p
      style={{
        color: 'white',
        fontFamily: 'revert-layer',
        display: 'flex',
        fontWeight: '23px',
        fontSize: '20px',
      }}
    >
      Implemented Frontend Development Skills In My YouTubeClone Project
    </p>
    <SearchBar />
  </Stack>
)
export default Navbar
