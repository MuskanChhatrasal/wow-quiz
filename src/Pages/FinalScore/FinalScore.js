import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { handleAmountChange, handleScoreChange } from "../../redux/actions";

const FinalScore = () => {
  const disptach = useDispatch();
  const history = useNavigate();
  const { score } = useSelector((state) => state);

  const handleBackToSettings = () => {
    disptach(handleScoreChange(0));
    disptach(handleAmountChange(50));
    history("/settings");
  };

  return (
    <Box
      mt={30}
      style={{
        marginLeft: "40rem",
        marginTop: "10rem",
        color: "var(--primary-color)",
      }}
    >
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button
        onClick={handleBackToSettings}
        variant="outlined"
        style={{
          color: "var(--primary-dark-color)",
          marginLeft: "2.5rem",
          border: "1px solid var(--primary-dark-color)",
        }}
      >
        back to settings!
      </Button>
    </Box>
  );
};

export default FinalScore;
