import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  TextField, Box, Grid, Stack, Container
} from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState('');
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      {/* Top Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#1e1e2f' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Apna Video Call</Typography>

          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton onClick={() => navigate("/history")} color="inherit">
              <RestoreIcon />
            </IconButton>
            <Typography>History</Typography>
            <Button
              color="inherit"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/auth");
              }}
            >
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Panel */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom>
                Providing Quality Video Call Just Like Quality Education
              </Typography>
              <Stack direction="row" spacing={2} mt={2}>
                <TextField
                  label="Meeting Code"
                  variant="outlined"
                  value={meetingCode}
                  onChange={(e) => setMeetingCode(e.target.value)}
                  fullWidth
                />
                <Button variant="contained" onClick={handleJoinVideoCall}>
                  Join
                </Button>
              </Stack>
            </Grid>

            {/* Right Panel */}
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <img
                src="/logo3.png"
                alt="Video Call"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default withAuth(HomeComponent);
