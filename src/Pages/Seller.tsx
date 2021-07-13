import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import SurveyCard from "../components/Cards/SurveyCard";
import styled, {css} from 'styled-components'
import { PaddingContainer } from '../styles/themes'

const useStyles = makeStyles({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    alignItems: "center",
    columnGap: "1em",
    rowGap: "1em",
    justifyItems: "grid-start",
    marginBottom: '3em',
  },
  gridContainer2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    alignItems: "center",
    columnGap: "1em",
    rowGap: "1em",
    justifyItems: "grid-start",
    marginBottom: '3em',
  },
  formControl: {
      backgroundColor: '#a9a9a9',
  }
});

const MainHead = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    text-align: start;
    margin-bottom: 2em;
`
const FilterCommonCss = css`
    background-color: ${props => props.theme.stroke};
    font-size: 0.9rem;
    padding: 0.7em;
    color: $darkGray;
    font-weight: $medium;
    border-radius: 4px;
    outline: none;
    border: none;
    margin-right: 1em;
    width: 95%;
`
const FilterDropCss = css`
    height: calc(0.9em + 1.4rem);
    overflow: hidden;
    border: none;
    outline: none;
    box-shadow: none;
`
const FilterCommon = styled.input`
    ${FilterCommonCss}
`
const Dropdown = styled(Select)`
    ${FilterCommonCss}
    ${FilterDropCss}
`
const DropOption = styled(MenuItem)`
    height: calc(0.9em + 1.4rem);
    width: 100%;
`
const DraftHolder = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 2em;
`
const DraftHead = styled.p`
    text-align: start;
    margin-bottom: 1.6em;
    font-weight: 700;
    font-size: 0.9rem;
`
type formsAPIType = {
    form_id: string
    form_title: string
    date_updated: string
}[]

const Seller = () => {
    const [availableForms, setAvailableForms] = useState([]);
  const [modified, setModified] = useState(true);
  const classes = useStyles();

  const [dropdowns, setDropdowns] = useState({
      search: '',
      date: '',
      status: '',
      location: '',
      category: '',
  })
//   interface EventTarget {
//     name: string
//     value: string
//   }
//   interface Event extends React.MouseEvent<HTMLElement>{
//     target: EventTarget
//   }
  const handleChange = (event: React.ChangeEvent<{ name?: string | undefined, value: unknown }>) => {
    const name = event.target.name;
    setDropdowns({
      ...dropdowns,
      [name as string]: event.target.value,
    });
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    console.log(`${process.env.REACT_APP_PRODUCTION}`)
    axios
      .get(`${process.env.REACT_APP_PRODUCTION}/create/forms`)
      .then((forms) => setAvailableForms(forms.data.rows))
      .catch((err) => console.log(err));
    return () => {
      source.cancel();
    };
  }, [modified]);

  if (availableForms === null)
    return (
      <div>
        <SurveyCard setModified={setModified} />
      </div>
    );
  else {
    return (
      <PaddingContainer>
        <MainHead>Create Survey</MainHead>
        <div className={classes.gridContainer}>
          <FilterCommon
            type="text"
            placeholder="Search"
          />
          <FilterCommon
            type="date"
          />
        <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
            <Dropdown
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={dropdowns.status}
            onChange={handleChange}
            label="Age"
            name='status'
            // className='create-filter-common create-filter-dropdown'
            >
                {/* <MenuItem value="">
                    <em>None</em>
                </MenuItem> */}
                <DropOption value={10}>status</DropOption>
                <DropOption value={20}>Twenty</DropOption>
                <DropOption value={30}>Thirty</DropOption>
            </Dropdown>
        </FormControl>
          {/* <input type='option' placeholder='Status' className='create-filter-common create-filter-status'/> */}
          <FilterCommon
            type="text"
            placeholder="Location"
          />
          {/* <input
            type="text"
            placeholder="Category"
            className="create-filter-common create-filter-category"
          /> */}
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
            <Dropdown
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={dropdowns.category}
            onChange={handleChange}
            label="Age"
            name='category'
            >
                {/* <MenuItem value="">
                    <em>None</em>
                </MenuItem> */}
                <DropOption value={10}>status</DropOption>
                <DropOption value={20}>Twenty</DropOption>
                <DropOption value={30}>Thirty</DropOption>
            </Dropdown>
        </FormControl>
        </div>
        <SurveyCard formId={null} setModified={setModified} />
        <DraftHolder>
            <DraftHead>
                Drafts
            </DraftHead>
            <div className={classes.gridContainer2}>
            {(availableForms as formsAPIType).map((f, i) => (
                <SurveyCard
                formId={f.form_id}
                formTitle={f.form_title}
                dateUpdated={f.date_updated}
                key={i}
                setModified={setModified}
                />
            ))}
            </div>
        </DraftHolder>
      </PaddingContainer>
    );
  }
}

export default Seller
