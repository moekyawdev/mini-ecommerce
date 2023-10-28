import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Box, Typography } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface Props {
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

const InsideCart = ({ title, price, description, imageUrl }: Props) => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: 800,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={imageUrl || ""} alt="#" height={190} />
              <Box sx={{ mx: 5 }}>
                <Typography variant="h5" sx={{ my: 5 }}>
                  {title}
                </Typography>
                <Typography variant="h6">$ {price}</Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex" }}>
              <RemoveCircleOutlineIcon
                sx={{ color: "green", fontSize: 40, cursor: "pointer" }}
              />
              <Typography
                sx={{
                  mx: 2,
                  fontSize: 20,
                  my: "auto",
                }}
              >
                1
              </Typography>
              <AddCircleOutlineIcon
                sx={{ color: "green", fontSize: 40, cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InsideCart;
