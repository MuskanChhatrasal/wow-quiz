import React from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate, Link } from "react-router-dom";
import SelectField from "../../Components/SelectField";
import TextFieldComp from "../../Components/TextFieldComp";
import useAxios from "../../hooks/useAxios";
import "./settings.css";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const history = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress style={{ marginLeft: "45rem" }} />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/questions");
  };

  return (
    <form onSubmit={handleSubmit} className="quiz-main-container">
      <h2 className="form-heading">Let's Start</h2>
      <SelectField options={response.trivia_categories} label="Category" />
      <SelectField options={difficultyOptions} label="Difficulty" />
      <SelectField options={typeOptions} label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Link to="/questions">
          <Button
            fullWidth
            variant="contained"
            type="submit"
            className="getStarted-btn"
          >
            Get Started
          </Button>
        </Link>
      </Box>
    </form>
  );
};

export default Settings;
