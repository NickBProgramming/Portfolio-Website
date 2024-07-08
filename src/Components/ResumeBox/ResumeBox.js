import { Box, Chip, Typography, Link, Paper } from "@mui/material";
import { ArrowOutward, Link as LinkIcon } from "@mui/icons-material";
import { useState } from "react";

const ResumeBox = (props) => {
    const [currentTab, setCurrentTab] = useState("Projects");
    const {
        dateLabel,
        heading,
        company,
        subHeading,
        content,
        chips,
        links,
        dark,
    } = props;

    const color_primary = "";
    const color_sub_primary = "";
    const color_content = "";
    const color_chip_content = "";
    const color_chip_background = "";
    const color_link = "";

    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 1,
                justifyContent: "left",
                borderRadius: 2,
                transition: "transform 0.2s",
                backgroundColor: "transparent",
                color: "white",
                "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                },
                "&:hover .heading": {
                    color: "#D79E4F",
                },
                "&:hover .arrow-icon": {
                    transform: "translate(3px, -3px)",
                    color: "#D79E4F",
                },
            }}
        >
            <Box sx={{ minWidth: { xs: "100%", sm: "20%" } }}>
                <Typography
                    fontSize={12}
                    textAlign={{ xs: "left", sm: "left", color: "white" }}
                >
                    {dateLabel}
                </Typography>
            </Box>
            <Box sx={{ maxWidth: { xs: "100%", sm: "80%" } }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "4px",
                    }}
                >
                    <Typography
                        className="heading"
                        fontSize={16}
                        sx={{ fontWeight: "bold", color: "white" }}
                    >
                        {company ? (
                            <>
                                {heading} • {company}
                            </>
                        ) : (
                            heading
                        )}
                    </Typography>
                    <ArrowOutward
                        className="arrow-icon"
                        sx={{
                            fontSize: 16,
                            transition: "transform 0.2s",
                            color: "white",
                        }}
                    />
                </Box>
                <Typography fontSize={16} sx={{ color: "white" }}>
                    {subHeading}
                </Typography>
                <Typography
                    component="div"
                    fontSize={14}
                    sx={{
                        paddingTop: "5px",
                        whiteSpace: "pre-wrap",
                        color: "white",
                    }}
                >
                    <ul>
                        {content.map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ul>
                </Typography>
                {links ? (
                    <Box
                        sx={{
                            paddingTop: "12px",
                            paddingBottom: "12px",
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px",
                            flexWrap: "wrap",
                        }}
                    >
                        {links.map((link, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: "2px",
                                    color: "white",
                                    "&:hover": {
                                        color: "#D79E4F",
                                    },
                                }}
                            >
                                <LinkIcon sx={{ fontSize: 18 }} />
                                <Link
                                    href={link[1]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        textDecoration: "none",
                                        color: "inherit",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "2px",
                                    }}
                                >
                                    {link[0]}
                                </Link>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <></>
                )}

                <Box
                    sx={{
                        // paddingTop: "12px",
                        display: "flex",
                        flexDirection: "row",
                        gap: "8px",
                        flexWrap: "wrap",
                    }}
                >
                    {chips.map((chip, index) => (
                        <Chip
                            key={index}
                            label={chip}
                            size="small"
                            sx={{
                                p: 0.5,
                                color: "white",
                                backgroundColor: "#D79E4F",
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Paper>
    );
};

export default ResumeBox;
