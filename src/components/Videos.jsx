import React from 'react';
import { Stack, Box } from '@mui/material';
import {ChannelCard, VideoCard} from './index';

const Videos = ({videos, direction}) =>{
    if(!videos?.length) return 'Loading...';

    return ( 
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={2}>
            {videos.map((item, index) => (
                <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos

