import PropTypes from "prop-types";
import { useCopyToClipboard } from "react-use";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      cursor: "pointer",
      alignItems: "center",
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);

export const CopyToClipboardText = ({ text }) => {
  const [state, copyToClipboard] = useCopyToClipboard();
  const classes = useStyles();
  return (
    <Tooltip title="Copy" placement="top" arrow>
      <Button className={classes.root} onClick={() => copyToClipboard(text)}>
        <FileCopyOutlinedIcon fontSize="small" className={classes.icon} />
        {text}
      </Button>
    </Tooltip>
  );
};

CopyToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};
