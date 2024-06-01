// src/components/UserCard.jsx
import React, { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

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
                width: isExpanded ? '100%' : '300px',
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
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
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
            <CardActions>
                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleToggleExpand}
                    endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    sx={{ backgroundColor: '#B573EE', color: 'white' }}
                >
                    {isExpanded ? 'Show Less' : 'Show More'}
                </Button>
            </CardActions>
        </Card>
    );
};

export default UserCard;
