import {Button, FormControl, InputLabel, ListSubheader, makeStyles, MenuItem, Select} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {changeSortState} from "../reducers/ProductReducer/ProductActions";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function SortSection() {
const classes = useStyles();
    const dispatch = useDispatch()

    return(
        <div className={"sort-section"}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Sort Type</InputLabel>

                <Select defaultValue=""
                        onChange={(e) =>
                            dispatch(changeSortState(e.target.value))}
                        id="grouped-select sort">

                    <ListSubheader>Price</ListSubheader>
                    <MenuItem value={"priceAsc"}> Low To High</MenuItem>
                    <MenuItem value={"priceDesc"}>High To Low</MenuItem>
                    <ListSubheader>Profit</ListSubheader>
                    <MenuItem value={"profitAsc"}> Low To High</MenuItem>
                    <MenuItem value={"profitDesc"}>High To Low</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
