import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

// const navItems = ['Inicio', 'Sobre Mi', 'Servicios', 'Experiencia', 'Contactame'];
const pages = ['Inicio', 'Sobre Mi', 'Servicios', 'Experiencia', 'Contactame'];
const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <>
            <AppBar position="fixed" className='bg-glass' sx={{
                // 1. Efecto de Vidrio
                backgroundColor: 'rgba(30, 41, 59, 0.3)', // Color #1e293b con 70% de opacidad
                backdropFilter: 'blur(3px)',             // Desenfoque del fondo
                border: '1px solid rgba(255, 255, 255, 0.1)', // Borde sutil para definir el cristal

                // 2. Flotado y Márgenes
                position: 'fixed',         // Para que flote al hacer scroll
                top: '10px',               // Margen superior
                left: '10px',              // Margen izquierdo
                right: '10px',             // Margen derecho
                width: 'calc(100% - 20px)', // Ajuste de ancho para compensar los 10px de cada lado

                // 3. Estética final
                borderRadius: '16px',      // Bordes redondeados modernos
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', // Sombra más profunda para dar elevación
                backgroundImage: 'none',   // Quita el gradiente por defecto de MUI si es un AppBar
            }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography
                                            textAlign="start"
                                            component="a"
                                            href={`#${page.toLowerCase().replace(/\s+/g, '-')}`} // Reemplaza espacios por guiones si los hay
                                            sx={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                                        >
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#inicio"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Lourdes Ramos
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Contactar ahora">
                                <IconButton
                                    component="a"
                                    href="#contactame"
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt="Lourdes"
                                        src="https://sercofi.pe/wp-content/uploads/2024/03/imagen-sercofi-blog-lima-peru-5.webp"
                                        sx={{ border: '2px solid rgba(255,255,255,0.2)' }}
                                    />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default NavBar;