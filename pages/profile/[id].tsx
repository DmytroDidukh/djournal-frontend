import Link from 'next/link';
import { Paper, Avatar, Typography, Button, Tabs, Tab } from '@material-ui/core';
import {
    SettingsOutlined as SettingsIcon,
    TextsmsOutlined as MessageIcon,
} from '@material-ui/icons';

// COMPONENTS
import { Post } from 'components/Post';
import { MainLayout } from 'layouts/MainLayout';
// UTILS & SERVICES
import { useAppSelector } from 'store/hooks';
import { selectUser } from 'store/slices/user';

const Profile = () => {
    const user = useAppSelector(selectUser);

    return (
        <MainLayout contentFullWidth hideComments>
            <Paper className='pl-20 pr-20 pt-20 mb-30' elevation={0}>
                <div className='d-flex justify-between'>
                    <div>
                        <Avatar
                            style={{ width: 120, height: 120, borderRadius: 6 }}
                            /* eslint-disable-next-line max-len */
                            src='https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/'
                        />
                        <Typography style={{ fontWeight: 'bold' }} className='mt-10' variant='h4'>
                            {user ? user.fullName : 'Bob'}
                        </Typography>
                    </div>
                    <div>
                        <Link href='/profile/settings'>
                            <Button
                                style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                                variant='contained'
                            >
                                <SettingsIcon />
                            </Button>
                        </Link>
                        <Button style={{ height: 42 }} variant='contained' color='primary'>
                            <MessageIcon className='mr-10' />
                            Write
                        </Button>
                    </div>
                </div>
                <div className='d-flex mb-10 mt-10'>
                    <Typography style={{ fontWeight: 'bold', color: '#35AB66' }} className='mr-15'>
                        +208
                    </Typography>
                    <Typography>2 followers</Typography>
                </div>
                <Typography>On project from Sep 15, 2016</Typography>

                <Tabs className='mt-20' value={0} indicatorColor='primary' textColor='primary'>
                    <Tab label='Articles' />
                    <Tab label='Comments' />
                    <Tab label='Bookmarks' />
                </Tabs>
            </Paper>
            <div className='d-flex align-start'>
                <div className='mr-20 flex'>
                    <Post />
                </div>
                <Paper style={{ width: 300 }} className='p-20 mb-20' elevation={0}>
                    <b>Followers</b>
                    <div className='d-flex mt-15'>
                        <Avatar
                            className='mr-10'
                            /* eslint-disable-next-line max-len */
                            src='https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/'
                        />
                        <Avatar
                            className='mr-10'
                            /* eslint-disable-next-line max-len */
                            src='https://leonardo.osnova.io/2d20257c-fec5-4b3e-7f60-055c86f24a4d/-/scale_crop/108x108/-/format/webp/'
                        />
                    </div>
                </Paper>
            </div>
        </MainLayout>
    );
};

export default Profile;
