import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    Tabs,
    Tab,
} from '@material-ui/core';

import { MainLayout } from '../layouts/MainLayout';
import { FollowButton } from '../components/FollowButton';

export default function Rating() {
    return (
        <MainLayout>
            <Paper className='pl-20 pt-20 pr-20 mb-20' elevation={0}>
                <Typography
                    variant='h5'
                    style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 6 }}
                >
                    Rating of communities and blogs
                </Typography>
                <Typography style={{ fontSize: 15 }}>
                    Top ten authors and commentators, as well as administrators of the first ten
                    communities from the rating at the end of the month receive a Plus-account for a
                    month for free.
                </Typography>
                <Tabs className='mt-10' value={0} indicatorColor='primary' textColor='primary'>
                    <Tab label='August' />
                    <Tab label='For 3 months' />
                    <Tab label='For all the time' />
                </Tabs>
            </Paper>

            <Paper elevation={0}>
                <Table aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell align='right'>Rating</TableCell>
                            <TableCell align='right'></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component='th' scope='row'>
                                <span className='mr-15'>1</span>Vasya Pupkin
                            </TableCell>
                            <TableCell align='right'>540</TableCell>
                            <TableCell align='right'>
                                <FollowButton />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </MainLayout>
    );
}
