import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Stack
} from '@mui/material';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#1e1e2f' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">PopMeet</Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" onClick={() => navigate("/aljk23")}>
              Join as Guest
            </Button>
            <Button color="inherit" onClick={() => navigate("/auth")}>
              Register
            </Button>
            <Button color="inherit" onClick={() => navigate("/auth")}>
              Login
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Main Landing Section */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 10 }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom>
              <span style={{ color: '#FF9839' }}>Connect</span> with your loved ones
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
              Cover the distance with Apna Video Call
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => navigate("/auth")}
            >
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
            <img
              src="/mobile.png"
              alt="Mobile Call"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
