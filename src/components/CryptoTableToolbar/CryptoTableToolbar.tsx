import {
  alpha,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import * as React from "react";

interface CryptoTableToolbarProps {
  handleClick?: () => void;
  isExpanded: boolean;
}

export default function CryptoTableToolbar({
  handleClick,
  isExpanded,
}: CryptoTableToolbarProps) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...{
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          minWidth: 200,
        }}
        onClick={handleClick}
      >
        {isExpanded ? <ExpandMoreIcon /> : <ChevronRightIcon />}
        <Typography variant="h6">Order Book</Typography>
      </Box>
      <Box className="spacer" sx={{ flex: "1 1 100%" }}></Box>
      <Box sx={{ display: "flex" }}>
        <Tooltip title="Decrease Precision">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Increase Precision">
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Toolbar>
  );
}
