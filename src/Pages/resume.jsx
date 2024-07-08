import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export function Resume() {
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    return (
        <Box
            sx={{
                background:
                    "radial-gradient(ellipse at bottom, #141923, #090a0f 100%)",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                padding: isSmallScreen ? "10px" : "50px",
            }}
        >
            WAmp
        </Box>
    );
}
