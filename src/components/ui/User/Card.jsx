import React, {useState} from 'react';
import {Avatar, Card, CardContent, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material';
import {AnimatePresence, motion} from 'framer-motion';

const UserCard = ({ title, filter, setFilter, profile }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
        setFilter(title);
    };

    return (
        <Card
            sx={{
                backgroundColor: filter === title ? 'rgba(55, 65, 81, 0.9)' : 'rgba(55, 65, 81, 0.8)',
                color: 'white',
                margin: 2,
                cursor: 'pointer',
                width: isExpanded ? '600px' : '300px',
                transition: 'width 0.5s ease',
            }}
            onClick={handleToggleExpand}
        >
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={isExpanded ? 3 : 12}>
                        <Avatar
                            src={profile.image}
                            alt={title}
                            sx={{ width: 56, height: 56, margin: '0 auto' }}
                        />
                        <Typography variant="h5" component="div" align="center" mt={2}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align="center" mt={1}>
                            {profile.description}
                        </Typography>
                    </Grid>
                    <AnimatePresence>
                        {isExpanded && (
                            <Grid item xs={12} sm={9}>
                                <motion.div
                                    initial={{ opacity: 0, height: "250px" }}
                                    animate={{ opacity: 1, height: '450px' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Typography variant="body2" mt={2}>
                                        {profile.fullDescription}
                                    </Typography>
                                    <List>
                                        <Typography variant="h6" mt={2}>Experience</Typography>
                                        {profile.experience.map((exp, idx) => (
                                            <ListItem key={idx}>
                                                <ListItemAvatar>
                                                    <Avatar src={exp.icon} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={exp.title}
                                                    secondary={`${exp.location} (${exp.duration})`}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                    <List>
                                        <Typography variant="h6" mt={2}>Certificates</Typography>
                                        {profile.certificates.map((cert, idx) => (
                                            <ListItem key={idx}>
                                                <ListItemAvatar>
                                                    <Avatar src={cert.icon} />
                                                </ListItemAvatar>
                                                <ListItemText primary={cert.title} />
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
