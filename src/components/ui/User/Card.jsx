import { useState } from 'react';
import { Avatar, Button, Card, CardContent, CircularProgress, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography, Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import JavascriptIcon from '@mui/icons-material/Javascript';
import DiamondIcon from '@mui/icons-material/Diamond';

const UserCard = ({ title, filter, setFilter, profile, backgroundColor, isApplicant }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
        setFilter(title);
    };

    const getColor = (percentage) => {
        if (percentage < 50) return 'error';
        if (percentage < 75) return 'warning';
        return 'success';
    };

    return (
        <Card
            sx={{
                backgroundColor: backgroundColor,
                color: 'white',
                borderRadius: "50px",
                margin: 2,
                cursor: 'pointer',
                padding: "20px",
                width: isExpanded ? '600px' : '300px',
                minHeight: '300px',
                transition: 'width 0.5s ease',
            }}
            onClick={handleToggleExpand}
        >
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={isExpanded ? 5 : 12} display="flex flex-col" alignItems="center">
                        <div className='flex justify-between'>
                            <Avatar
                                src={profile.image}
                                alt={title}
                                sx={{ width: 56, height: 56 }}
                            />
                            {isApplicant && (
                            <Box position="relative" display="inline-flex" >
                                <CircularProgress variant="determinate" value={profile.matchPercentage} color={getColor(profile.matchPercentage)} />
                                <Box
                                    top={0}
                                    left={0}
                                    bottom={0}
                                    right={0}
                                    position="absolute"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Typography variant="caption" component="div" color="textSecondary">
                                        {`${Math.round(profile.matchPercentage)}%`}
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                        
                        </div>
                        
                        <Typography variant="h5" component="div" mt={2}>
                            {title}
                        </Typography>
                        
                        {isExpanded
                            ? <Typography variant="body2" mt={1} style={{ fontSize: '0.875rem' }}>
                                {profile.fullDescription}
                              </Typography>
                            : <Typography variant="body1" className="truncate-three-lines" mt={2}>
                                {profile.description}
                              </Typography>
                        }
                        <div className="flex mt-4">
                            <GitHubIcon fontSize="large" className="mr-2" />
                            <JavascriptIcon fontSize="large" className="mr-2" />
                            <DiamondIcon fontSize="large" className="mr-2" />
                        </div>
                        {isApplicant && (
                        <Box mt={2} display="flex" justifyContent="center" width="100%">
                            <Button variant="contained" color="success" style={{ marginRight: '10px' }}>Accept</Button>
                            <Button variant="contained" color="error">Reject</Button>
                        </Box>
                    )}
                    </Grid>
                    <AnimatePresence>
                        {isExpanded && (
                            <Grid item xs={12} sm={7}>
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: '350px' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <List>
                                        <Typography variant="subtitle1" mt={0}>Experience</Typography>
                                        {profile.experience.map((exp, idx) => (
                                            <ListItem key={idx}>
                                                <ListItemAvatar>
                                                    <Avatar src={exp.icon} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={<Typography variant="body2" style={{ fontSize: '0.875rem' }}>{exp.title}</Typography>}
                                                    secondary={<Typography variant="caption" color="textSecondary">{`${exp.location} (${exp.duration})`}</Typography>}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                    <List>
                                        <Typography variant="subtitle1" mt={0}>Certificates</Typography>
                                        {profile.certificates.map((cert, idx) => (
                                            <ListItem key={idx}>
                                                <ListItemAvatar>
                                                    <Avatar src={cert.icon} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={<Typography variant="body2" style={{ fontSize: '0.875rem' }}>{cert.title}</Typography>}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </motion.div>
                            </Grid>
                        )}
                    </AnimatePresence>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default UserCard;
