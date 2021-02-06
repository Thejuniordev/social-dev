import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const posts = [

]

function Feed() {
    return (
        <div>
            <PostCard></PostCard>
        </div>
    )
}

export default Feed;