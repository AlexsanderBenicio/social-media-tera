import {
  Box,
  Grid,
  FormGroup,
  Typography,
  createTheme,
  Button,
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  MenuItem,
  Select,
  InputLabel,
  Paper,
  ClickAwayListener,
  MenuList,
  Grow,
  Popper,
  ButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import purple from "@mui/material/colors/purple";
import blueGrey from "@mui/material/colors/blueGrey";
import axios from "axios";

const options = ["Criar um grupo", "Encontrar um grupo", "Sair"];

const bgColor = createTheme({
  palette: {
    primary: {
      light: purple[100],
      main: purple[500],
      dark: purple[700],
    },

    secondary: {
      light: blueGrey[200],
      main: blueGrey[400],
      dark: blueGrey[700],
    },
  },
});

const Dashboard = () => {
  // PREENCHER FORMULÁRIO
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [founder, setFounder] = useState("");
  const [privacy, setPrivacy] = useState("");
  // SELECIONAR CATEGORIAS
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleGroupName = (event) => {
    setGroupName(event.target.value);
  };

  const handleGroupDesc = (event) => {
    setDescription(event.target.value);
  };

  const handleGroupFounder = (event) => {
    setFounder(event.target.value);
  };

  const handleGroupPrivacy = (event) => {
    setPrivacy(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeSubCategory = (event) => {
    setSubCategory(event.target.value);
  };

  // GRUPO DE BOTÃO NO HEADER
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleFormSubmit = async () => {
    await axios
      .post("http://localhost:5000/create-group", {
        group_name: groupName,
        description: description,
        founder: founder,
        category: category,
        sub_category: subCategory,
        privacy: privacy,
      })
      .then(({ data }) => {
        console.log(data);
        alert("Grupo criado com sucesso");
      })
      .catch((e) => {
        console.log(e);
        alert("Dados incorretos\n Tente novamente");
      })
      .finally(() => {
        setGroupName("");
        setDescription("");
        setFounder("");
        setCategory("");
        setSubCategory("");
        setPrivacy("");
      });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Grid
        sx={{
          width: "100%",
          height: "120px",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          backgroundColor: bgColor.palette.primary.light,
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: "center", marginRight: "50px" }}
          >
            Seja bem-vindo FULANO
          </Typography>
          <ButtonGroup variant="contained" ref={anchorRef}>
            <Button sx={{ width: "266px" }} onClick={handleClick}>
              {options[selectedIndex]}
            </Button>
            <Button
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            sx={{
              zIndex: 1,
            }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      sx={{ width: "266px" }}
                      id="split-button-menu"
                      autoFocusItem
                    >
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
        <Grid
          sx={{
            height: "120px",
            width: "195px",
            backgroundColor: bgColor.palette.primary.main,
          }}
        >
          User Photo | User Name
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex" }}>
        <Grid
          sx={{
            width: "200px",
            height: "75vh",
            marginTop: "20px",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            display: "flex",
            flex: "1",
            backgroundColor: bgColor.palette.primary.dark,
          }}
        >
          <Typography variant="h4">Categorias</Typography>
        </Grid>
        <Grid
          sx={{
            width: "100vh",
            display: "flex",
            flex: "6",
          }}
        >
          <Grid sx={{ marginX: "auto" }}>
            <Typography variant="h3">Crie seu Primeiro Grupo</Typography>
            <Grid sx={{ marginTop: "10px" }}>
              <TextField
                variant="filled"
                label="Nome do Grupo"
                fullWidth
                size="small"
                required
                type="text"
                value={groupName}
                onChange={handleGroupName}
              />
            </Grid>
            <Grid sx={{ marginTop: "10px" }}>
              <TextField
                variant="filled"
                label="Descrição"
                fullWidth
                size="small"
                required
                type="text"
                value={description}
                onChange={handleGroupDesc}
              />
            </Grid>
            <Grid sx={{ marginTop: "10px" }}>
              <TextField
                variant="filled"
                label="Fundador"
                fullWidth
                size="small"
                required
                type="text"
                value={founder}
                onChange={handleGroupFounder}
              />
            </Grid>
            <Grid sx={{ marginTop: "10px" }}>
              <FormControl fullWidth size="small" variant="filled">
                <InputLabel>Categoria</InputLabel>
                <Select
                  value={category}
                  onChange={handleChangeCategory}
                  label="Categoria"
                >
                  <MenuItem value={10}>Categoria 1</MenuItem>
                  <MenuItem value={20}>Categoria 2</MenuItem>
                  <MenuItem value={30}>Categoria 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid sx={{ marginTop: "10px" }}>
              <FormControl size="small" fullWidth variant="filled">
                <InputLabel>Sub Categoria</InputLabel>
                <Select
                  value={subCategory}
                  onChange={handleChangeSubCategory}
                  label="Sub Categoria"
                >
                  <MenuItem value={10}>Sub Categoria 1</MenuItem>
                  <MenuItem value={20}>Sub Categoria 2</MenuItem>
                  <MenuItem value={30}>Sub Categoria 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid sx={{ marginTop: "10px" }}>
              <FormGroup>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Privacidade do Grupo
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={privacy}
                    onChange={handleGroupPrivacy}
                  >
                    <FormControlLabel
                      value="Privado"
                      control={<Radio />}
                      label="Privado"
                    />
                    <FormControlLabel
                      value="Público"
                      control={<Radio />}
                      label="Público"
                    />
                  </RadioGroup>
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid>
              <Button onClick={handleFormSubmit}>Criar grupo</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
