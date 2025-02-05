import { render } from "react-dom";
//NOTE: If makeStyles was located in src/app we would write: import { makeStyles } from "app/makeStyles";
import { useStyles } from "makeStyles";
import { StyledEngineProvider } from "@material-ui/core/styles";
import { App } from "./App";

function Root(){

    const { css } = useStyles();

    return <App className={css({ "boxShadow": "10px 5px 5px teal" })} />;

}

render(
    <StyledEngineProvider injectFirst>
        <Root />
    </StyledEngineProvider>,
    document.getElementById("root")
);