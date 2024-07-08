import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    useMediaQuery,
    useTheme,
    Grid,
    Button,
    IconButton,
} from "@mui/material";
import ResumeBox from "../Components/ResumeBox/ResumeBox";
import "./Solutions.css";
import { Link } from "react-router-dom";
import { ArrowOutward, GitHub, LinkedIn } from "@mui/icons-material";
import { COLOR_PRIMARY, LINK_GITHUB, LINK_LINKEDIN } from "../Constants/Common";

export function Main() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isBigScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [activeSection, setActiveSection] = useState("");

    const sections = [
        { id: "about-section", label: "About" },
        { id: "experience-section", label: "Experience" },
        { id: "projects-section", label: "Projects" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "0px", threshold: 1 } // Adjusted threshold
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    const scrollToSection = (sectionId) => {
        document
            .getElementById(sectionId)
            .scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const commonButtonStyles = {
        transition: "transform 0.2s",
        "&:hover": {
            color: COLOR_PRIMARY,
        },
        "&:hover .arrow-icon": {
            color: COLOR_PRIMARY,
            transform: "translate(3px, -3px)",
        },
    };

    const renderSideBox = () => (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                zIndex: 1000,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                [theme.breakpoints.up("lg")]: {
                    position: "fixed",
                    width: "20%",
                    height: "90vh",
                    // left: "550px",
                },
            }}
        >
            <Box>
                <Typography
                    fontSize={isSmallScreen ? 30 : 50}
                    sx={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                    Nicholas Brown
                </Typography>
                <Typography
                    fontSize={isSmallScreen ? 16 : 20}
                    sx={{ fontFamily: "Inter", fontWeight: "bold" }}
                >
                    Full-Stack Software Engineer
                </Typography>
                <Typography
                    fontSize={isSmallScreen ? 14 : 18}
                    sx={{ fontFamily: "Inter" }}
                >
                    I build engaging, efficient, and scalable software solutions
                    to solve complex problems and enhance user experiences.
                </Typography>
            </Box>

            {isBigScreen && (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        color: "white",
                    }}
                >
                    {sections.map((section) => (
                        <Button
                            key={section.id}
                            color="inherit"
                            onClick={() => scrollToSection(section.id)}
                            sx={{
                                ...commonButtonStyles,
                                color:
                                    activeSection === section.id
                                        ? COLOR_PRIMARY
                                        : "inherit",
                            }}
                        >
                            {section.label}
                        </Button>
                    ))}
                    <Button
                        color="inherit"
                        href="/resume.pdf"
                        target="_blank"
                        sx={commonButtonStyles}
                    >
                        View Full Résumé
                        <ArrowOutward
                            className="arrow-icon"
                            sx={{
                                fontSize: 16,
                                transition: "transform 0.2s",
                                color: "white",
                            }}
                        />
                    </Button>
                </Box>
            )}
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <IconButton component={Link} to={LINK_GITHUB}>
                    <GitHub sx={{ color: "white" }} />
                </IconButton>
                <IconButton component={Link} to={LINK_LINKEDIN}>
                    <LinkedIn sx={{ color: "white" }} />
                </IconButton>
            </Box>
        </Box>
    );

    const renderContent = () => (
        <Typography
            id="about-section"
            fontSize={isSmallScreen ? 14 : 18}
            sx={{
                fontFamily: "Inter",
                paddingBottom: "12px",
                marginBottom: "50px", // Added margin for better intersection
            }}
        >
            Skilled Full-Stack Software Engineer with over three years of
            experience in developing and maintaining web, cloud, mobile, and
            desktop applications. Adept in troubleshooting, providing technical
            support, and optimizing performance. Proficient in a wide range of
            programming languages, frameworks, and tools. Effective in
            Agile/Scrum environments to deliver high-quality software solutions.
            Quick learner and adaptable to new situations, consistently meeting
            project goals and deadlines.
            <br />
            <br />
            My main focus these days is to build my knowledge of applications,
            frameworks, programming languages, and other tools that I can use in
            my career. I most enjoy building software in the sweet spot where
            design and engineering meet — applications that are built well under
            the hood, while also looking good. In my free time, I tend to look
            at challenging my abilities by creating new software like mobile
            apps, websites, and desktop applications.
            <br />
            <br />
            When I'm not at the computer, I'm usually out on the airsoft field,
            around the Dungeons & Dragons table, or hanging out in my kitchen
            trying out new recipes.
        </Typography>
    );

    const renderResumeSection = () => (
        <Box
            id="experience-section"
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: isSmallScreen ? "0px" : "10px",
                gap: "10px",
                marginBottom: "50px", // Added margin for better intersection
            }}
        >
            <ResumeBox
                dateLabel="2021 - PRESENT"
                heading="Software Engineer"
                company="Hitachi Vantara"
                subHeading="Software Developer"
                content={[
                    "Created three new pages, eight forms, and six new features, while fixing over 40 major bugs across two applications, significantly improving functionality and user experience.",
                    "Integrated and maintained RESTful APIs for seamless backend communication.",
                    "Collaborated on the refactorization of multiple applications to optimize performance, reduce bugs, and streamline codebase",
                    "Utilized AWS services for scalable deployment and management of web applications.",
                ]}
                chips={[
                    "Java",
                    "Python",
                    "Javascript",
                    "HTML & SCSS",
                    "React",
                    "Django",
                    "RESTful API",
                    "AWS",
                ]}
                links={[]}
                dark={true}
            />
            <ResumeBox
                dateLabel="2019 - 2021"
                heading="IT Support Specialist"
                company="Freelance"
                subHeading=""
                content={[
                    "Provided comprehensive IT support, including hardware and software maintenance, ensuring optimal performance and reliability.",
                    "Supported IT operations in areas such as cybersecurity, programming, data analytics, enhancing overall system security and efficiency.",
                    "Implemented preventive measures and performed regular system updates to minimize downtime and enhance security.",
                ]}
                chips={[]}
                links={[]}
            />
            <Button
                color="inherit"
                href="/resume.pdf"
                target="_blank"
                sx={commonButtonStyles}
            >
                View Full Résumé
                <ArrowOutward
                    className="arrow-icon"
                    sx={{
                        fontSize: 16,
                        transition: "transform 0.2s",
                        color: "white",
                    }}
                />
            </Button>
        </Box>
    );

    const renderProjectsSection = () => (
        <Box
            id="projects-section"
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: isSmallScreen ? "0px" : "10px",
                gap: "10px",
            }}
        >
            <ResumeBox
                dateLabel="Top Project"
                heading="AI Powered Web Scraping System"
                subHeading="Software Architect / Scrum Master"
                content={[
                    "Led the development team as Scrum Leader, facilitating sprint planning, daily stand-ups, and retrospectives to ensure smooth Agile processes.",
                    "Defined and implemented the software architecture, utilizing Snowflake for data warehousing, Pinecone for vector search, and embeddings for data representation.",
                    "Developed an AI-powered web scraper to extract relevant data, manipulate it, and integrate it into client's system.",
                    "Coordinated with cross-functional teams to align project goals and deliverables, resulting in successful project completion on time and within budget.",
                    "Ensured data accuracy and reliability by integrating AI algorithms and optimizing the scraper for performance.",
                    "Mentored team members on best practices in software development and Agile methodologies, fostering a collaborative and efficient work environment.",
                ]}
                chips={[
                    "Python",
                    "OpenAI API",
                    "Prompt Engineering",
                    "Snowflake",
                    "Selenium",
                    "Pinecone",
                ]}
                links={[]}
            />
            <ResumeBox
                dateLabel="Showcase"
                heading="Portfolio Site"
                content={[
                    "A small portfolio site to showcase a little more about me.",
                ]}
                chips={[
                    "Javacript",
                    "HTML & SCSS",
                    "React.JS",
                    "MaterialUI",
                    "Firebase",
                ]}
                links={[]}
            />
            <ResumeBox
                dateLabel="First Project"
                heading="Python Socket-Based Chat Server"
                content={[
                    "Developed a multi-threaded chat server in Python using socket programming and the select module.",
                    "Server manages client connections, handles authentication, processes user commands, and broadcasts messages.",
                    "Client is responsible for: connection to server, error handling, user interface, message formatting.",
                ]}
                chips={["Python", "Sockets", "Networking", "GUIs"]}
                links={[]}
            />
            <Typography>
                Coded in Visual Studio Code by yours truly. Built with React.js
                and MaterialUI, deployed with Firebase.
            </Typography>
        </Box>
    );

    return (
        <Box
            sx={{
                background:
                    "radial-gradient(ellipse at bottom, #141923, #090a0f 100%)",
                minHeight: "100vh",
                overflow: "hidden",
                display: "flex",
                justifyItems: "center",
                justifyContent: "center",
                color: "white",
                padding: isSmallScreen ? "10px" : "50px",
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{
                    width: isSmallScreen ? "100%" : isBigScreen ? "60%" : "75%",
                    top: isSmallScreen ? "0" : "10vh",
                }}
            >
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    {renderSideBox()}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Typography
                        id="about-section"
                        fontSize={22}
                        sx={{
                            whiteSpace: "pre-wrap",
                            fontFamily: "Inter",
                            fontWeight: "bold",
                        }}
                    >
                        About
                    </Typography>

                    {renderContent()}
                    <Typography
                        fontSize={22}
                        sx={{
                            whiteSpace: "pre-wrap",
                            fontFamily: "Inter",
                            fontWeight: "bold",
                        }}
                    >
                        Experience
                    </Typography>
                    {renderResumeSection()}
                    <Typography
                        fontSize={22}
                        sx={{
                            whiteSpace: "pre-wrap",
                            fontFamily: "Inter",
                            fontWeight: "bold",
                        }}
                    >
                        Projects
                    </Typography>
                    {renderProjectsSection()}
                </Grid>
            </Grid>
        </Box>
    );
}
