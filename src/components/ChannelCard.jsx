import { Typography, Box, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box
        sx = {{
            boxShadow: 'none',
            borderRadius:'20px',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            width: {xs: '356px', md: '320px' },
            height: '326px',
            margin: 'auto',
            marginTop: marginTop
        }}
    >
        <Link to={`channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:'flex', flexDirection:'column', textAlign:'center', justifyContent:'center', color:'#fff'}}>
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{borderRadius:'50%', width: '180px', height:'180px'}}
                />
                <Typography variant="h6">
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize:12, color: 'gray', ml:'5px'}} />
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard;
