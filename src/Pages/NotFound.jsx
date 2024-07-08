import * as React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";

export function NotFound() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "91vh",
                padding: 3,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
            }}
        >
            <Typography variant="h5" gutterBottom color="primary">
                404
            </Typography>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
                Page not found
            </Typography>
            <Typography variant="h6" paragraph>
                It seems this page does not exist
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
                <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/"
                    sx={{ mt: 2 }}
                >
                    Go to Homepage
                </Button>
                <Button
                    variant="text"
                    color="primary"
                    component={Link}
                    to="/contact-us"
                    sx={{
                        mt: 2,
                        transition: "transform 0.2s",
                        "&:hover .arrow-icon": {
                            transition: "transform 0.2s",
                            transform: "translate(3px, 0px)",
                        },
                    }}
                >
                    Contact Support
                    <ArrowForward className="arrow-icon" />
                </Button>
            </Box>
        </Box>
    );
}
