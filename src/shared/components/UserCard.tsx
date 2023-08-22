import React from "react";
import { User } from "../../views/InfiniteScroll/types";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface IUserCard {
  user: User;
}

const UserCard: React.FC<IUserCard> = ({ user }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={user.avatar} alt={user.first_name} />}
        title={user.first_name + " " + user.last_name}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.phone_number}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.date_of_birth}
        </Typography>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <Input
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            defaultValue={user.password}
            disableUnderline
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default UserCard;
